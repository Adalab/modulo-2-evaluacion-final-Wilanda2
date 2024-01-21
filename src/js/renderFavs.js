function renderFavs(arrayShows, infoContainer) {
    let htmlFav = '';
    for (const oneFav of arrayShows) {
        htmlFav += 
        `<li class="fav" id="${oneFav.mal_id}">
            <img src="${oneFav.images.jpg.image_url}" class="js-img" alt="${oneFav.title}">
      
            <div>
            <h3 class="fav_title">${oneFav.title}</h3>
            </div>

            <div>
            <h3><i class="fa-regular fa-circle-xmark js-close-icon"></i></h3>
            </div>
        </li>`
    }
    infoContainer.innerHTML = htmlFav;
}