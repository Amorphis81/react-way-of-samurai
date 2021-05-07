import React, {Component} from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = state => ({
  isAuth: state.auth.isAuth,
});

export const widthAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />
      return <Component {...this.props} />
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}