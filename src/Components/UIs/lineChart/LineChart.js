import React, { useEffect } from 'react';
import 'chart.js';
import { Config } from './lineChartConfig.js';

export default function LineChart(props) {
  useEffect(() => {
    let config = new Config();
    var ctx = document.getElementById('lineChart');
    var myChart = new Chart(ctx, {
      type: config.type,
      data: config.data,
      options: config.options
    });

    return () => {
      myChart.destroy();
    };
  });
  return <canvas id="lineChart" />;
}
