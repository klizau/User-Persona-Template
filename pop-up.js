var close = document.getElementById("closebtn");
var open = document.getElementById("openbtn");
var closeByButton = document.getElementById("backdrop");


/** e - название которое ты присвоила первому аргументу
 * когда ты передашь эту функцию в качестве коллбэка в слушатель событий
 * он передаст первым аргументомм объект с данными о произошедшем событии
 */
function handleESC(e) {
  if (e.key === "Escape") {
    hidePopup();
  }
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
}


close.addEventListener("click", hidePopup);
closeByButton.addEventListener("click", hidePopup);

open.addEventListener("click", showPopup);

document.addEventListener("keydown", handleESC);
