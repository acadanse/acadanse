window.addEventListener('scroll', ()=>{
  if(scrollY > 0){
    document.querySelector('.header').classList.add('is-active')
    document.querySelector('#banner_logo').classList.add('logo-is-active')
  } else {
    document.querySelector('.header').classList.remove('is-active')
    document.querySelector('#banner_logo').classList.remove('logo-is-active')
  }
})
function toggleMenu() {
    document.getElementById("menu").classList.toggle("cache")
    document.getElementById("menu").style.animation = "menu 300ms ease"
}
