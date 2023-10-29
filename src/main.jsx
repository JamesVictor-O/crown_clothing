import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux"
import './index.css'

import store from './redux/store'
import { store2 } from './reduxTesting/store2';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
     <App/>
  </React.StrictMode> 
  </Provider>
)
