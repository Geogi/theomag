import {connect} from "react-redux";
import {routeDel} from "../actions";
import Routes, {IRoutesForDispatch, IRoutesFromState} from "../components/MapFrame/Routes";
import {IRootState} from "../reducers";

const mapStateToProps = (state: IRootState): IRoutesFromState => ({
    routes: state.pto.routes.map((r) => ({
        downstream: state.pto.items.find(({key}) => key === r.downstream)!.pos,
        key: r.key,
        upstream: state.pto.items.find(({key}) => key === r.upstream)!.pos
    }))
});

const mapDispatchToProps = (dispatch: any): IRoutesForDispatch => ({
    routeDel: (key: string) => () => dispatch(routeDel(key))
});

const RoutesCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);

export default RoutesCont;
