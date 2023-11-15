 
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
import Navbar from './Components/Navbar';
import textform from './Components/textform';
//import  React, { useState } from 'react';
//import  React, { useState ,useEffect} from 'react';
import  Datatable  from 'react-data-table-component';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {  Link } from 'react-router-dom';
//import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockInfo from './StockInfo';
import TradingViewWidget from './TradingViewWidget';





function App() {

//hii i am in vscode 

//Test 33
//test99



//hii 2

// const [data, setData] = useState([]);

// useEffect(() => {
//   // Replace 'YOUR_API_URL' with the actual API URL you want to fetch data from.
//   const apiUrl = 'https://yahoo-finance127.p.rapidapi.com/search/aa';

//   // Replace 'YOUR_X_RapidAPI_Key' and 'YOUR_X_RapidAPI_Host' with your actual API key and host.
//   const apiKey = '12b31b3602msh4787f5692a654a2p1dbdcfjsn4e12e5fed3b6';
//   const apiHost = 'yahoo-finance127.p.rapidapi.com';

//   fetch(apiUrl, {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': apiKey,
//       'X-RapidAPI-Host': apiHost,
//       // You can add other headers here if required.
//     },
//   })
//     .then(response => response.json())
//     .then(responseData => {
//       if (responseData && responseData.quotes) {
//         setData(responseData.quotes); // Set the data in the state
//       }
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }, []);
 

//




const mdata = {
  "CurrRate": {
      "LTP": "2345.00",
      "Chg": "+36.45",
      "PcChg": "+1.58",
      "D_Cpricelink": "",
      "IssueChgVal": "",
      "IssueChgPC": ""
  },
  "Cmpname": {
      "FullN": "RELIANCE INDUSTRIES LTD.",
      "ShortN": "reliance",
      "SeriesN": "RELIANCE INDUSTRIES LTD.",
      "SEOUrlEQ": "/stock-share-price/reliance-industries-ltd/reliance/500325/",
      "SEOUrlDR": "/stock-share-price/future-options/derivatives/500325/",
      "IsNotPropernFIT": "0",
      "Category": "Listed",
      "EquityScrips": "500325"
  },
  "Header": {
      "Noticecnt": "15",
      "PrevClose": "2308.55",
      "Open": "2314.90",
      "High": "2349.50",
      "Low": "2314.00",
      "LTP": "2345.00",
      "DisplayText": "",
      "Category": "Listed",
      "PRE_OPEN_NO_BIDS": null,
      "PRE_OPEN_NO_I_PRICE": null,
      "PRE_OPEN_I_PRICE": null,
      "PRE_OPEN_I_PRICE_QTY": null,
      "PCAS_NO_BIDS": null,
      "PCAS_INDICATIVE_PRICE": null,
      "PCAS_INDICATIVE_QTY": null,
      "PERODIC_CALL_AUCTION": null,
      "GSMURL": "",
      "GSMText": "",
      "Invit": "0",
      "Ason": "11 Oct 23 | 16:00",
      "NAVRate": "",
      "NAVdttm": "",
      "ASMText": "",
      "SMSText": "",
      "IRPText": "",
      "ASMURL": "",
      "SMSURL": "https://www.bseindia.com/attention_investors.aspx",
      "IRPURL": "",
      "IDB_DisplayText": "",
      "IsALF": "0",
      "EMSText": "",
      "EMSURL": ""
  },
  "CompResp": {
      "compRes": null,
      "texturl": null
  }
}

