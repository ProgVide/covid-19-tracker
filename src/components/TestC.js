import React ,{useState,useEffect} from 'react';
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
//import * as faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
let a = 0;

const  TestC = ()=> {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
      const fetchMyAPI =  async () => {
        const apiResponse = await fetch('https://api.covidtracking.com/v1/us/daily.json');
        const dataFromApi = await apiResponse.json();
       // dataFromApi.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
        console.log(apiResponse);
      // console.log('Data From Api :' ,dataFromApi.map((c) => c.date));
      // console.log("Date:", dataFromApi.map(({ date }) => new Date(date).toLocaleDateString()));
      const reversed = dataFromApi.reverse();
        setDailyData(reversed);
    };
    fetchMyAPI();
          //const apiResponse = await fetch('https://api.covidtracking.com/v1/us/daily.json');
  },[])
  console.log('Data From Api 2:' , a++,dailyData);
  //console.log("States:",dailyData[0] ? ( dailyData?.map((s) => s.states))  : null );
  //console.log("Date:", dailyData?.regionData?.map((c) => c.country));
  try {
    var  data = {
   
       labels: dailyData.map(({ dateChecked }) => new Date(dateChecked).toLocaleDateString()) ,
      datasets: [{
        data: dailyData.map((data) => data.positive),
        label: 'Infected',
        borderColor: '#3333ff',
        fill: true,
      }, {
        data: dailyData.map((data) => data.death),
        label: 'Deaths',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
      },  {
        data: dailyData.map((data) => data.recovered),
        label: 'Recovered',
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        fill: true,
      },
      ],
  
  
      //labels,
      // datasets: [
      //   {
      //     label: 'Dataset 1',
      //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //     borderColor: 'rgb(255, 99, 132)',
      //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //   },
      //   {
      //     label: 'Dataset 2',
      //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //     borderColor: 'rgb(53, 162, 235)',
      //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //   },
      // ],
    };
  
   
  }
   catch (error) {
    
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  return dailyData[0] ? ( <Line options={options} data={data} /> ): null;
}

export default TestC