import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
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
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);