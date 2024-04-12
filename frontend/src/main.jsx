import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyle } from './style/GlobalStyle.jsx'
import { GlobalProvider } from './Context/globalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <GlobalStyle />
    <GlobalProvider>
    <App />
    </GlobalProvider>
 
 
  </React.StrictMode>,
)
