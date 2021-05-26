const projects = [
  {
    name: 'Tribute Page',
    url: 'https://codepen.io/vivian-ms/full/LYYzzWx',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/LYYzzWx.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1619918415&width=960'
  },
  {
    name: 'Survey Page',
    url: 'https://codepen.io/vivian-ms/full/KKKypgb',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/KKKypgb.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1619918598&width=960'
  },
  {
    name: 'Product Landing Page',
    url: 'https://codepen.io/vivian-ms/full/jOOaPVQ',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/jOOaPVQ.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1619919507&width=960'
  },
  {
    name: 'Technical Documentation Page',
    url: 'https://codepen.io/vivian-ms/full/jOOaPyX',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/jOOaPyX.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1619919640&width=960'
  },
  {
    name: 'Random Quote Machine',
    url: 'https://codepen.io/vivian-ms/full/BaoRqgQ',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/BaoRqgQ.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1589161703&width=960'
  },
  {
    name: 'Markdown Previewer',
    url: 'https://codepen.io/vivian-ms/full/KKVdmRB',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/KKVdmRB.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1591656378&width=960'
  },
  {
    name: 'JavaScript Calculator',
    url: 'https://codepen.io/vivian-ms/full/YzqqZQm',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/YzqqZQm.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1604389619&width=960'
  },
  {
    name: 'Drum Machine',
    url: 'https://cdpn.io/vivian-ms/full/rNMNvvE',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/rNMNvvE.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1612338592&width=960'
  },
  {
    name: 'Pomodoro Timer',
    url: 'https://cdpn.io/vivian-ms/full/VwmvYXb',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/VwmvYXb.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1612338703&width=960'
  },
  {
    name: 'Visualize Data with Bar Chart',
    url: 'https://codepen.io/vivian-ms/full/XWNwmYQ',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/XWNwmYQ.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1616565263&width=960'
  },
  {
    name: 'Visualize Data with Scatterplot',
    url: 'https://codepen.io/vivian-ms/full/zYNGZxw',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/zYNGZxw.default.png?fit=cover&format=auto&ha=true&height=540&quality=75&v=2&version=1616564480&width=960'
  },
  {
    name: 'Visualize Data with Heat Map',
    url: 'https://codepen.io/vivian-ms/full/eYgzbXm',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/eYgzbXm.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1616982898&width=960'
  },
  {
    name: 'Visualize Data with Choropleth Map',
    url: 'https://codepen.io/vivian-ms/full/abpapMd',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/abpapMd.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1618806751&width=960'
  },
  {
    name: 'Visualize Data with Tree Map',
    url: 'https://codepen.io/vivian-ms/full/XWpLQPa',
    image: 'https://assets.codepen.io/3657666/internal/screenshots/pens/XWpLQPa.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1620282528&width=960'
  }
];


const getRandomArray = (length, max) => {
  let array = [];
  let i = 0;

  while (i < length) {
    let int = Math.floor(Math.random() * max);

    if (array.indexOf(int) === -1) {
      array.push(int);
      i++;
    }
  }

  return array;
}  // End getRandomArray()



const createProjectTiles = num => {
  let indices = getRandomArray(num, projects.length);

  for (let i = 0; i < indices.length; i++) {
    $('#projects-container').append(`
      <div class="project-tile card text-white bg-dark m-3">
        <a class="text-white" href="${projects[indices[i]].url}" target="_blank">
          <img class="card-img-top" src="${projects[indices[i]].image}">
          <div class="card-body">
            <p class="card-text text-center">${projects[indices[i]].name}</p>
          </div>
        </a>
      </div>
    `);
  }
}  // End createProjectTiles()


$(function() {
  $(window).on('click', evt => {
    $('#collapsable_navbar').collapse('hide');
  });

  $('#welcome-section h1').fadeIn(2000, () => {
    $('#welcome-section h1').fadeOut(1000, () => {
      $('#welcome-section h3, #welcome-section p').fadeIn(1000);
    });
  });

  createProjectTiles(6);
});  // End $ready()
