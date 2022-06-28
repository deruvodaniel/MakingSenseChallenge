//Create Modal Chart/Container
const userData = JSON.parse(localStorage.getItem('data'));
console.log(userData);

const modalChartParentEl = document.querySelector('.modal-container');

modalChartParentEl.innerHTML = userData.map(item => {

  console.log(item);
  const modalChart = `
    <div class="chart__header theme">
      <div class="chart__header-account-details">
        <div class="close-button">
          <button class="close-cart-button theme">X</button>
        </div>
        <div class="titles">
          <h4 class="theme">${item.id} followers</h4>
          <div>
            <img src="./src/assets/icon-${item.id}.svg" alt="icon-${item.id}">
            <span class="theme">${item.account}</span>
          </div>
        </div>
      </div>
      <div class="chart__header-account-data">
        <div class="total theme">
        ${item.followers}
          <span class="theme">Total Followers</span>
        </div>
        <div class="last-10-days">
          <img src="./src/assets/icon-up.svg" alt="icon-up">
          ${item.followersLastTenDays}
          <span class="theme">New followers in the past 10 days</span>
        </div>
        <div class="today-data">
          <img src="./src/assets/icon-up.svg" alt="icon-up">
          12
          <span class="theme">New followers TODAY</span>
        </div>
      </div>
    </div>
    <div class="chart-container theme">
      <span class="theme">May 4 - May 13</span>
      <canvas id="chart"></canvas>
    </div>
  `
  return modalChart;
}).join('');


//Chart Config

const labels = [
  4, 5, 6, 7, 8, 9, 10, 11, 12, 13
];

let dotColor = '';
let themeMode = localStorage.getItem('darkMode');
if (themeMode === true) {
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
    label: 'New Followes',
    backgroundColor: 'hsl(243, 51%, 70%)',
    borderColor: 'hsl(243, 51%, 70%)',
    pointBackgroundColor: `${dotColor}`,
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
  const btnId = btn.id;
  console.log(btnId);
  if (!btn) return
  chartModal.style.display = 'block'
  overlay.style.display = 'block'

  return btnId;
})

chartModal.addEventListener('click', function (e) {
  const btn = e.target.closest('.close-cart-button');
  if (!btn) return
  overlay.style.display = 'none'
  chartModal.style.display = 'none'
})





