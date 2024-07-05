var slider = tns({
    container: ".services__sliders",
    items: 1,
    speed: 200,
    gutter: 100,
    slideBy: "page",
    autoplay: true,
    navPosition: "bottom",
    controls: false,
  
});

var slider = tns({
    container: ".services__cards",
    items: 3,
    speed: 200,
    gutter: 100,
    slideBy: "page",
    nav: false,
    autoplay: true,
    navPosition: "bottom",
    controls: true,
    containerControls: "#controls",
    prevButton: ".prev",
    nextButton: ".next",
    responsive: {
        1250: {
            items: 3,
        },
        200: {
            items:1,
        },
    },  
});