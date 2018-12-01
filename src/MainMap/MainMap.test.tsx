import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainMap from './MainMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
