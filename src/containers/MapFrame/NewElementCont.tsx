import {LatLng} from "leaflet";
import {connect} from "react-redux";
import {popupNewHide, ptoAdd} from "../../actions";
import NewElement, {INewElementForDispatch, INewElementFromState} from "../../components/MapFrame/NewElement";
import {ItemTypeCode} from "../../model/Item";
import {IRootState} from "../../reducers";

const mapStateToProps = (state: IRootState): INewElementFromState => ({
    pos: state.map.newPos,
    showing: state.map.newPopupShowing
});

const mapDispatchToProps = (dispatch: any): INewElementForDispatch => ({
    add: (pos: LatLng, typ: ItemTypeCode) => () => {
        dispatch(ptoAdd({pos, typ}));
        dispatch(popupNewHide());
    },
    close: () => dispatch(popupNewHide()),
});

const NewElementCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewElement);

export default NewElementCont;
