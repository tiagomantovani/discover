function toggleMode() {
  const html = document.body
  html.classList.toggle("light")
  //pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a image
  if (html.classList.contains("light")) {
    //se tiver mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Fundo light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Fundo normal")
  }
}
