import * as React from "react";
import * as ReactDOM from "react-dom";
import MainMap from "./MainMap";

it('should draw a map', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainMap lat={1} lng={2} zoom={2}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
