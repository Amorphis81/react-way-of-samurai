import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {widthAuthRedirect} from "../../hoc/WithAuthRedirect";

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

const AuthRedirectComponent = widthAuthRedirect(ProfileContainer);

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);