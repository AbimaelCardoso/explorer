function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar a light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de perfil Mayky Brito Fundo gradiente azul com roxo, óculos de sol e jaqueta preta"
    )
  } else {
    //se não tiver light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil Mayky Brito")
  }
}
