
const socialMediaData = [
  {
    id: "facebook",
    account: '@nathanf',
    followers: 1987,
    today: 12,
    followersLastTenDays: 81,
    icon: 'up',
    overview: {
      id: 'Pages Views',
      cant: 87,
      percentage: 3,
      icon: 'up'
    },
    likes: {
      cant: 52,
      percentage: 2,
      icon: 'down'
    }
  },
  {
    id: 'twitter',
    account: '@nathanf',
    followers: 1044,
    today: 99,
    followersLastTenDays: 158,
    icon: 'up',
    overview: {
      id: 'Retweets',
      cant: 117,
      percentage: 303,
      icon: 'up'
    },
    likes: {
      cant: 507,
      percentage: 553,
      icon: 'up'
    }
  },
  {
    id: "instagram",
    account: '@realnathanf',
    followers: '11k',
    today: 1099,
    followersLastTenDays: 8501,
    icon: 'up',
    overview: {
      id: 'Profile Views',
      cant: '52k',
      percentage: 1375,
      icon: 'up'
    },
    likes: {
      cant: 5462,
      percentage: 2257,
      icon: 'up'
    }
  },
  {
    id: "youtube",
    account: 'Nathan F.',
    followers: '8239',
    today: 144,
    followersLastTenDays: 1881,
    icon: 'down',
    likes: {
      cant: 107,
      percentage: 19,
      icon: 'down'
    },
    overview: {
      id: 'Total Views',
      cant: 1407,
      percentage: 12,
      icon: 'down'
    }
  }
]


// Create - accounts Cards
const mediaParentEl = document.querySelector('.social-media__list');

mediaParentEl.innerHTML = socialMediaData.map(item => {
  // Border Color for Cards
  let color;

  switch (item.id) {
    case 'facebook':
      color = 'hsl(195, 100%, 50%)';
      break;
    case 'twitter':
      color = 'hsl(203, 89%, 53%)';
      break;
    case 'instagram':
      color = 'hsl(329, 70%, 58%)';
      break;
    case 'youtube':
      color = 'hsl(348, 97%, 39%)';
      break;
  }

  const card = `
    <li class="social-media__card theme" id="${item.id}" style="border-top: 5px solid ${color};">
      <div class="card-header">
        <img src="./src/assets/icon-${item.id}.svg" alt="icon-${item.id}">
        <span>${item.account}</span>
      </div>

      <div class="card-data theme">
        ${item.followers}
        <span>followers</span>            
      </div>

      <div class="card-footer ${item.overview.icon}">
        <img src="./src/assets/icon-${item.icon}.svg" alt="icon-up">
        ${item.today}
        Today
      </div>
    </li>
  `
  return card;
}).join('');


// Create - overview today Cards
const overviewParentEl = document.querySelector('.overview__list');

overviewParentEl.innerHTML = socialMediaData.map(item => {
  const card = `
    <li class="overview__card">
      <ul class="overview__card-group">
        <li class="overview__sm--card theme">
          <div class="card-header">
            <span>${item.overview.id}</span>
            <img src="./src/assets/icon-${item.id}.svg" alt="icon-${item.id}">
          </div>

          <div class="card-footer theme">
            <p>${item.overview.cant}</p>
            <div class="card-footer__percentage ${item.overview.icon}">
              <img src="./src/assets/icon-${item.overview.icon}.svg" alt="icon-up">
              <span>${item.overview.percentage}%</span>
            </div>
          </div>
        </li>

        <li class="overview__sm--card theme">
          <div class="card-header">
            <span>Likes</span>
            <img src="./src/assets/icon-${item.id}.svg" alt="icon-${item.id}">
          </div>

          <div class="card-footer theme">
            <p>${item.likes.cant}</p>
            <div class="card-footer__percentage ${item.likes.icon}">
              <img src="./src/assets/icon-${item.likes.icon}.svg" alt="icon-up">
              <span>${item.likes.percentage}%</span>
            </div>
          </div>
        </li >
      </li>
    </ul>
    `
  return card;
}).join('');


// Show/Hide modal

const parentElement = document.querySelector('.social-media__list');
const chartModal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');

// Show Modal
parentElement.addEventListener('click', (e) => {
  const btn = e.target.closest('.social-media__card');
  if (!btn) return
  chartModal.style.display = 'block'
  overlay.style.display = 'block'

  // Create Modal Chart/Container
  const result = socialMediaData.filter(item => item.id === btn.id);
  const AccountsDetails = '.chart__header--account-details';
  const AccountsData = '.chart__header--account-data';

  document.querySelector(`${AccountsDetails} > div.chart__header--titles> h4`).textContent = `${result[0].id} followers`
  document.querySelector(`${AccountsDetails} > div.chart__header--titles> div > img`).src = `./src/assets/icon-${result[0].id}.svg`
  document.querySelector(`${AccountsDetails} > div.chart__header--titles> div > span`).textContent = `${result[0].account}`
  document.querySelector(`${AccountsData}> div.chart__header--total> div > h4`).textContent = `${result[0].followers}`
  document.querySelector(`${AccountsData}> div.chart__header--last-10-days> div > h4`).textContent = `${result[0].followersLastTenDays}`
  document.querySelector(`${AccountsData}> div.chart__header--today-data> div > h4`).textContent = `${result[0].today}`
  document.querySelector(`${AccountsData}> div.chart__header--today-data> div > img`).src = `./src/assets/icon-${result[0].icon}.svg`
  document.querySelector(`${AccountsData}> div.chart__header--today-data> div > h4`).classList.add(`${result[0].icon}`)
});

// Close modal
chartModal.addEventListener('click', (e) => {
  const btn = e.target.closest('.close-cart-button');
  if (!btn) return
  overlay.style.display = 'none'
  chartModal.style.display = 'none'
  document.querySelector("body > div.container > div > div.chart__header.theme > div.chart__header--account-data.theme > div.chart__header--today-data.theme > div > h4").classList.remove(`down`)
});

// Dark/Light theme

const themeElements = document.querySelectorAll('.theme');
const toggle = document.querySelector('.color-mode__switch');
const circle = document.querySelector('.color-mode__switch--circle');
let darkMode = true;

toggle.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()
  toggle.classList.toggle('active')
  darkMode = !darkMode;

  if (!darkMode) {
    localStorage.setItem('dark-mode', 'false');
    document.querySelector("body > div.container > header > div.color-mode > span").textContent = 'Light Mode'
    themeElements.forEach((item) => {
      item.classList.add('theme--light');
    });
    toggle.classList.add('active')
  } else {
    localStorage.setItem('dark-mode', 'true');
    document.querySelector("body > div.container > header > div.color-mode > span").textContent = 'Dark Mode'
    themeElements.forEach((item) => {
      item.classList.remove('theme--light');
    });
    toggle.classList.remove('active')
  }
});

if (localStorage.getItem('dark-mode') === 'false') {
  document.querySelector("body > div.container > header > div.color-mode > span").textContent = 'Light Mode'
  themeElements.forEach((item) => {
    item.classList.add('theme--light');
  });
  toggle.classList.add('active')
} else {
  document.querySelector("body > div.container > header > div.color-mode > span").textContent = 'Dark Mode'
  themeElements.forEach((item) => {
    item.classList.remove('theme--light');
  });
  toggle.classList.remove('active')
}

