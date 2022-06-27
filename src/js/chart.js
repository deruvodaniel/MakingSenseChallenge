//Chart Config

const labels = [
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13
];

const data = {
  labels: labels,
  datasets: [{
    radius: 6,
    hoverRadius: 7,
    boxHeight: 40,
    boxWidth: 225,
    label: 'New Followes',
    backgroundColor: 'hsl(243, 51%, 70%)',
    borderColor: 'hsl(243, 51%, 70%)',
    pointBackgroundColor: 'hsl(230, 17%, 14%)',
    pointBorderColor: 'hsl(243, 51%, 70%)',
    data: [3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
    tension: 0.4
  }]
};

var options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    },
    x: {
      grid: {
        display: true
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

// Show/Hide modal


const parentElement = document.querySelector('.social-media__list');
const chartModal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');

parentElement.addEventListener('click', function (e) {
  const btn = e.target.closest('.social-media__card');
  if (!btn) return
  chartModal.style.display = 'block'
  overlay.style.display = 'block'
})

chartModal.addEventListener('click', function (e) {
  const btn = e.target.closest('.close-cart-button');
  if (!btn) return
  overlay.style.display = 'none'
  chartModal.style.display = 'none'
})





