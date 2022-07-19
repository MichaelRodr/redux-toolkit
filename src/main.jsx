import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider  } from "react-redux";
import { createAppStore  } from "./store/storeConfig/storeConfig";

let appStore = createAppStore();

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={appStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
 </Provider>
)
