import React from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader/>
  }
  const profile = props.profile;
  const aboutMe = profile.aboutMe ? profile.aboutMe : '';
  const fullName = profile.fullName ? profile.fullName : '';
  const lookingForAJob = profile.lookingForAJob ? 'ищу' : 'не ищу';
  const lookingForAJobDescription = profile.lookingForAJobDescription
  const socials = Object.keys(profile.contacts);
  let contacts = [];

  if (socials.length > 0) {
    for (let i = 0; i < socials.length; i++){
      let cont = profile.contacts[socials[i]];
      let soc = socials[i];
      if (cont){
        contacts.push( <div key={i}>{soc}: {cont}</div> );
      }
    }
  }

  return (
    <div className="profile-info">
      <img className="avatar profile-info__avatar" src={props.profile.photos.small} alt="avatar"/>
      <div className="profile-info__descr">
        <div className="profile-info__row">
          <div className="profile-info__caption">Full Name:</div>
          <div className="profile-info__text">{fullName}</div>
        </div>
        <div className="profile-info__row">
          <div className="profile-info__caption">About me:</div>
          <div className="profile-info__text">{aboutMe}</div>
        </div>
        <div className="profile-info__row">
          <div className="profile-info__caption">Job:</div>
          <div className="profile-info__text job-row">
            <div className="job-row__looking">{lookingForAJob}</div>
            ({lookingForAJobDescription})
          </div>
        </div>
        <div className="profile-info__row">
          <div className="profile-info__caption">Contacts:</div>
          <div className="profile-info__text profile-contacts">{contacts}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;