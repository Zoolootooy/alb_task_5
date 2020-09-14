$(document).ready(function () {

        $('.footer__title_hidden').click(function (event){
            if (window.matchMedia("(max-width: 768px)").matches) {
                $(this).toggleClass('active').next().slideToggle(300);
            }
        })
})