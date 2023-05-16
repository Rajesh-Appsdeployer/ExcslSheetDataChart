import React from 'react';
import Header from './components/Header';
 import Sidebar from './components/Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {  HashRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
 import Barchart from './pages/Chart'
import LineChart from './components/Linechart';
import PieChart from './components/Pichart';

function App() {
  return (
    
      <HashRouter> 
      <Header/>
      <div style={{ display:"flex" , flexDirection:"row", gap:"40px",backgroundColor:"whitesmoke"}}>
      <Sidebar/>
        <Routes>
        <Route path="/" element={<Barchart/>}/>
        <Route path="/line" element={<LineChart/>}/>
        <Route path="/Pie" element={<PieChart/>}/>
         </Routes>
         </div>
      </HashRouter>
     
  );
}

export default App;
