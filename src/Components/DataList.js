// // src/components/DataList.js
// //import React, { useEffect, useState } from 'react';
// import React, { useState, useEffect } from 'react';

// function DataList() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     console.log('Fetching data...');
// //     fetch('/api/fetchData')
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log('Data received:', data); // Log the data to see what's returned
// //         setData(data);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching data:', error);
// //       });
// //   }, []);

//   return (
//     <div>
//       <h2>Data from SQL Server</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item.StudentID}>{item.StudentID}</li>, 
//           <li key={item.Name}>{item.Name}</li> ,
//           <li key={item.FatherName}>{item.FatherName}</li>,
//           <li key={item.RollNumber}>{item.RollNumber}</li> ,
//           <li key={item.Address}>{item.Address}</li> ,
//           <li key={item.Mobile}>{item.Mobile}</li>  
//  ))}
//       </ul>
//     </div>
//   );
// }

// export default DataList;