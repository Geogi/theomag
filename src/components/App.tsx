import * as React from "react";
import CheckButtonCont from "../containers/FloatingUi/CheckButtonCont";
import ResultDrawerCont from "../containers/FloatingUi/ResultDrawerCont";
import MapFrameCont from "../containers/MapFrame/MapFrameCont";

const App = () => (
    <React.Fragment>
        <MapFrameCont/>
        <CheckButtonCont/>
        <ResultDrawerCont/>
    </React.Fragment>
);

export default App;
