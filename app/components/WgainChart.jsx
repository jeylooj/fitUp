"use client"

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function WgainChart() {
  const labels = [150,200,250,300,400,600,800,1200];
  const data = {
labels,
datasets:[{
  label:'Weight gain plans',
  data : [0,1,5,5,10,5,10],
  borderColor: '#FFBB0C',
  tension: 0.1,
  
}
]
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
align :'start',
        labels: {
          boxHeight : 5,
          usePointStyle : true,
          color :'#fff',
          fillStyle: '#FFBB0C',  
        },
      },
    },
    scales : {
      y :{
        grid :{
          color: "#fff",
          lineWidth:.2,
        },
        ticks: {
          stepSize: 5
        },
        title : {
          display : true,
          text :'Weeks',
          color:'#fff'
        }
      },
      x : {
        grid :{
          color: "#fff",
          borderWidth: 5,
          lineWidth:.1,
        },
        title : {
          display : true,
          text :'Members',
          color:'#fff'
        }
      }
    }
  }
  return  <Line  data={data} options={options} />;
}