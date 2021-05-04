import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";

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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);