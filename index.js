const divs = document.querySelectorAll(".box");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    divs.forEach((d) => (d.style.backgroundColor = "#ffff"));
    div.style.backgroundColor = "#f4fbf9";
  });
});
