function handleAddFav(event) {
    const idShowClicked = event.currentTarget.id;
    const idShowClickedInt = parseInt(idShowClicked);
        
    const foundShowId = showsList.find(
        (series) => idShowClickedInt === series.mal_id
    );
       
    
    const indexShowInFav = showsFav.findIndex(
        (series) => series.mal_id === idShowClickedInt
    );
        
    if (indexShowInFav === -1) {
        showsFav.push(foundShowId);
        
    }
    
    renderShows(showsFav, containerFav);
    setLocalData(showsFav);
}

function listenerShows() {
    const allShows = document.querySelectorAll('.js-show-selected');
    for (const oneShow of allShows) {
        oneShow.addEventListener("click", handleAddFav);
    }
}