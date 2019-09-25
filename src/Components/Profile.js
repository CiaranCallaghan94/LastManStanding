// React
import React from 'react';
// Social Buttons
import { SocialIcon } from 'react-social-icons';
// CSS
import './Profile.scss';
// Components

class Profile extends React.Component {
  render(){
    return (
      <div className="profile-container">
        <ProfileData/>
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
  // Pass Username and statistics
  return (
    <div className="profile">
      <div className="profile-name">
        Callo18
      </div>
      <ProfileStatistics />
      <ProfileStatistics />
      <ProfileStatistics />
      <Footer />
    </div>
  );
}

function ProfileStatistics(props){
  return (
    <div className="profile-statistics-section">
      <div className="profile-statistics-title">
        Statistics
      </div>
      <div className="profile-statistics-databox">
        <ul>
          <li>Wins: 3</li>
          <li>Losses: 10</li>
          <li>Leagues: 1</li>
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
