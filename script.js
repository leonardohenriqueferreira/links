function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  let mode = ""

  html.classList.toggle("light")

  if (html.classList.contains("light")) mode = "-light"

  img.setAttribute("src", `./assets/avatar${mode}.png`)
}
