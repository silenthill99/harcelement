import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink} from "react-router-dom";
import { Home } from './Pages/Home';
import { Clips } from './Pages/Clips';
import { CourtsMetrages } from './Pages/Courts Métrages';
import { Bonus } from './Pages/Bonus';
import { NousContacter } from './Pages/Nous Contacter';
import { QuelquesFilms } from './Pages/Quelques films';

function App() {
  return (
    <div className='mb-20'>
      <nav className='flex justify-center p-2 gap-2'>
        <NavLink to="" className={(nav) => (nav.isActive ? "underline bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full" : "bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full")}>Accueil</NavLink>
        <NavLink to="clips" className={(nav) => (nav.isActive ? "underline bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full" : "bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full")}>Clips</NavLink>
        <NavLink to="courts_metrages" className={(nav) => (nav.isActive ? "underline bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full" : "bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full")}>Courts métrages</NavLink>
        <NavLink to="bonus" className={(nav) => (nav.isActive ? "underline bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full" : "bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full")}>Bonus</NavLink>
        <NavLink to='quelques_films' className={(nav) => (nav.isActive ? "underline bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full" : "bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full")}>Quelques films</NavLink>
        <NavLink to="nous_contacter" className={(nav) => (nav.isActive ? "underline bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full" : "bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full")}>Nous contacter</NavLink>
      </nav>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='clips' element={<Clips/>}/>
        <Route path='courts_metrages' element={<CourtsMetrages/>}/>
        <Route path='bonus' element={<Bonus/>}/>
        <Route path='quelques_films' element={<QuelquesFilms/>}/>
        <Route path='nous_contacter' element={<NousContacter/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
