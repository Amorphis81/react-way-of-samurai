import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {
  sendMessage,
  updateNewMessageBody,
} from "../../redux/messages-reducer";
import {widthAuthRedirect} from "../../hoc/WithAuthRedirect";

const AuthRedirectComponent = widthAuthRedirect(Dialogs);

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage,
  }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageBody})(AuthRedirectComponent);

export default DialogsContainer