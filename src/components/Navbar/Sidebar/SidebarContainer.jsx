import Sidebar from "./Sidebar";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return{
    sidebar: state.sidebar,
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;