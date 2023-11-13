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
import { PageLinks } from './Utils/PageLinks';
import { link } from 'fs';

function App() {

  const link = PageLinks;

  return (
    <div className='mb-20'>
      <nav className='flex justify-center p-2 gap-2'>
        {
          link.map((links) => (
            <NavLink to={links.links} className={(nav) => (nav.isActive ? "underline bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full" : "bg-[red] text-white p-1 hover:px-5 duration-300 hover:bg-[orange] hover:rounded-full")} key={links.name}>{links.name}</NavLink>
          ))
        }
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
