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