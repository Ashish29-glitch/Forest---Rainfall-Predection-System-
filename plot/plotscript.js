var chartOptions = {
  chart: {
    height: 400,
    type: 'line',
    fontFamily: 'Helvetica, Arial, sans-serif',
    foreColor: '#6E729B',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  series: [
  {
    name: 'Rainfall',
    data: [3.22, 2.3, 2.18, 2.7, 2.8, 2.38, 2.25, 1.95, 2.1, 2.36, 2.42],
  },
  {
    name: 'Wind Speed',
    data: [13.2, 16.82, 17.25, 16.44, 16.59, 16.71, 17.05, 16.65, 16.76, 16.86, 15.45],
  },
  {
    name: 'Max Temperature',
    data: [35.09, 32.86, 27.45, 25.69, 26.76, 33.6, 28.46, 30.08, 33.88, 30.43, 26.23],
  },
  {
    name: 'Humidity',
    data: [57.67, 57.05, 58.4, 62.26, 61.91, 59.9, 58.55, 58.54, 58.61, 60.43, 61.02],
  },
  {
    name: 'Pressure',
    data: [1015.41, 1014.65, 1015.65, 1017.02, 1016.17, 1016.72, 1015.92, 1016.7, 1017.91, 1015.62, 1017.22],
  },
]

  ,
  title: {
    text: 'Media',
    align: 'left',
    offsetY: 25,
    offsetX: 5,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#373d3f',
    },
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9,
    },
  },
  grid: {
    show: true,
    padding: {
      bottom: 0,
    },
  },
  labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -10,
    labels: {
      colors: '#373d3f',
    },
  },
  grid: {
    borderColor: '#D9DBF3',
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var lineChart = new ApexCharts(document.querySelector('#line-chart'), chartOptions);
lineChart.render();
