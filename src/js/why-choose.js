$(document).ready(function () {
    $('.why__item').click(function (event){
        $(this).find('.why__marker-item').toggleClass('why__marker-item_active')
        $(this).find('.why__text-item').slideToggle(300)
    })
})