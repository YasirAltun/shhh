import React from 'react'
import './App.css'
import Navi from './navbar/Navi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Python from './Dersler/python'
import CPP from './Dersler/cpp'
import Java from './Dersler/java'
import CSharp from './Dersler/csharp'


import Categories2 from './Categories/Categories2'

export default function App() {
  return (
    <section className='hero'> 
    {/* navbar */}
      <div>
        <Navi/>
      </div>

    {/* kategori listesi */}
      <Router> 
        <div >
            <Categories2/>
            <Routes>
                <Route path="./Dersler/python" element={<Python />} />
                <Route path="./Dersler/csharp" component={CSharp} />
                <Route path="./Dersler/java" component={Java} />
                <Route path="./Dersler/cpp" component={CPP} />
            </Routes>
          </div> 
       </Router>
      



    {/* Card list */}
      <div>

      </div>

    {/* embed video  */}
    <div>

    </div>


    </section>
   
  )
}
