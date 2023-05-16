import React from "react";
// import React from "react";


// function PieChart({ chartData }) {
//   return <Pie data={chartData} />;
// }

import { useEffect, useState } from "react";
// import "./Chart.css";
import * as XLSX from "xlsx";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import BarChart from  "../components/Barchart";
import LineChart from "../components/Linechart";
import PieChart from "../components/Pichart";
import  {UserData } from "../components/Data/Data";

 const Chart =()=> {
  
  const [data, setData] = useState([]);
console.log("data",data)
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
 
 
console.log("label",data.map((data) => data.__EMPTY))
console.log("data",data.map((data) => data.__EMPTY_1))
  const [userData, setUserData] = useState({
    labels:[],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  useEffect(() => {
 
    const updatedData = {
      ...userData,
      labels: data.map((data) => data.__EMPTY),
      datasets: [
        {
          ...userData.datasets,
          data: data.map((data) => data.__EMPTY_1),
        },
      ],
    };
    setUserData(updatedData);
  }, [data]);
  return (
  <> 
  
    <div className="App">
    <h1>LineChart</h1>
    <p style={{marginBottom:"40px",}}>Excel Data Visualization using Chart</p>
    <input 
    style={{marginBottom:"30px",marginTop:"20px"}}
        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleFileUpload} 
      />
{/* <div className="Table_check">
      {data.length > 0 && (
        <table className="table ">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div> */}
      <div style={{ width: 700 ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px" }}>
        <Line data={userData} />
      </div>
      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
    </>
  )
}

export default Chart;