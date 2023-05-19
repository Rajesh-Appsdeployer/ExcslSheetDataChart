import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import BarChart from  "../components/Barchart";
import  {UserData } from "../components/Data/Data";
import {  Form } from "react-bootstrap";

 const Chart =()=> {
 // For  Reading Xlsx file
  const [data, setData] = useState([]);
 
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      UserData.push(parsedData);
    };
  }

  // take color from to color plate
  const [backgroundColor, setBackgroundColor] = useState('');
  const handleChangeBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
  };
  // take index 
  const [bcolor, setBcolor] = useState('');
// random color generater
const [coloradd, setColoradd] = useState([]);
const dynamicColors=()=> {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

var pool = [];
function poolColors(){

for(var i = 0; i <data.length; i++) {
 console.log("hhh")
    pool.push(dynamicColors());
}
console.log("kkkkk",pool)
setColoradd(pool);
}
console.log("kkkkkff",coloradd)
useEffect(()=>{
 poolColors();
},[data.length])
  // graph funtionality
  
  const [userData, setUserData] = useState({
    labels:[],
    datasets: [
      {
        label: "Users Gained",
        data:[],
        fill: true,
       backgroundColor: ["rgba(175,58,176, 0.5)","rgba(112,4,174, 0.5)","rgba(218,114,199, 0.5)", "rgba(165,177,57, 0.5)", "rgba(176,225,36, 0.5)",
       "rgba(99,238,163, 0.5)", 
       "rgba(86,68,29, 0.5)"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
const color = ['blue','green','red']
  // add  changes colors in array
  const [colors, setColors] = useState(color);
  useEffect(() => {
    const updatedColors = [...userData.datasets[0].backgroundColor];
    updatedColors[bcolor] = backgroundColor;
    setColors(updatedColors);
    setBackgroundColor('')
  }, [backgroundColor, bcolor]);

   // graph funtionality on changes
  useEffect(() => {
    
    const updatedData = {
      ...userData,
      labels: data.map((data) => data.__EMPTY),
      datasets: [
        {
          ...userData.datasets[0],
          data: data.map((data) => data.__EMPTY_1),
            backgroundColor: colors,
        },
      ],
    };
    setUserData(updatedData);
    
  }, [data,backgroundColor]);


  //  return
  return (
  <> 
  
    <div className="App">
    <h1>BarChart</h1>
    <p style={{marginBottom:"30px"}}>Excel Data Visualization using Chart</p>
     {/* for xlsx file */}
    <input 
    style={{marginBottom:"30px" , marginTop:"20px"}}
        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleFileUpload} 
      />
      {/* for take color */}
       <Form.Control
          type="color"
          value={backgroundColor}
          onChange={handleChangeBackgroundColor}
        />
        {/*for  take index  */}
        <input 
    style={{marginBottom:"30px" }}
        type="number"  
        onChange={(e)=>{setBcolor(e.target.value)}} 
      />
 {/*  graph in bar form */}
      <div style={{ width: 700,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"20px" }}>
        <BarChart chartData={userData} />
      </div>
      
    </div>
    </>
  )
}

export default Chart;