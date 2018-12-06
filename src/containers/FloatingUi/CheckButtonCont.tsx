import {connect} from "react-redux";
import {checkRun} from "../../actions/thunks";
import CheckButton, {ICheckButtonForDispatch, ICheckButtonFromState} from "../../components/FloatingUi/CheckButton";
import {IRootState} from "../../reducers";

const mapStateToProps = (state: IRootState): ICheckButtonFromState => ({
    dataToSend: state.pto,
    inProgress: state.check.inProgress,
});

const mapDispatchToProps = (dispatch: any): ICheckButtonForDispatch => ({
    click: (data: any) => () => dispatch(checkRun(data))
});

const CheckButtonCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckButton);

export default CheckButtonCont;
