import {connect} from "react-redux";
import {resultDrawerClose} from "../../actions";
import ResultDrawer, {IResultDrawerForDispatch, IResultDrawerFromState} from "../../components/FloatingUi/ResultDrawer";
import {IRootState} from "../../reducers";

const mapStateToProps = (state: IRootState): IResultDrawerFromState => ({
    errors: state.check.resultDrawerErrors,
    open: state.check.resultDrawerOpen,
});

const mapDispatchToProps = (dispatch: any): IResultDrawerForDispatch => ({
    close: () => dispatch(resultDrawerClose())
});

const ResultDrawerCont = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultDrawer);

export default ResultDrawerCont;
