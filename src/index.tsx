import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import App from './components/App';
import './index.css';
import reducers from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducers,
    devToolsEnhancer({})
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
