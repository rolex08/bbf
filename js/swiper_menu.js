function swiperMenu() {

    var swiper = new Swiper('.video-menu-cont-swiper', {
        slidesPerView: 4.85,
        slideClass: 'project-menu-item',
        wrapperClass: 'project-menu',
        freeMode: true
    });

    var swiper2 = new Swiper('.news-menu-cont-swiper', {
        slidesPerView: 4.3,
        slideClass: 'news-menu-item',
        wrapperClass: 'news-menu',
        freeMode: true
    });

}

$('document').ready(function() {
swiperMenu();
});
