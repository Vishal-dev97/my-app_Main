import React from 'react'

function Financeapi() {
  return (
    <div>
      <div>
  <h1>Data from API</h1>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Exchange</th>
        <th>Sector</th>
        {/* Add more table headers as needed */}
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.symbol}>
          <td>{item.longname}</td>
          <td>{item.symbol}</td>
          <td>{item.exchange}</td>
          <td>{item.sector}</td>
          {/* Add more table data cells as needed */}
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Financeapi
