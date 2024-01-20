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
