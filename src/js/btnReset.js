
function handleReset() {
    let showsList = showsList.splice(0, showsList.legth);
    let showsFav = showsFav.splice(0, showsFav.legth);
}
console.log(showsList);

btnReset.addEventListener("click", handleReset);

