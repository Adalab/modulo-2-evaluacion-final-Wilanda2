'use strict';

console.log('tamos ready :)');

let showsList = [];

let showsFav = [];

const inputSearch = document.querySelector('.js-input-search');
const btnSearch = document.querySelector('.js-btn-search');
//const btnReset = document.querySelector('.js-btn-reset');
const containerGen = document.querySelector('.js-container-gen');
const containerFav = document.querySelector('.js-container-fav');


function getDataApi(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showsList = data.data;
      //aquí estoy segura de que los datos han llegado, por eso renderizo aquí
      renderShows(showsList, containerGen);
    });
}

function handleAddFav(event) {
    console.log(event.currentTarget.id);
    console.log(event.target.id);;
    const idShowClicked = event.currentTarget.id;
    console.log(idShowClicked);
    const foundShowId = showsList.find(
        (series) => idShowClicked === series.id
    );
    

//     const indexShowInFav = favoriteShows.findIndex(
//         (series) => series.id === idShowClicked
//     );

//     if (indexShowInFav === -1) {
//         favoriteShows.push(foundShowId);
//     }
//     console.log(favoriteShows);
//     renderShows(favoriteShows, containerFav);
}

function listenerShows() {
    const allShows = document.querySelectorAll('.js-show-selected');
    for (const oneShow of allShows) {
        oneShow.addEventListener("click", handleAddFav);
    }
}







//Función para pintar con dos parámetros, qué pinto y dónde lo pinto
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
    listenerShows();
}


//Evento búsqueda con filtro en la propia url y pintar búsqueda al pinchar Buscar
function handleSearch(event) {
    event.preventDefault();
    const inputValue = inputSearch.value;
    const url = (`https://api.jikan.moe/v4/anime?q=${inputValue}`)
    //esta forma de la url ya me está haciendo el filter, no necesito otra función para filtrar
    getDataApi(url);   
}

btnSearch.addEventListener("click", handleSearch);