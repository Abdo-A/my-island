import { connect } from "react-redux";
import { Icon, Menu, Sidebar, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import withSizes from "react-sizes";

import { MainMenuZIndex } from "../../../data/z-indices";
import { pages } from "../../../data/pagesData";
import * as actions from "../../../store/actions";
import Aux from "../../../hoc/Auxe/Auxe";
import Backdrop from "../../UI/Backdrop/Backdrop";

import "./MainMenu.css";

class MainMenu extends Component {
  state = {
    backdropVisible: false,
    loadingLogout: false
  };

  componentDidMount() {
    Array.from(
      document.getElementsByClassName(this.props.location.pathname)
    ).forEach(element => {
      element.style.backgroundColor = "rgba(96, 101, 101, 0.39)";
    });

    //Initializing the menu visibility state:
    this.props.handleMainMenuShowAndHide(
      this.props.screenWidth >= 800 ? "show" : "hide"
    );
  }

  handleMainMenuShowAndHide = showOrHide => {
    this.props.handleMainMenuShowAndHide(showOrHide);
    this.setState(() => ({
      backdropVisible: showOrHide === "show" ? true : false
    }));
  };

  handleMenuItemClick = e => {
    Array.from(document.getElementsByClassName("item")).forEach(element => {
      element.style.backgroundColor = "#1B1C1D";
    });
    e.currentTarget.style.backgroundColor = "rgba(96, 101, 101, 0.39)";
  };

  logout = () => {
    this.setState(() => ({
      loadingLogout: true
    }));

    setTimeout(() => {
      this.setState(() => ({
        loadingLogout: false
      }));

      this.props.logout();
    }, 1000);
  };

  render() {
    let signInAndSignUpButtons = null;
    let logoutButton = null;

    if (this.props.authenticated) {
      logoutButton = (
        <Button onClick={this.logout} loading={this.state.loadingLogout}>
          Logout
        </Button>
      );
    }

    if (!this.props.authenticated) {
      signInAndSignUpButtons = (
        <Button.Group size="tiny">
          <Button onClick={this.props.openSignIn} color="teal" size="tiny">
            Sign In
          </Button>
          <br />
          <Button.Or />
          <br />
          <Button positive onClick={this.props.openSignUp} size="tiny">
            Sign Up
          </Button>
        </Button.Group>
      );
    }

    return (
      <Aux className="MainMenu">
        <Backdrop
          show={this.state.backdropVisible}
          onClick={() => this.handleMainMenuShowAndHide("hide")}
          mobileOnly
        />

        <div
          className="MainMenu_ShowMenuButton"
          onClick={() => this.handleMainMenuShowAndHide("show")}
          style={{
            zIndex: MainMenuZIndex,
            position: "fixed",
            top: "10px",
            left: "10px"
          }}
        >
          <div />
          <div />
          <div />
        </div>

        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={this.props.menuVisible}
          width="thin"
          style={{ zIndex: MainMenuZIndex }}
        >
          <div
            style={{
              color: "white",
              display: "inline-block",
              padding: "0 0 0 80%"
            }}
          >
            <Icon
              name="close"
              onClick={() => this.handleMainMenuShowAndHide("hide")}
              style={{ cursor: "pointer" }}
            />
          </div>

          {signInAndSignUpButtons}

          {pages.map(page => {
            return (
              <NavLink to={page.path} key={page.path}>
                <Menu.Item
                  as="span"
                  className={page.path}
                  onClick={e => this.handleMenuItemClick(e)}
                >
                  <Icon name={page.icon} />
                  <span
                    style={{
                      textTransform: "capitalize"
                    }}
                  >
                    {page.name}
                  </span>
                </Menu.Item>
              </NavLink>
            );
          })}
          {logoutButton}
        </Sidebar>
      </Aux>
    );
  }
}

MainMenu.propTypes = {
  menuVisible: PropTypes.bool
};

const mapSizesToProps = ({ width }) => ({
  screenWidth: width
});

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    menuVisible: state.basic.mainMenuVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSignUp: () => dispatch(actions.openSignUp()),
    openSignIn: () => dispatch(actions.openSignIn()),
    logout: () => dispatch(actions.authenticationLogout()),
    handleMainMenuShowAndHide: showOrHide =>
      dispatch(actions.setMainMenuVisible(showOrHide))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSizes(mapSizesToProps)(MainMenu));
