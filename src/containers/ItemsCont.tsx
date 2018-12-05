import {connect} from "react-redux";
import {ptoDel} from "../actions";
import Items, {IItemsForDispatch, IItemsFromState} from "../components/MapFrame/Items";
import {IRootState} from "../reducers";

const mapStateToProps = (state: IRootState): IItemsFromState => ({
    items: state.pto
});

const mapDispatchToProps = (dispatch: any): IItemsForDispatch => ({
    eqDel: (key: string) => () => dispatch(ptoDel(key))
});

const ItemsCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Items);

export default ItemsCont;
