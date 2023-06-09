import React from 'react';
import { Line } from 'react-chartjs-2';
import {  Card } from 'react-bootstrap';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const LineChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thru', 'Fri' , 'Sat'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 67],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Dataset 2',
        data: [80, 70, 65, 85, 75, 90, 83],
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
      },
      {
        label: 'Dataset 3',
        data: [40, 50, 45, 55, 60, 58, 78],
        fill: false,
        borderColor: 'rgba(54,162,235,1)',
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Card>
    <Card.Body>
      <Card.Title className="mr-auto">Viewership Installs & Signups Graph</Card.Title>
      <div style={{ width: '100%', height: '200px' }}>
        <div>
        <Line data={data} options={options} />
        
        </div>
      </div>
    </Card.Body>
  </Card>
  
  );
};

export default LineChart;
