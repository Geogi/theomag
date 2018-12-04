import {LeafletMouseEvent} from "leaflet";
import {connect} from "react-redux";
import {popupNewShow} from "../actions";
import MapFrame, {IMapFrameForDispatch, IMapFrameFromState} from "../components/MapFrame";
import {IRootState} from "../reducers";

const mapStateToProps = (state: IRootState): IMapFrameFromState => ({
    center: state.map.center,
    zoom: state.map.zoom,
});

const mapDispatchToProps = (dispatch: any): IMapFrameForDispatch => ({
    showItemPopup: (e: LeafletMouseEvent) => dispatch(popupNewShow(e.latlng)),
});

const MapFrameCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapFrame);

export default MapFrameCont;
