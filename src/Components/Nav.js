// React
import React from "react";
// Shards
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Collapse,
  Button
} from "shards-react";
// Amplify
import {Auth} from 'aws-amplify';
// CSS
import './Nav.scss';

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  SignOut() {
    Auth.signOut()
    .then(data => console.log("Succesfully Signed out"))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Navbar type="dark" theme="dark" expand="md">
        <NavbarBrand href="#" className="nav-brand">Last Man Standing</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar className="ml-auto">
            <Button squared theme="light" size="sm" onClick={this.SignOut}>
              Sign Out
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
