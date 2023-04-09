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


export default function WlossChart() {
  const labels = [1,2,3,4,5,6,7];
  const data = {
labels,
datasets:[{
  label:'Weight loss plans',
  data : [120,105,98,105,89,87,85],
  borderColor: '#5388D8',
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
          stepSize: 10
        },
        title : {
          display : true,
          text :'Weights',
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