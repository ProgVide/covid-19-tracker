import React ,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NumberFormat from 'react-number-format';

export default function GlobalData() {

  const [globalData, setGlobalData] = useState('The Global State is Empty');
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(async () => {
    setDataLoading(true);
    const apiResponse = await fetch('https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true');
  
    const dataFromApi = await apiResponse.json();
   // console.log(dataFromApi);
    setGlobalData(dataFromApi);
   // console.log(globalData);

    setDataLoading(false);
  },[]);

  // Old Method
  // useEffect(()=>{
  //   async function fetchGlobal(){
  //     const apiResponse = await fetch('https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true');
  //   //console.log(apiResponse);
  //   const dataFromApi = await apiResponse.json();
  //   console.log(dataFromApi);
  //   setGlobalData(dataFromApi);
  //   }
  //   fetchGlobal();
  // },[])
  
  const loading = "Loading";

  // if(dataLoading){
  //   return (
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         flexWrap: 'wrap',
  //         '& > :not(style)': {
  //           m: 1,
  //           width: '100%',
  //           height: 128,
  //         },
  //       }}
  //     >
  //       <Paper elevation={3}>
  //       <Box sx={{ width: '100%', maxWidth: 500 }}>
  //         <Typography variant="h4" gutterBottom style={{color:'black'}} component="div">
  //         {loading}
  //         </Typography>
  //         <Typography variant="subtitle2" gutterBottom style={{color:'black', fontWeight:'bold'}} component="div">
  //         Global Data as of Today
  //       </Typography>
  //       </Box>
  //       </Paper>
  //       <Paper elevation={3}>
  //       <Box sx={{ width: '100%', maxWidth: 500 }}>
  //         <Typography variant="h4" gutterBottom style={{color:'orange'}} component="div">
  //         {loading}
  //         </Typography>
  //         <Typography variant="subtitle2" gutterBottom style={{color:'orange' , fontWeight:'bold'}} component="div">
  //         Active
  //       </Typography>
  //       </Box>
  //       </Paper>
  //       <Paper elevation={3}>
  //       <Box sx={{ width: '100%', maxWidth: 500 }}>
  //         <Typography variant="h4" gutterBottom style={{color:'green'}} component="div">
  //         {loading}
  //         </Typography>
  //         <Typography variant="subtitle2" gutterBottom style={{color:'green' , fontWeight:'bold'}} component="div">
  //         Recovered
  //       </Typography>
  //       </Box>
  //       </Paper>
  //       <Paper elevation={3}>
  //       <Box sx={{ width: '100%', maxWidth: 500 }}>
  //         <Typography variant="h4" gutterBottom style={{color:'red'}} component="div">
  //         {loading}
  //         </Typography>
  //         <Typography variant="subtitle2" gutterBottom style={{color:'red' , fontWeight:'bold'}} component="div">
  //         Fatalities
  //       </Typography>
  //       </Box>
  //       </Paper>
  //     </Box>
  //   );
  // }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom style={{color:'black'}} component="div">
        {dataLoading ? loading : 
        <NumberFormat value={globalData && globalData.regionData && globalData.regionData[0].totalCases}
         displayType={'text'} thousandSeparator={true}/> }
        
        </Typography>
        <Typography variant="subtitle2" gutterBottom style={{color:'black', fontWeight:'bold'}} component="div">
        Global Data as of Today
      </Typography>
      </Box>
      </Paper>
      <Paper elevation={3}>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom style={{color:'orange'}} component="div">
        {dataLoading ? loading :  
        <NumberFormat value={globalData && globalData.regionData && globalData.regionData[0].activeCases}
         displayType={'text'} thousandSeparator={true}/> }
          
        </Typography>
        <Typography variant="subtitle2" gutterBottom style={{color:'orange' , fontWeight:'bold'}} component="div">
        Active
      </Typography>
      </Box>
      </Paper>
      <Paper elevation={3}>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom style={{color:'green'}} component="div">
        {dataLoading ? loading : 
        <NumberFormat value={globalData && globalData.regionData && globalData.regionData[0].totalRecovered}
         displayType={'text'} thousandSeparator={true}/>}
        
        </Typography>
        <Typography variant="subtitle2" gutterBottom style={{color:'green' , fontWeight:'bold'}} component="div">
        Recovered
      </Typography>
      </Box>
      </Paper>
      <Paper elevation={3}>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom style={{color:'red'}} component="div">
        {dataLoading ? loading : 
        <NumberFormat value= {globalData && globalData.regionData && globalData.regionData[0].totalDeaths}
         displayType={'text'} thousandSeparator={true}/>}
       
        </Typography>
        <Typography variant="subtitle2" gutterBottom style={{color:'red' , fontWeight:'bold'}} component="div">
        Fatalities
      </Typography>
      </Box>
      </Paper>
    </Box>
  );
}
