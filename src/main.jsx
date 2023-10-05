import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as themes from './utils/themes/schema.json';
import { setItemLocal } from './utils/database/local/';

const Index = () => {
  setItemLocal('all-themes', themes.data)
  return (
    <App/>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
