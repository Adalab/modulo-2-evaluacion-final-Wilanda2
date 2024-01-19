'use strict';

console.log('tamos ready :)');

let showsList = [];

let showsFav = [];

const inputSearch = document.querySelector('.js-input-search');
const btnSearch = document.querySelector('.js-btn-search');
//const btnReset = document.querySelector('.js-btn-reset');
const containerGen = document.querySelector('.js-container-gen');
const containerFav = document.querySelector('.js-container-fav');

const inputValue = inputSearch.value;

const url = (`https://api.jikan.moe/v4/anime?q=${inputValue}`)


function getDataApi() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showsList = data.data;
      console.log(showsList);
    });
}

// function handleAddFav(event) {
//     console.log(event.currentTarget.mal_id);
//     const idShowClicked = event.currenTarget.mal_id;
//     const foundShowId = showsList.find(
//         (series) => idShowClicked === series.mal_id
//     );

//     const indexShowInFav = favoriteShows.findIndex(
//         (series) => series.mal_id === idShowClicked
//     );

//     if ( indexShowInFav === -1) {
//         favoriteShows.push(foundShowId);
//     }
//     console.log(favoriteShows);
//     renderShows(favoriteShows, containerFav);
// }

// function listenerShows() {
//     const allShows = document.querySelector('.js-show-selected');
//     for (const oneShow of allShows) {
//         oneShow.addEventListener("click", handleAddFav);
//     }
// }


function renderShows(arrayShows, infoContainer) {
    let html = '';
    for (const show of arrayShows) {
        html += 
        `<div class="show js-show-selected" id="${show.mal_id}">
        <img src="${show.images.jpg.large_image_url}" class="js-img" alt="${show.title}">
      
        <div>
          <h3 class="title">${show.title}</h3>
        </div>

    </div>`
    }
    infoContainer.innerHTML = html;
}


//Búsqueda y pintar en búsqueda al pinchar Buscar
function handleSearch(event) {
    event.preventDefault();
    getDataApi();
    const filteredShows = showsList.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    renderShows(filteredShows, containerGen)
}

btnSearch.addEventListener("click", handleSearch);