import React from 'react';
import {Bar} from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Voters',
            data: [12,19,3,5,2,3],
            backgroundColor: 'rgba(75,192,192,0.6)'
            // borderColor: 'rgba(75,192,192,1)',
            // borderWidth: 1,
        },
    ],
};
const data1 = {
    labels: ['Ray', 'James', 'Peter', 'Jack', 'Mark', 'Ray'],
    datasets: [
        {
            label: '# of Voters',
            data: [17,4,39,40,3,2],
            backgroundColor: 'rgba(255,0,0,.5)'
        }
    ]
}
const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};
const MyChart = () => (
    <div>
        <Bar data={data} options={options} />
        <Bar data={data1} options={options} />
    </div>
);

export default MyChart;