import React, { useState } from 'react';

const sampleData = [
  { model: 'A4', year: 2020, fuelEfficiency: 32, maintenanceIssues: 1, resaleValue: 25000 },
  { model: 'A4', year: 2021, fuelEfficiency: 33, maintenanceIssues: 2, resaleValue: 26000 },
  { model: 'A6', year: 2020, fuelEfficiency: 28, maintenanceIssues: 3, resaleValue: 30000 },
  { model: 'A6', year: 2021, fuelEfficiency: 29, maintenanceIssues: 2, resaleValue: 31000 },
  { model: 'Q5', year: 2020, fuelEfficiency: 25, maintenanceIssues: 4, resaleValue: 35000 },
  { model: 'Q5', year: 2021, fuelEfficiency: 26, maintenanceIssues: 3, resaleValue: 36000 },
];

function Dashboard() {
  const [data] = useState(sampleData);

  // Example insights
  const bestFuelModel = data.reduce((best, car) => car.fuelEfficiency > best.fuelEfficiency ? car : best, data[0]);
  const mostReliable = data.reduce((best, car) => car.maintenanceIssues < best.maintenanceIssues ? car : best, data[0]);
  const highestResale = data.reduce((best, car) => car.resaleValue > best.resaleValue ? car : best, data[0]);

  return (
    <div>
      <h2>Interesting Insights</h2>
      <ul>
        <li>Best fuel efficiency: {bestFuelModel.model} ({bestFuelModel.fuelEfficiency} mpg)</li>
        <li>Most reliable: {mostReliable.model} ({mostReliable.maintenanceIssues} issues/year)</li>
        <li>Highest resale value: {highestResale.model} (${highestResale.resaleValue})</li>
      </ul>
      <h3>All Data</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Model</th>
            <th>Year</th>
            <th>Fuel Efficiency</th>
            <th>Maintenance Issues</th>
            <th>Resale Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car, idx) => (
            <tr key={idx}>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.fuelEfficiency}</td>
              <td>{car.maintenanceIssues}</td>
              <td>{car.resaleValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
