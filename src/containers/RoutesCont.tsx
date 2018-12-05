import {connect} from "react-redux";
import Routes, {IRoutesForDispatch, IRoutesFromState} from "../components/MapFrame/Routes";
import {IRootState} from "../reducers";

const mapStateToProps = (state: IRootState): IRoutesFromState => ({
    routes: state.pto.routes.map((r) => ({
        downstream: state.pto.items.find(({key}) => key === r.downstream)!.pos,
        key: r.key,
        upstream: state.pto.items.find(({key}) => key === r.upstream)!.pos
    }))
});

// noinspection JSUnusedLocalSymbols: TODO
const mapDispatchToProps = (dispatch: any): IRoutesForDispatch => ({});

const RoutesCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);

export default RoutesCont;
