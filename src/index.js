import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContainer from './AppContainer';
import * as serviceWorker from './serviceWorker';

//Redux
import { Provider } from 'react-redux';
import storeCreator from './redux/storeCreator';

/*MDB*/
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const store = storeCreator();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
