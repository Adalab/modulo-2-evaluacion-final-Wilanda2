//Función para pintar con dos parámetros, qué pinto y dónde lo pinto. Está puesta al buscar algo en el buscador, getDataApi(), y al meter en favs, handleAddFav().
function renderShows(arrayShows, infoContainer) {
    let html = '';
    for (const show of arrayShows) {
        //si está en favoritos ponme esta clase 
        const seriesInFav = showsFav.findIndex(
            (seriesfav) => seriesfav.mal_id === show.mal_id
            
        );
        console.log(show.mal_id);
        if (seriesInFav !== -1) {
        showSelected.classList.add('fav');}

        html += 
        `<li class="js-show-selected js-show-selectedfav show" id="${show.mal_id}">`;
    
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
    console.log(showsList)     
    }


    infoContainer.innerHTML = html;
    listenerShows();
