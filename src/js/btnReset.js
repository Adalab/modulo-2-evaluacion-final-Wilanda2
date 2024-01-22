function handleReset() {
    showsList = [];
    showsFav = [];

    containerGen.innerHTML = "";
    containerFav.innerHTML = "";
    inputSearch.value = "";
    localStorage.setItem('favShows', JSON.stringify([]));
}

btnReset.addEventListener("click", handleReset);

