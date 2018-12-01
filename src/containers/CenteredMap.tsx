import {connect} from "react-redux";
import MainMap from "../components/MainMap/MainMap";

const mapStateToProps = (state: any) => state.centerMap;

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMap)
