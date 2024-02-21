import React from 'react'
import ReactDOM from 'react-dom/client'
import Timeline from './App.jsx'
import Tweet from './componsant/tweets.jsx'

import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timeline />
    <Tweet />
  </React.StrictMode>,
)
