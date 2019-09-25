// React
import React from 'react';
// Shards
import { Col, Container, Row } from "shards-react";
// CSS
import './League.scss';
// Components


class League extends React.Component {
  render(){
    return (
      <div className="league-container">
        <div className="league-title">KoreanV League</div>
        <LeagueInteraction />
        <LeagueTable />
      </div>
    );
  }
}


function LeagueInteraction(props){
  const status = false;
  return (
    <div className="league-interaction">
      <div className="league-interaction-title">Your Standings</div>
      <div className="league-interaction-state">
        <Container>
          <Row className="league-interaction-state-headers">
            <Col sm="2" className="league-interaction-state-header">Status</Col>
            <Col sm="7" className="league-interaction-state-header">Previous Weeks</Col>
            <Col sm="3" className="league-interaction-state-header">This Week</Col>
          </Row>
          <Row className="league-interaction-state-items">
            <Col sm="2" className="league-interaction-state-item-status">
              {status ? <div><span role="img" aria-label="true">&#9989;</span></div> : <div><span role="img" aria-label="false">&#10060;</span></div>}
            </Col>
            <Col sm="7" className="league-interaction-state-item">MNU, CHS, LIV</Col>
            <Col sm="3" className="league-interaction-state-item">MNC</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

function LeagueTable(props){
  return (
    <div className="league-table">
      <div className="league-table-title">League Table</div>
        <Container>
        <Row className="league-table-state-headers">
          <Col sm="2" className="league-table-state-header">Username</Col>
          <Col sm="1" className="league-table-state-header">Status</Col>
          <Col sm="7" className="league-table-state-header">Previous Weeks</Col>
          <Col sm="2" className="league-table-state-header">This Week</Col>
        </Row>
        <LeagueRow username="Callo18" status={false} thisWeek="MNC" previousWeeks="MNU, CHS, LIV"/>
        <LeagueRow username="Falloon" status={true} thisWeek="MNU" previousWeeks="MNU, CHS, LIV"/>
        <LeagueRow username="CanOfJam" status={false} thisWeek="WHM" previousWeeks="MNU, CHS, LIV"/>
        <LeagueRow username="ConorG123" status={true} thisWeek="MNU" previousWeeks="MNU, CHS, LIV"/>
        <LeagueRow username="TomC97" status={false} thisWeek="MNU" previousWeeks="MNU, CHS, LIV"/>
        <LeagueRow username="Spooks" status={true} thisWeek="SWN" previousWeeks="MNU, CHS, LIV"/>
        <LeagueRow username="FatZoot" status={false} thisWeek="MNU" previousWeeks="MNU, CHS, LIV"/>
        <LeagueRow username="Iano" status={true} thisWeek="CLS" previousWeeks="MNU, CHS, LIV"/>
        <LeagueRow username="Dellers" status={false} thisWeek="MNU" previousWeeks="MNU, CHS, LIV"/>
      </Container>
    </div>
  );
}

function LeagueRow(props){
  const {username, status, thisWeek, previousWeeks} = props;
  return(
    <Row className="league-table-state-items">
      <Col sm="2" className="league-table-state-item">{username}</Col>
      <Col sm="1" className="league-table-state-item-status">
      {status ? <div><span role="img" aria-label="true">&#9989;</span></div> : <div><span role="img" aria-label="false">&#10060;</span></div>}
      </Col>
      <Col sm="7" className="league-table-state-item">{previousWeeks}</Col>
      <Col sm="2" className="league-table-state-item">{thisWeek}</Col>
    </Row>
  );
}

export default League;
