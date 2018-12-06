import {connect} from "react-redux";
import {checkRun} from "../../actions/thunks";
import CheckButton, {ICheckButtonForDispatch, ICheckButtonFromState} from "../../components/FloatingUi/CheckButton";
import {IRootState} from "../../reducers";
import {ICheckRequest} from "../../remote";

const mapStateToProps = (state: IRootState): ICheckButtonFromState => ({
    dataToSend: {
        equipments: state.pto.items.map((p) => ({
            capacity: p.capacity,
            key: p.key
        })),
        routes: state.pto.routes.map((r) => ({
            downstreamKey: state.pto.items.find((p) => p.key === r.downstream)!.key,
            upstreamKey: state.pto.items.find((p) => p.key === r.upstream)!.key,
        }))
    },
    inProgress: state.check.inProgress,
});

const mapDispatchToProps = (dispatch: any): ICheckButtonForDispatch => ({
    click: (data: ICheckRequest) => () => dispatch(checkRun(data))
});

const CheckButtonCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckButton);

export default CheckButtonCont;
