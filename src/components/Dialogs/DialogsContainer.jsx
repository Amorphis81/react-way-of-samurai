import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {
  sendMessage,
  updateNewMessageBody,
} from "../../redux/messages-reducer";

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageBody})(Dialogs);

export default DialogsContainer