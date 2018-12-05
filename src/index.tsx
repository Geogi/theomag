import * as localforage from "localforage";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import {persistReducer, persistStore} from "redux-persist";
import createCompressor from "redux-persist-transform-compress";
import {PersistGate} from "redux-persist/integration/react";
import App from './components/App';
import './index.css';
import rootReducer from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const persistConfig = {
    key: 'root',
    storage: localforage,
    transforms: [createCompressor()]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    devToolsEnhancer({})
);

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
