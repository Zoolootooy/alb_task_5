$(document).ready(function () {
    $('.menu__button').click(function (event){
        if (window.matchMedia("(max-width: 1023px)").matches) {
            $(this).toggleClass('active').next().slideToggle(300)
        }
    })
})