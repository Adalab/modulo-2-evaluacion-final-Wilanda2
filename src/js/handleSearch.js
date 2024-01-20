//Evento búsqueda con filtro en la propia url y pintar búsqueda al pinchar Buscar
function handleSearch(event) {
    event.preventDefault();
    const inputValue = inputSearch.value;
    const url = (`https://api.jikan.moe/v4/anime?q=${inputValue}`)
    //esta forma de la url ya me está haciendo el filter, no necesito otra función para filtrar
    getDataApi(url);   
}

//Este es el botón que desencadena todo, al darle aquí, handleSearch()  coge el valor del input introducido, lo concatena a la url y coge los datos solicitados de la API.
btnSearch.addEventListener("click", handleSearch);