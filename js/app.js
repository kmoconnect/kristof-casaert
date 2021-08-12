(function($){

    

    $('#home-slideshow').slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings:{
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1080,
                settings:{
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#page-slideshow').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
    });

    $(".projects__slideshow-item, .realisaties__images").slickLightbox();


})(jQuery);


// Realisaties
const realisatiesLink = document.querySelectorAll('.realisaties__link');
const realisatiesContainers = document.querySelectorAll('.realisaties__images');
const realisatiesListItems = document.querySelectorAll('.realisaties__item');

realisatiesLink.forEach((link,index) => {

    // Show default image grid container
    if(index === 0){
        link.parentElement.classList.add('realisaties__item--active');
        realisatiesContainers[0].classList.add('realisaties__images--active');
    }

    link.addEventListener('click', function(e){
        e.preventDefault();

        // Find container realisaties that match with data attribute from toggle bar
        const imageItem = document.getElementById(e.target.getAttribute("data-tab"));

        if(imageItem){

            removeClass(realisatiesContainers, 'realisaties__images--active')
            removeClass(realisatiesListItems, 'realisaties__item--active')

            imageItem.classList.add('realisaties__images--active');
            e.target.parentElement.classList.add('realisaties__item--active');
        }
    })
});

function removeClass(Items, ItemClass){
    Items.forEach(item => item.classList.remove(ItemClass));
}

const dropdownItem = document.querySelector('.navbar__dropdown .navbar__link');

let clicked = 0;
dropdownItem.addEventListener('click', (e) => {
    clicked++;

    if(clicked === 1){
        e.preventDefault();
    }
    
    console.log(clicked);

});