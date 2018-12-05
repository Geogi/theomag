import {connect} from "react-redux";
import {ptoDel, routeAdd, routeStart} from "../../actions";
import Items, {IItemsForDispatch, IItemsFromState} from "../../components/MapFrame/Items";
import {IRootState} from "../../reducers";

const mapStateToProps = (state: IRootState): IItemsFromState => state.pto;

const mapDispatchToProps = (dispatch: any): IItemsForDispatch => ({
    eqDel: (key: string) => () => dispatch(ptoDel(key)),
    routeAddMaybe: (maybeUpstream: string | null, downstream: string) => () =>
        maybeUpstream && dispatch(routeAdd({
            downstream,
            upstream: maybeUpstream,
        })),
    routeStart: (key: string) => () => dispatch(routeStart(key)),
});

const ItemsCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Items);

export default ItemsCont;
