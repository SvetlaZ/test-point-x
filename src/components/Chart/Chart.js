import React from 'react';
import {Line} from 'react-chartjs-2'
import ChartWrapper from './ChartWrapper'

const Chart = (props) => {
  const data = {
    labels: ['JUL 2', 'JUL 4', 'JUL 6', 'JUL 8', 'JUL 10',
            'JUL 12', 'JUL 14', 'JUL 16', 'JUL 18', 'JUL 20',
            'JUL 22', 'JUL 24', 'JUL 26', 'JUL 28', 'JUL 30',],
    datasets: [
      {
        label: 'participants',
        data: [25, 15, 17, 20, 15, 12, 20, 23, 17, 20, 30, 25, 38, 40, 30],
        borderColor: ['rgba(56, 108, 233, 1)'],
        backgroundColor: ['rgba(56, 108, 233, 0.1)'],
        pointBackgroundColor: 'rgba(56, 108, 233, 0)',
        pointBorderColor: 'rgba(56, 108, 233, 0)'
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Line'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 10,
            max: 40,
            stepSize: 10
          }
        }
      ]
    }
  }

  return (
    <ChartWrapper>
      <div>
        <ul className="chart-menu">
          <li className="choose">Participiants</li>
          <li>Views</li>
        </ul>

        <ul>
          <li className="chart-time">Today</li>
          <li className="chart-time">Week</li>
          <li className="chart-time active">Month</li>
          <li className="chart-time">Quarter</li>
          <li className="chart-time">Year</li>
        </ul>
      </div>
      <hr />
      <Line data={data} options={options} />
    </ChartWrapper>
  );
}

export default Chart;
