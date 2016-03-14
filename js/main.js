$(document).ready(function () {
    
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });
    
    $('.fancybox').fancybox();
    
    $('.show-grid .col-xs-12').hover(function(){
        $(this).css('background-color', 'lightcoral');
        //$(this).css('opacity', '0.25');
    }, function(){
        $(this).css('background-color', '#f3554c');
        //$(this).css('opacity', '0.75');
    });
    
    $('.show-grid .col-xs-12').click(function(){
        swiper.slideTo(this.parentNode.attributes["data-slide"].nodeValue);
    });
    
    /*document.getElementsByTagName('div')[0].innerHTML = document.getElementsByTagName('div')[0].innerHTML.replace('é', '<span class="special">é</span>');
    document.getElementsByTagName('div')[0].innerHTML = document.getElementsByTagName('div')[0].innerHTML.replace('à', '<span class="special">à</span>');
    document.getElementsByTagName('div')[0].innerHTML = document.getElementsByTagName('div')[0].innerHTML.replace('â', '<span class="special">â</span>');
    document.getElementsByTagName('div')[0].innerHTML = document.getElementsByTagName('div')[0].innerHTML.replace('é', '<span class="special">é</span>');*/
});