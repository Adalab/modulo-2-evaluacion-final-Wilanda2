function getDataApi(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showsList = data.data;
      console.log(showsList);
      //aquí estoy segura de que los datos han llegado, por eso renderizo aquí
      renderShows(showsList, containerGen);
    });
}