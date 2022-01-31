// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function Chart() {
//   return <Line options={options} data={data} />;
// }


//import logo from './logo.svg';
//import './App.css';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Mar', 'May', 'July', 'Oct'],
  datasets: [
    {
      label: 'Iphone sales',
      data: [400, 1000, 4000, 800, 1500],
      fill: true,
      backgroundColor:"#2e4355",
      pointBorderColor:"#8884d8",
      pointBorderWidth:5,
      pointRadius:8,
      tension: 0.4
    },
  ],
};

const options = {
  plugins:{legend:{display:false}},
  layout:{padding:{bottom:100}},
  scales: {
    y:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      },
      grid:{
        color:"#243240"
      }
    },
    x:{
      ticks:{
        color:"white",
        font:{
          size:18
        }
      }
    }
  },
};

export default function Chartn() {
  return (
    <div className="App">
      <h2>Quarterly sales for mobile phones</h2>
      <Line data={data} options={options}/>
    </div>
  );
}

