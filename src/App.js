// React
import React from 'react';
// Shards
import { Container, Row, Col } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
//  Loading
import ReactLoading from 'react-loading';
// Amplify
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
// CSS
import './App.scss';
// Components
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Leagues from './Components/Leagues';

/*
TO DO:
Pass League information thoughout Components
*/

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

  constructor(props){
    super(props);
    this.getProfile = this.getProfile.bind(this);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile(){
    // Make GetProfile Request
    /*
    {
    wins: 1,
    losses: 20,
    leagues: [1]
    }
    */
    // Take the List of Leagues and Make GetLeagues Request
    /*
    {
    leagues: [{
      leagueName: "Main",
      players: [
      {
        username: "Callo18",
        status: true,
        previousWeeks: "MNU, CHS, LIV",
        thisWeek: "MNC"
      },
      {
        username: "Falloon",
        status: false,
        previousWeeks: "MNU, CHS, LIV",
        thisWeek: "MNC"
      },
      {
        username: "canOfJam",
        status: true,
        previousWeeks: "MNU, CHS, LIV",
        thisWeek: "MNC"
      }
      ]
    }]
    }
    // Get teams
    teams: [
      {
        name: "Manchester United",
        abbrev: "MNU"
      },
      {
        name: "LiverPool",
        abbrev: "LIV"
      },
    ]
    */
    this.setState(state => (
      {
        isLoading: false,
        profile: {
          wins: 1,
          losses: 20,
          leagues: [1]
        },
        leagues: [
          {
            leagueName: "Main",
            players: [
              {
                username: "Callo18",
                status: true,
                previousWeeks: "MNU, CHS, LIV",
                thisWeek: "MNC"
              },
              {
                username: "Falloon",
                status: false,
                previousWeeks: "MNU, CHS, LIV",
                thisWeek: "MNC"
              },
              {
                username: "canOfJam",
                status: true,
                previousWeeks: "MNU, CHS, LIV",
                thisWeek: "MNC"
              }
            ]
          }
        ],
        teams: [
          {
            name: "Manchester United",
            abbrev: "MNU"
          },
          {
            name: "LiverPool",
            abbrev: "LIV"
          },
        ]
      }));
  }

  render(){
    const {isLoading, profile, leagues, teams} = this.state;
    const {username} = this.props.authData;
    return (
      <div className="app">
        {isLoading ? <Loading/> : (
          <>
            <Nav />
            <Container className="app-container">
              <Row noGutters>
                <Col sm="12" lg="8">
                  <Leagues leagues={leagues} teams={teams}/>
                </Col>
                <Col sm="12" lg="4">
                  <Profile profile={profile} username={username}/>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </div>
    );
  }
}

const Loading = () => (
  <div className="loading-object">
    <ReactLoading type={'spin'} color={'#FF9900'} height={'100px'} width={'100px'} />
  </div>
);

export default withAuthenticator(App, false);
