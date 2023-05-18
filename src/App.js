import React from 'react';
import Header from './components/Header';
 import Sidebar from './components/Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {  HashRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
 import Barchart from './pages/Chart'
import LineChart from './components/Linechart';
import PieChart from './components/Pichart';
import Bubble from './components/Bubble';
import Donut from './components/Donut';
import AreaChart from './components/AreaChart';
import RadarChart from './components/RadarChart';
import ScatterChart from './components/ScatterChart';

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
        <Route path="/AreaChart" element={<AreaChart/>}/>
        <Route path="/Donut" element={<Donut/>}/>
        <Route path="/Radar" element={<RadarChart/>}/>
        
         </Routes>
         </div>
      </HashRouter>
     
  );
}

export default App;
