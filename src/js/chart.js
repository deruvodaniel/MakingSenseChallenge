//Chart Config

const labels = [
  2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
];

let dotColor = '';
if (localStorage.getItem('dark-mode') === 'true') {
  dotColor = 'hsl(232, 19%, 15%)';
} else {
  dotColor = '#f5f5f5';
}

const data = {
  labels: labels,
  datasets: [{
    radius: 6,
    hoverRadius: 7,
    boxHeight: 40,
    boxWidth: 225,
    label: 'New Followers',
    backgroundColor: 'hsl(243, 51%, 70%)',
    pointBackgroundColor: `${dotColor}`,
    pointBorderColor: 'hsl(243, 51%, 70%)',
    data: [4, 3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
    tension: 0.3
  }]
};

var options = {
  plugins: {
    tooltip: {
      backgroundColor: `${!dotColor}`,
    },
    legend: {
      display: false,
    }
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        stepSize: 2
      },
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)",
        borderDash: [6, 3],

      }
    },
    x: {
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)",
        borderDash: [6, 3],
      }
    }
  }
};

const config = {
  type: 'line',
  data: data,
  options: options,
};

const chart = new Chart(
  document.getElementById('chart'),
  config
);