const columns =
[
  {

    name:'Id',
    selector:row =>  row.id,
    sortable:true
     
   },

     {

      name:'Name',
      selector:row =>  row.name,
      sortable:true
     },
     {
      name:'Email',
      selector:row =>  row.email,
      sortable:true
     },
     {
      name:'Age',
      selector:row =>  row.age,
      sortable:true
      
     }

];
const data =
[    

  {
    id:1,
    name:'Vishal',
    email:'Vishal98@gmail.com',
    age:25
  },
  {
    id:2,
    name:'Satish',
    email:'Satish2000@gmail.com',
    age:23
  },
  {
    id:3,
    name:'Sachin',
    email:'Sachin98@gmail.com',
    age:26
  },
  {
    id:4,
    name:'Sham',
    email:'Sham98@gmail.com',
    age:27
  },
  {
    id:5,
    name:'Ram',
    email:'Ram98@gmail.com',
    age:28
  }
  , {
    id:6,
    name:'Vishal',
    email:'Vishal98@gmail.com',
    age:25
  },
  {
    id:7,
    name:'Satish',
    email:'Satish2000@gmail.com',
    age:23
  },
  {
    id:8,
    name:'Sachin',
    email:'Sachin98@gmail.com',
    age:26
  },
  {
    id:9,
    name:'Sham',
    email:'Sham98@gmail.com',
    age:27
  },
  {
    id:10,
    name:'Ram',
    email:'Ram98@gmail.com',
    age:28
  }, 
  {
    id:11,
    name:'Vishal',
    email:'Vishal98@gmail.com',
    age:25
  },
  {
    id:12,
    name:'Satish',
    email:'Satish2000@gmail.com',
    age:23
  },
  {
    id:13,
    name:'Sachin',
    email:'Sachin98@gmail.com',
    age:26
  },
  {
    id:14,
    name:'Sham',
    email:'Sham98@gmail.com',
    age:27
  },
  {
    id:15,
    name:'Ram',
    email:'Ram98@gmail.com',
    age:28
  }
   
     


] 




  const [mode,setMode]=useState('light')

  const toggleMode=()=>
  {   if(mode ==='light'){
     setMode('dark')
   }
   else  
      {
     setMode('light')
   }
  // toggleMode={toggleMode}
  
 }

 

//  const sql =require("mssql/msnodesqlv8");
// var config =
// {
//         server :"DESKTOP-M00JICK\\SQLEXPRESS",
//         database:"First_Test",
//         driver:"msnodesqlv8",
// options: {

// trustedConnection : true

// }  

// }
//  sql.connect(config,function(err)
//  {
//   if(err) console.log(err);
//   var request =new sql.Request();
//   request.query("select * from StudentTb1", function(err,records)
//   {
//     if(err) console.log(err);
//     else 
//     {
//       console.log(records);
//     }
//   });
//  })


 const [records,setRecords]=useState(data)

 function handleFilter(event)
 {
      const newData=data.filter(row =>{
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setRecords(newData)
 }
  return (  
 <>
  

  
              
    <Navbar title="Vis" AboutText="About"  mode={mode}  toggleMode={toggleMode}  /> 
     {/* <country/>  */}
    

{/* //dbconnection */}


 


{/* // */}


    
      
     {/* <Datatable 
       columns={columns}    
       data={records}
       selectableRows
       fixedHeader
       pagination
       
       ></Datatable> */}

{/* <Router>
      <Routes>
       
        <Route path="about" element={<About/>} />
  
      </Routes>

      <Routes>
       
        <Route path="Users" element={<Datatable> columns={columns}    
       data={records}
       selectableRows
       fixedHeader
       pagination</Datatable> } />
  
      </Routes>
    </Router> */}

<Router>
  <Routes>
    <Route exact path="about" element={<About/>} />

    <Route exact path="users" element={
//  <div className='container mt-5 '> 
// <div className='text-end'><input type="text" onChange={handleFilter}></input></div>

//       <Datatable
//         columns={columns}
//         data={records}
//         selectableRows
//         fixedHeader
//         pagination
         
//       />
//       </div>

    <div  style={{ height: "100%", width: "100%" }}><TradingViewWidget/></div>
       
      
  
   
    } />
<Route exact path="home" element={
  <>
 <div className="centered-text"> <h1>Stock Information</h1></div>
  
      
      {/* <StockInfo 
      selectableRows
      fixedHeader
      pagination data={mdata} /> */}
      <TradingViewWidget/> 

</>
  
    
  } />

 
  
  
  </Routes>
</Router>
     
 

       
       
 </>
     
  );
}

export default App;
