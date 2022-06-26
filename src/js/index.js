const socialMediaData = [
  {
    id: "facebook",
    account: '@nathanf',
    followers: 1987,
    today: 12,
    followersLastTenDays: 81,
    overview: {
      id: 'Pages Views',
      cant: 87,
      percentage: 3
    },
    likes: {
      cant: 52,
      percentage: 2
    }
  },
  {
    id: 'twitter',
    account: '@nathanf',
    followers: 1044,
    today: 99,
    followersLastTenDays: 158,
    overview: {
      id: 'Retweets',
      cant: 117,
      percentage: 303
    },
    likes: {
      cant: 507,
      percentage: 553
    }
  },
  {
    id: "instagram",
    account: '@realnathanf',
    followers: '11k',
    today: 1099,
    followersLastTenDays: 8501,
    overview: {
      id: 'Profile Views',
      cant: '52k',
      percentage: 1375
    },
    likes: {
      cant: 5462,
      percentage: 2257
    }
  },
  {
    id: "youtube",
    account: 'Nathan F.',
    followers: '8239',
    today: 144,
    followersLastTenDays: 1881,
    likes: {
      cant: 107,
      percentage: 19
    },
    overview: {
      id: 'Total Views',
      cant: 1407,
      percentage: 12
    }
  }
]


// Create - accounts Cards

const mediaParentEl = document.querySelector('.social-media__list');

mediaParentEl.innerHTML = socialMediaData.map(item => {

  const card = `
    <li class="social-media__card theme">
      <div class="card-header">
        <img src="./src/assets/icon-${item.id}.svg" alt="icon-${item.id}">
        <span>${item.account}</span>
      </div>

      <div class="card-data theme">
        ${item.followers}
        <span>followers</span>            
      </div>

      <div class="card-footer">
        <img src="./src/assets/icon-up.svg" alt="icon-up">
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
            <div class="card-footer__percentage">
              <img src="./src/assets/icon-up.svg" alt="icon-up">
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
            <div class="card-footer__percentage">
              <img src="./src/assets/icon-up.svg" alt="icon-up">
              <span>${item.likes.percentage}%</span>
            </div>
          </div>
        </li >
      </li>
    </ul>
    `
  return card;
}).join('');

// Dark/Light theme

const themeElements = document.querySelectorAll('.theme');
const toggle = document.querySelector('.color-mode__switch');
const circle = document.querySelector('.color-mode__switch--circle')
let dark = true;


toggle.addEventListener('click', () => {
  themeElements.forEach((item) => {
    item.classList.toggle('theme--light');
  });
  //themeElement.classList.toggle('theme--light');
  dark = !dark;
  if (!dark) {
    circle.style.transform = 'translateX(20px)'
    circle.style.backgroundColor = '#fff'
  } else {
    circle.style.transform = 'translateX(0px)'
    circle.style.backgroundColor = '#252a41'
  }
})