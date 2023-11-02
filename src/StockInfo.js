import React from 'react';
 

const StockInfo = ({ data }) => {
  const currRate = data.CurrRate;
  const cmpName = data.Cmpname;
  const volumeThreshold = 10; // Set your threshold value

  // Determine the CSS class for the arrow based on the volume
  const volumeArrowClass = currRate.Volume < volumeThreshold ? 'red-arrow' : 'green-arrow';

  return (
    <div>
      <h2>Stock Information</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Series Name</th>
            <th>Short Name</th>
            <th>LTP <span className={volumeArrowClass}>&#9650;</span> {currRate.Volume}</th>
            <th>Change <span className={volumeArrowClass}>&#9650;</span> {currRate.Volume}</th>
            <th>Percentage Change <span className={volumeArrowClass}>&#9650;</span> {currRate.Volume}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cmpName.FullN}</td>
            <td>{cmpName.SeriesN}</td>
            <td>{cmpName.ShortN}</td>
            <td>{currRate.LTP}<span className={volumeArrowClass}>&#9650;</span> {currRate.Volume}</td>
            <td>{currRate.Chg}<span className={volumeArrowClass}>&#9650;</span> {currRate.Volume}</td>
            <td>{currRate.PcChg}<span className={volumeArrowClass}>&#9650;</span> {currRate.Volume} </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );
};

export default StockInfo;
