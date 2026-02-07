const rose = document.getElementById("rose");
const card = document.getElementById("card");

let visible = false;

rose.addEventListener("click", () => {
  visible = !visible;

  if (visible) {
    card.classList.add("show");
  } else {
    card.classList.remove("show");
  }
});
