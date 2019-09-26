// React
import React from 'react';
// Shards
import {
  Button,
  Collapse,
  Col,
  Row,
  Container
} from "shards-react";
// CSS
import './TeamPicker.scss';
// Components


class TeamPicker extends React.Component {

  constructor(props) {
  super(props);
  this.toggle = this.toggle.bind(this);
  this.state = { collapse: false };
}

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} className="teams-container-button">Pick Your Team</Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
            <h5>Select your team and lock it in for next week</h5>
            <Container>
              <Row>
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
                <Team />
              </Row>
            </Container>
          </div>
        </Collapse>
      </div>
    );
  }
}

function Team(props) {
  return(
    <Col sm="4">
      <Button className="team-button">
        <span>Manchester United</span>
      </ Button>
    </Col>
  )
}

export default TeamPicker;
