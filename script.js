function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag image
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "imagem de avatar do usuário Mayk Brito modo light")
  } else {
    // se tiver sem light mode, manter a imagem original
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "imagem de avatar do usuário Mayk Brito modo dark")
  }
}
