//TOOLTIP
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//FUNCION PARA NAVBAR
$(document).ready(function () {
    $(window).scroll(function () {
        // Check if scroll position passes top position of #box1
        if ($(this).scrollTop() >= $('#box2').offset().top) {
            // If so, add the CSS class to change the navbar background
            $('.navbar').addClass('navbar-scrolled');
        } else {
            // If not, remove the CSS class
            $('.navbar').removeClass('navbar-scrolled');
        }
    });
});

//FUNCION PARA SECCION "CONTACTO"
function sent(){
    alert('Mensaje enviado')
}
$('#send-message').on('click', sent)

