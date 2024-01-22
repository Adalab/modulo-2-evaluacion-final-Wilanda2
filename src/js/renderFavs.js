function renderFavs(arrayShows, infoContainer) {
    let htmlFav = '';
    for (const oneFav of arrayShows) {
        htmlFav += 
        `<li class="fav js-show-favorite" id="${oneFav.mal_id}">`;

        let urlImgFav = `<img src="${oneFav.images.jpg.image_url}" alt="${oneFav.title}">`;
        if (urlImgFav === `<img src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" alt="${oneFav.title}">`) {
            urlImgFav = `<img src="https://placehold.co/250x350" alt="${oneFav.title}">`;
        }
            htmlFav += urlImgFav;
            htmlFav +=            
                `<div>
                    <h3 class="fav_title">${oneFav.title}</h3>
                </div>

                <div js-close-icon>
                    <i class="fa-regular fa-circle-xmark js-close-icon icon"></i>
                </div>
            </li>`
    }
    console.log(showsFav);

    infoContainer.innerHTML = htmlFav;
    listenerFavs();
}