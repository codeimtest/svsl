$('.toggle-button').click(function(){
	$('header').toggleClass('active');
	$(this).toggleClass('active')
	$('.mobile-toggle').toggleClass('active')
	$('body').toggleClass('lock')
})

const cards = gsap.utils.toArray(".card");
const spacer = 20;
const minScale = 0.8;

const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

cards.forEach((card, index) => {
  
  const scaleVal = distributor(index, cards[index], cards);
  
  const tween = gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: `top top`,
      scrub: true,
      markers: false,
      invalidateOnRefresh: true,
			
    },
    ease: "none",
    scale: scaleVal,
		boxShadow: '0px 0px 35px 6px rgba(34, 60, 80, 0.2)',
  });

  ScrollTrigger.create({
    trigger: card,
    start: `top-=${index * spacer} top`,
    endTrigger: '.cards',
    end: `bottom top+=${580 + (cards.length * spacer)}`,
    pin: true,
    pinSpacing: false,
    markers: false,
    id: 'pin',
    invalidateOnRefresh: true,
  });

});


//faq accordeon
var toggleActiveElements = document.querySelectorAll(".toggle-accordion");
for (var i = 0; i < toggleActiveElements.length; i++) {
    toggleActiveElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });
}
var swiper = new Swiper(".case-carousel", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 1.1,
	watchOverflow: true,
  spaceBetween: 16,
	loop: false,
	watchOverflow: true,
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".next-btn",
		prevEl: ".prev-btn",
	},
	breakpoints: {
		992: {
			slidesPerView: 2.1,
			spaceBetween: 40,
		},
	}
});