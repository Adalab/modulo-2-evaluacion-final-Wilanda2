 function handleRemoveFav(event) {
    const closeIcon = event.target;
    const closeIconParent = closeIcon.parentNode;
    const idRemovedClickedInt = parseInt(closeIconParent);
        
    const foundRemovedId = showsFav.find(
        (seriesRemoved) => idRemovedClickedInt === seriesRemoved.mal_id
    );
       console.log(idRemovedClickedInt);

    const indexRemovedInFav = showsFav.findIndex(
        (seriesRemoved) => seriesRemoved.mal_id === idRemovedClickedInt
    );
        
    if (indexRemovedInFav === -1) {
        showsFav.splice(foundRemovedId, 1);
    }
    
    renderFavs(showsFav, containerFav);
    setLocalData(showsFav);
}

function listenerFavs() {
    const allShowsRemoved = document.querySelectorAll('.js-close-icon');
    for (const oneShowRemoved of allShowsRemoved) {
        oneShowRemoved.addEventListener("click", handleRemoveFav);
    }
}
    