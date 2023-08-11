function btnColor() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  /* LOGICA COM IF ELSE */
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  /* logica com TOGGLE */
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}
