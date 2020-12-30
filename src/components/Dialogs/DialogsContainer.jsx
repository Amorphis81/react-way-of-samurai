import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: () => dispatch(sendMessageCreator()),
    sendMessage: (body) => dispatch(updateNewMessageBodyCreator(body)),
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer