import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import posstore from './stores/posstore';

const pos = new posstore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
  <Provider pos={pos}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
