import {LeafletMouseEvent} from "leaflet";
import {connect} from "react-redux";
import {ptoAdd} from "../actions";
import MainMap from "../components/MainMap/MainMap";

const mapStateToProps = (state: any) => ({
    ...state.map,
    pto: state.pto
});

// noinspection JSUnusedGlobalSymbols: wired automatically by `connect`
const mapDispatchToProps = (dispatch: any) => ({
    ptoAdd: (e: LeafletMouseEvent) => dispatch(ptoAdd({
        x: e.latlng.lng,
        y: e.latlng.lat,
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMap)
