function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  let mode = ""
  let alt = "preto"

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    mode = "-light"
    alt = "branco"
  }

  img.setAttribute("src", `./assets/avatar${mode}.png`)
  img.setAttribute(
    "alt",
    `Foto do Leonardo Henrique Ferreira sorrindo, de camisa azul e fundo ${alt}.`
  )
}
