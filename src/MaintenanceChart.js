import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for A1-A7, Q3-Q7, ages 3, 5, 10 years
const maintenanceData = [
  { model: 'A1', age3: 1, age5: 2, age10: 4 },
  { model: 'A2', age3: 1, age5: 2, age10: 5 },
  { model: 'A3', age3: 2, age5: 3, age10: 6 },
  { model: 'A4', age3: 2, age5: 3, age10: 7 },
  { model: 'A5', age3: 2, age5: 4, age10: 8 },
  { model: 'A6', age3: 3, age5: 5, age10: 9 },
  { model: 'A7', age3: 3, age5: 5, age10: 10 },
  { model: 'Q3', age3: 2, age5: 3, age10: 6 },
  { model: 'Q4', age3: 2, age5: 4, age10: 7 },
  { model: 'Q5', age3: 3, age5: 5, age10: 8 },
  { model: 'Q6', age3: 3, age5: 5, age10: 9 },
  { model: 'Q7', age3: 4, age5: 6, age10: 11 },
  { model: 'Q8', age3: 1, age5: 1, age10: 1 },
];

function MaintenanceChart() {
  return (
    <div style={{ width: '100%', height: 400, marginTop: 40 }}>
      <h2>Maintenance Issues by Model and Car Age</h2>
      <ResponsiveContainer>
        <LineChart data={maintenanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="model" />
          <YAxis label={{ value: 'Issues per year', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="age3" name="3 Years Old" stroke="#1976d2" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="age5" name="5 Years Old" stroke="#f06292" strokeWidth={3} />
          <Line type="monotone" dataKey="age10" name="10 Years Old" stroke="#66bb6a" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MaintenanceChart;
