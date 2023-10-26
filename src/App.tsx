import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import { Home } from './Pages/Home';
import { Clips } from './Pages/Clips';
import { CourtsMetrages } from './Pages/Courts Métrages';
import { Bonus } from './Pages/Bonus';

function App() {
  return (
    <div className='mb-20'>
      <nav className='flex justify-center p-2'>
        <NavLink to="" className="bg-[red] text-white p-1 hover:px-5 duration-300 m-1 hover:bg-[orange]">Accueil</NavLink>
        <NavLink to="clips" className="bg-[red] text-white p-1 hover:px-5 duration-300 m-1 hover:bg-[orange]">Clips</NavLink>
        <NavLink to="courts_metrages" className="bg-[red] text-white p-1 hover:px-5 duration-300 m-1 hover:bg-[orange]">Courts métrages</NavLink>
        <NavLink to="bonus" className="bg-[red] text-white p-1 hover:px-5 duration-300 m-1 hover:bg-[orange]">Bonus</NavLink>
      </nav>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='clips' element={<Clips/>}/>
        <Route path='courts_metrages' element={<CourtsMetrages/>}/>
        <Route path='bonus' element={<Bonus/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
