import {connect} from "react-redux";
import {checkRun} from "../actions/thunks";
import CheckButton, {ICheckButtonForDispatch, ICheckButtonFromState} from "../components/FloatingUi/CheckButton";
import {IRootState} from "../reducers";

const mapStateToProps = (state: IRootState): ICheckButtonFromState => ({
    inProgress: state.check.inProgress
});

const mapDispatchToProps = (dispatch: any): ICheckButtonForDispatch => ({
    click: () => dispatch(checkRun())
});

const CheckButtonCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckButton);

export default CheckButtonCont;
