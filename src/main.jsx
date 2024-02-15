import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'

import { store, persistor } from './redux/slices/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>   
        <App/>  
    </PersistGate>
  </Provider>
)
