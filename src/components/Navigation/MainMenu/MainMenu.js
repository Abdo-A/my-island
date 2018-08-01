import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";

import { pages } from "../../../data/pagesData";
import Aux from "../../../hoc/Auxe/Auxe";

import "./MainMenu.css";

class MainMenu extends Component {
  state = {
    visible: true
  };

  componentDidMount() {
    Array.from(
      document.getElementsByClassName(this.props.location.pathname)
    ).forEach(element => {
      element.style.backgroundColor = "rgba(96, 101, 101, 0.39)";
    });
  }

  handleMainMenuShowAndHideButtonClick = showOrHide => {
    this.setState(() => ({
      visible: showOrHide === "show" ? true : false
    }));
    this.props.onMainMenuAction(showOrHide);
  };

  handleMenuItemClick = e => {
    Array.from(document.getElementsByClassName("item")).forEach(element => {
      element.style.backgroundColor = "#1B1C1D";
    });
    e.currentTarget.style.backgroundColor = "rgba(96, 101, 101, 0.39)";
  };

  render() {
    return (
      <Aux className="MainMenu">
        <div
          className="MainMenu_ShowMenuButton"
          onClick={() => this.handleMainMenuShowAndHideButtonClick("show")}
          style={{ position: "fixed", top: "10px", left: "10px" }}
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
          visible={this.state.visible}
          width="thin"
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
              onClick={() => this.handleMainMenuShowAndHideButtonClick("hide")}
              style={{ cursor: "pointer" }}
            />
          </div>

          {pages.map(page => {
            return (
              <NavLink to={page.path} key={page.path}>
                <Menu.Item
                  as="span"
                  className={page.path}
                  onClick={e => this.handleMenuItemClick(e)}
                >
                  <Icon name={page.icon} />
                  <span style={{ textTransform: "capitalize" }}>
                    {page.name}
                  </span>
                </Menu.Item>
              </NavLink>
            );
          })}
        </Sidebar>
      </Aux>
    );
  }
}

MainMenu.propTypes = {
  handleMainMenuShowAndHideButtonClick: PropTypes.func,
  visible: PropTypes.bool
};

export default MainMenu;
