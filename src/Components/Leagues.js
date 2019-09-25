// React
import React from 'react';
// CSS
import './Leagues.scss';
// Components
import League from './League'

class Leagues extends React.Component {
  render(){
    return (
      <div className="leagues-container">
        <League />
      </div>
    );
  }
}

export default Leagues;
