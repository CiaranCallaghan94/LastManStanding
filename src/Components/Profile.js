// React
import React from 'react';
// Social Buttons
import { SocialIcon } from 'react-social-icons';
// CSS
import './Profile.scss';
// Components

class Profile extends React.Component {
  render(){
    const {profile, username} = this.props;

    return (
      <div className="profile-container">
        <ProfileData profile={profile} username={username}/>
      </div>
    );
  }
}
/*
Display:
  -image
  -name
  -statistics
  -leagues
*/
function ProfileData(props){
  const profile = props.profile;
  const username = props.username;
  return (
    <div className="profile">
      <div className="profile-name">
        {username}
      </div>
      <ProfileStatistics profile={profile} />
      <Footer />
    </div>
  );
}

function ProfileStatistics(props){

  const {wins, losses, leagues} = props.profile;

  return (
    <div className="profile-statistics-section">
      <div className="profile-statistics-title">
        Statistics
      </div>
      <div className="profile-statistics-databox">
        <ul>
          <li>Wins: {wins}</li>
          <li>Losses: {losses}</li>
          <li>Leagues: {leagues.length}</li>
        </ul>
      </div>
    </div>
  );
}

function Footer(props){
  return (
    <div className="footer-section">
      <div>© 2019 Last Man Standing</div>
      <div className="social-section">
        <SocialIcon network="instagram" url="https://www.instagram.com/ciaran.codes/" style={{ height: 30, width: 30 }} />
      </div>
    </div>
  );
}

export default Profile;
