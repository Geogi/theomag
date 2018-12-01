import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import MainMap from './MainMap/MainMap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MainMap />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
