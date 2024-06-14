import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import School from './page/School';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SchoolDatabase from './page/SchoolDatabase';
import { useState } from 'react';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<School />}></Route>
        <Route path='/school-database' element={<SchoolDatabase />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
