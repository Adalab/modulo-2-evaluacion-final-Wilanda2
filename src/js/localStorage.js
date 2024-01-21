//función para convertir el objeto a string y guardarlo en el local. Se ejecuta en handleAddFav().
function setLocalData() {
    const favsToString = JSON.stringify(showsFav);
    localStorage.setItem('favShows', favsToString);    
}

//función para coger los datos del local. Se ejecuta fuera de todo para que lo haga al cargar la página.
function getFromLocal() {
    const favoriteShows = JSON.parse(localStorage.getItem('favShows')); 
    if (favoriteShows !== null) {
        //dos pasos: modificar el array de paletteList con las cosas del local; y luego vuelvo a renderizar
        showsFav = favoriteShows;
        renderFavs(favoriteShows, containerFav);
    }
}

getFromLocal();
