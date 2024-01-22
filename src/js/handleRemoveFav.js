 function handleRemoveFav(event) {
    const closeIcon = event.target;
    console.log(event.target);
    console.log(event.currentTarget);

    const closeIconParent = closeIcon.parentNode.id;
    console.log(closeIconParent);
    console.log(typeof(closeIconParent));

    const idRemovedClickedInt = parseInt(closeIconParent);
    console.log(idRemovedClickedInt);
    console.log(typeof(idRemovedClickedInt));
        
    // const foundRemovedId = showsFav.find(
    //     (seriesRemoved) => closeIconParent === seriesRemoved.mal_id
    // );
    //    console.log(foundRemovedId);

    const indexRemovedInFav = showsFav.findIndex(
        (seriesRemoved) => seriesRemoved.mal_id === closeIconParent
    );
    console.log(indexRemovedInFav);
    console.log(typeof(indexRemovedInFav));
        
    if (indexRemovedInFav === -1) {
        showsFav.splice(indexRemovedInFav, 1);
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
    