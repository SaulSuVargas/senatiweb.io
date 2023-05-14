/* ========== Declaramos constantes ========= */
const navMenu = document.getElementById('nav-menu'),
      navTogle = document.getElementById('nav-togle'),
      navCerrar = document.getElementById('nav-cerrar')

/* === MOSTRAMOS MENU === */
/* SI DAMOS CLICK EN EL MENU, SE ABRIRA*/
if(navTogle) {
    navTogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* === CERRAMOS MENU === */
/* SI DAMOS CLICK EN EL "X" SE CIERRA EL MENU*/
if(navCerrar) {
    navCerrar.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* === CERRAMOS EL MENU CUANDO SELECCIONAMOS UNA SECCION */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cuando hacemos clic en cada enlace de navegación, cerramos el menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ====== CAMBIAMOS EL COLOR DEL HEADER CUANDO BAJEMOS ========*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header') 
}
window.addEventListener('scroll', scrollHeader)

/* ====== LE AGREGAMOS UNA RALLITA A CADA SECCION ===== */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/* ====== MOSTRAR EL SCROLL ======*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-arriba');
    // cuando superamos el hv establecido arrancamos la funcion de mostrar la flecha
	if(this.scrollY >= 200)  scrollUp.classList.add('mostrar-scroll'); else scrollUp.classList.remove('mostrar-scroll');
}
window.addEventListener('scroll', scrollUp)

/* ====== TEMA OSCURO/CLARO ======*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Seleccionar Tema
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema seleccionado
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Validamos si el usuario eligio el tema
if (selectedTheme) {
  // Si se cumple la validación, preguntamos cuál fue el problema para saber si activamos o desactivamos la oscuridad
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activar / desactivar el tema con el botón
themeButton.addEventListener('click', () => {
    // Agregar o eliminar el tema oscuro/icono
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Guardamos el tema/icono seleccionado
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ====== CONFIGURACION DEL CARRUSEL =======*/
var swiper = new Swiper(".sedes_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 12,
    coverflowEffect: {
      rotate: 0,
    },
});