import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {widthAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <div className={'profile'}>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  widthAuthRedirect
)(ProfileContainer);