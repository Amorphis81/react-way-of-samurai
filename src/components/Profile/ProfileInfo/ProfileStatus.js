import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }
  activateEditMode () {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode () {
    this.setState({
      editMode: false
    })
  }
  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div onDoubleClick={this.activateEditMode.bind(this)} className={'h-7 bg-gray-100'}>{this.props.status}</div>
        }
        {this.state.editMode &&
          <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} className={'h-7 border w-[100%]'} type="text" value={this.props.status} />
        }
      </div>
    )
  }
}

export default ProfileStatus;