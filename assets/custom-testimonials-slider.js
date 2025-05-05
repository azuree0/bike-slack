// initialize slideshow

const slider_html = document.querySelector('.testimonial-slider');

const slider = new Flickity(slider_html,{
    pageDots: false,
    autoPlay: false,
    wrapAround: true,
    cellAlign: 'left',
    pauseAutoPlayOnHover: false
});

// config:
// assume there is just one single slider on the page
// navigation dots should be disabled
// no autoplay
// infinite loop
// the slides or cells should be aligned to the left side on initialization.
// pauseAutoPlayOnHover: false
