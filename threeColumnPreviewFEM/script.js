const transparentElems = document.querySelectorAll('.opacity-none');
const offScreenElems = document.querySelectorAll('.off-screen-left');

window.onload = () => {
  transparentElems.forEach((element) => {
    element.classList.remove("opacity-none");
  })
  offScreenElems.forEach((element) => {
    element.classList.remove("off-screen-left");
  })
}