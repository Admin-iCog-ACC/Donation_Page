import React from 'react';
import {Pie} from 'react-chartjs-2';
import 'chart.js/auto';

const state = {
  labels: ['Sustainability', 'Trainer', 'Capacity Building',
],
  datasets: [
    {
      label: 'Where is the donation going?',
      backgroundColor: [
        '#7FBCD2',
        '#A5F1E9',
        '#B7C4CF'
      ],
      hoverBackgroundColor: [
        '#7FBCD2',
        '#A5F1E9',
        '#B7C4CF'
      ],
      data: [60, 20, 20]
    }
  ]
}
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

      </div>
    );
  }}
