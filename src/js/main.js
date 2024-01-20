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
      console.log(showsList);
      //aquí estoy segura de que los datos han llegado, por eso renderizo aquí
      renderShows(showsList, containerGen);
    });
}

function handleAddFav(event) {
    const idShowClicked = event.currentTarget.id;
    console.log(event.currentTarget.id);
    console.log(typeof(event.currentTarget.id))
        const idShowClickedInt = parseInt(idShowClicked);
        console.log(idShowClickedInt);
        console.log(typeof(idShowClickedInt));

    const foundShowId = showsList.find(
        (series) => idShowClickedInt === series.mal_id
    );
    
    console.log(foundShowId);
    console.log(typeof(foundShowId));
    
    ;
    const indexShowInFav = showsFav.findIndex(
        (series) => series.mal_id === idShowClickedInt
    );
        console.log(indexShowInFav);
    if (indexShowInFav === -1) {
        showsFav.push(foundShowId);
        
    }
    console.log(showsFav);
    renderShows(showsFav, containerFav);
    setLocalData();
}

function listenerShows() {
    const allShows = document.querySelectorAll('.js-show-selected');
    for (const oneShow of allShows) {
        oneShow.addEventListener("click", handleAddFav);
    }
}


//función para convertir el objeto a string y guardarlo en el local. Se ejecuta en handleAddFav().
function setLocalData() {
    const favsToString = JSON.stringify(showsFav);
    localStorage.setItem('favShows', favsToString);
}

//función para coger los datos del local. Se ejecuta en getDataApi al cargar la página.
function getFromLocal() {
    const favoriteShows = JSON.parse(localStorage.getItem(favsToString));
    console.log(favoriteShows);
    renderShows(showsFav, containerFav);
}


//Función para pintar con dos parámetros, qué pinto y dónde lo pinto. Está puesta al buscar algo en el buscador, getDataApi(), y al meter en favs, handleAddFav().
function renderShows(arrayShows, infoContainer) {
    let html = '';
    for (const show of arrayShows) {
        html += 
        `<div class="show js-show-selected" id="${show.mal_id}">
            <img src="${show.images.jpg.image_url}" class="js-img" alt="${show.title}">
      
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

//Este es el botón que desencadena todo, al darle aquí, handleSearch()  coge el valor del input introducido, lo concatena a la url y coge los datos solicitados de la API.
btnSearch.addEventListener("click", handleSearch);