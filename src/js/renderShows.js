//Función para pintar con dos parámetros, qué pinto y dónde lo pinto. Está puesta al buscar algo en el buscador, getDataApi(), y al meter en favs, handleAddFav().
function renderShows(arrayShows, infoContainer) {
    let html = '';
    for (const show of arrayShows) {
        html += 
        `<li class="js-show-selected" id="${show.mal_id}">
            <img src="${show.images.jpg.image_url}" class="js-img" alt="${show.title}">
      
            <div>
            <h3>${show.title}</h3>
            </div>
        </li>`
    }
    infoContainer.innerHTML = html;
    listenerShows();
}