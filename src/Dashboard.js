
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import MaintenanceChart from './MaintenanceChart';
import { motion } from 'framer-motion';

const sampleData = [
  { model: 'A4', year: 2020, fuelEfficiency: 32, maintenanceIssues: 1, resaleValue: 25000 },
  { model: 'A4', year: 2021, fuelEfficiency: 33, maintenanceIssues: 2, resaleValue: 26000 },
  { model: 'A4', year: 2022, fuelEfficiency: 34, maintenanceIssues: 1, resaleValue: 27000 },
  { model: 'A6', year: 2020, fuelEfficiency: 28, maintenanceIssues: 3, resaleValue: 30000 },
  { model: 'A6', year: 2021, fuelEfficiency: 29, maintenanceIssues: 2, resaleValue: 31000 },
  { model: 'A6', year: 2022, fuelEfficiency: 30, maintenanceIssues: 2, resaleValue: 32000 },
  { model: 'Q5', year: 2020, fuelEfficiency: 25, maintenanceIssues: 4, resaleValue: 35000 },
  { model: 'Q5', year: 2021, fuelEfficiency: 26, maintenanceIssues: 3, resaleValue: 36000 },
  { model: 'Q5', year: 2022, fuelEfficiency: 27, maintenanceIssues: 2, resaleValue: 37000 },
  { model: 'Q7', year: 2020, fuelEfficiency: 22, maintenanceIssues: 5, resaleValue: 40000 },
  { model: 'Q7', year: 2021, fuelEfficiency: 23, maintenanceIssues: 4, resaleValue: 41000 },
  { model: 'Q7', year: 2022, fuelEfficiency: 24, maintenanceIssues: 3, resaleValue: 42000 },
  { model: 'TT', year: 2020, fuelEfficiency: 30, maintenanceIssues: 2, resaleValue: 33000 },
  { model: 'TT', year: 2021, fuelEfficiency: 31, maintenanceIssues: 2, resaleValue: 34000 },
  { model: 'TT', year: 2022, fuelEfficiency: 32, maintenanceIssues: 1, resaleValue: 35000 },
];

function getAverage(arr, key) {
  return (arr.reduce((sum, item) => sum + item[key], 0) / arr.length).toFixed(2);
}

function Dashboard() {
  const [data] = useState(sampleData);

  // Insights
  const bestFuelModel = data.reduce((best, car) => car.fuelEfficiency > best.fuelEfficiency ? car : best, data[0]);
  const mostReliable = data.reduce((best, car) => car.maintenanceIssues < best.maintenanceIssues ? car : best, data[0]);
  const highestResale = data.reduce((best, car) => car.resaleValue > best.resaleValue ? car : best, data[0]);

  // Statistics
  const avgFuel = getAverage(data, 'fuelEfficiency');
  const avgIssues = getAverage(data, 'maintenanceIssues');
  const avgResale = getAverage(data, 'resaleValue');

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ flex: 1 }}>
          <Card sx={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #90caf9 100%)', boxShadow: 3 }}>
            <CardContent>
              <Typography className="stat-title" variant="subtitle2" color="text.secondary">Avg Fuel Efficiency</Typography>
              <Typography className="stat-value" variant="h5">{avgFuel} mpg</Typography>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1 }}>
          <Card sx={{ background: 'linear-gradient(135deg, #fce4ec 0%, #f06292 100%)', boxShadow: 3 }}>
            <CardContent>
              <Typography className="stat-title" variant="subtitle2" color="text.secondary">Avg Maintenance Issues</Typography>
              <Typography className="stat-value" variant="h5">{avgIssues} / year</Typography>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ flex: 1 }}>
          <Card sx={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #66bb6a 100%)', boxShadow: 3 }}>
            <CardContent>
              <Typography className="stat-title" variant="subtitle2" color="text.secondary">Avg Resale Value</Typography>
              <Typography className="stat-value" variant="h5">${avgResale}</Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Typography variant="h4" sx={{ mt: 2, mb: 2, fontWeight: 700 }}>Interesting Insights</Typography>
        <ul>
          <li>Best fuel efficiency: {bestFuelModel.model} ({bestFuelModel.fuelEfficiency} mpg)</li>
          <li>Most reliable: {mostReliable.model} ({mostReliable.maintenanceIssues} issues/year)</li>
          <li>Highest resale value: {highestResale.model} (${highestResale.resaleValue})</li>
        </ul>
      </motion.div>
      <MaintenanceChart />
      <Box sx={{ mt: 4, mb: 4, p: 3, background: '#f5f5f5', borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Analysis of Maintenance Issues</Typography>
        <Typography variant="body1">
          The chart above shows how maintenance issues increase as Audi cars age. Across all models (A1–A7, Q3–Q7), maintenance issues are lowest for cars that are 3 years old, and increase steadily at 5 and 10 years. Larger models (Q7, A7) tend to have more issues as they age, likely due to more complex systems and higher usage. Compact models (A1, A2) show slower growth in maintenance problems, indicating better reliability over time. This analysis suggests that regular maintenance becomes increasingly important as Audi vehicles age, especially for higher-end models.
        </Typography>
      </Box>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <Typography variant="h4" sx={{ mt: 4, mb: 2, fontWeight: 700 }}>All Data</Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Model</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Fuel Efficiency</TableCell>
                <TableCell>Maintenance Issues</TableCell>
                <TableCell>Resale Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((car, idx) => (
                <TableRow key={idx} hover component={motion.tr} whileHover={{ scale: 1.03, backgroundColor: '#e3f2fd' }}>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>{car.fuelEfficiency}</TableCell>
                  <TableCell>{car.maintenanceIssues}</TableCell>
                  <TableCell>{car.resaleValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </Box>
  );
}

export default Dashboard;
