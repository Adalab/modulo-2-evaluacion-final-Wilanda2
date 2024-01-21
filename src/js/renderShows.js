//Función para pintar con dos parámetros, qué pinto y dónde lo pinto. Está puesta al buscar algo en el buscador, getDataApi(), y al meter en favs, handleAddFav().
function renderShows(arrayShows, infoContainer) {
    let html = '';
    for (const show of arrayShows) {
        html += 
        `<li class="js-show-selected show" id="${show.mal_id}">`;
    
        let urlImg = `<img src="${show.images.jpg.image_url}" alt="${show.title}">`;
        if (urlImg === `<img src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" alt="${show.title}">`
        ) {
            urlImg = `<img src="https://placehold.co/250x350" alt="${show.title}">`;
        }
        html += urlImg;
        html += 
        `<div>
            <h3>${show.title}</h3>
            </div>
        </li>`;
    }
    
    
    infoContainer.innerHTML = html;
    listenerShows();
}