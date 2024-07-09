var slider = tns({
    container: ".services__cards",
    items: 6,
    speed: 200,
    gutter: 100,
    slideBy: "page",
    nav: false,
    autoplay: false,
    navPosition: "bottom",
    controls: true,
    containerControls: "#scontrols",
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