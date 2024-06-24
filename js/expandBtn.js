function expand() {
  const expandBtn = document.getElementById("expandBtn");
  const morePics = document.getElementById("more");
  const btnText = document.getElementById("btnText");
  const expandImg = document.getElementById("expandImg");

  expandBtn.classList.toggle("show");
  morePics.classList.toggle("show");
  btnText.classList.toggle("show");
  expandImg.classList.toggle("show");

  if (expandBtn.classList.contains("show")) {
    btnText.innerHTML = "свернуть";
  } else {
    btnText.innerHTML = "развернуть";
    window.location = "#gallery";
  }
}
