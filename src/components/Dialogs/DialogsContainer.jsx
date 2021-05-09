import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {
  sendMessage,
  updateNewMessageBody,
} from "../../redux/messages-reducer";
import {widthAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage,
  }
}

export default compose(
  connect(mapStateToProps, {sendMessage, updateNewMessageBody}),
  widthAuthRedirect
)(Dialogs)