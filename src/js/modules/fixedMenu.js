export default function fixedMenuFunc() {
  const menu = document.querySelector(".header")

  window.addEventListener("scroll", scrollFixedMenu)


  function scrollFixedMenu() {
    const breakpoint = 80
    if (window.scrollY > breakpoint) {
      menu.classList.add("header__fixed")
    } else {
      menu.classList.remove("header__fixed")
    }
  }

  scrollFixedMenu()

}