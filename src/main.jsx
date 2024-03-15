import React from 'react'
import ReactDOM from 'react-dom/client'
import Timeline from './Timeline.jsx';
import './App.css';
import SideBar from './sideBar.jsx';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Profil_Act from './composantSider/profil_Act.jsx';
import AppGlobal from './AppGlobal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path='/' element = {<AppGlobal/>} />
      <Route path='/profil' element = {<Profil_Act/>} />
  </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
)
