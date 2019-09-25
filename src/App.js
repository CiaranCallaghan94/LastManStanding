// React
import React from 'react';
// Shards
import { Container, Row, Col } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
// Amplify
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
// CSS
import './App.scss';
// Components
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Leagues from './Components/Leagues';

Amplify.configure({
    Auth: {
        // only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'eu-west-1:f528caf6-04ca-46e0-ae06-03f0d14240a9',
        // - Amazon Cognito Region
        region: 'eu-west-1',
        // - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-1_ESE65E9oW',
        // - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '7sbngm7qtfhicnggr0doffvs1m',
        // - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
    },
    Analytics: {
        // - disable Analytics if true
        disabled: false,
        // - Allow recording session events. Default is true.
        autoSessionRecord: true,
        AWSPinpoint: {
            // -  Amazon Pinpoint App Client ID
            appId: 'bc9af75e0e854d4e901e5d7f8b024d8c',
            // -  Amazon service region
            region: 'us-east-1'
        }
    }
});

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <Nav />
        <Container className="app-container">
          <Row noGutters>
            <Col sm="12" lg="8">
              <Leagues />
            </Col>
            <Col sm="12" lg="4">
              <Profile />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAuthenticator(App, false);
