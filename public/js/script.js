window.addEventListener("scroll", function() {

    let scroll = window.scrollY;

    let escala = Math.min(1 + (scroll / 500), 3);

    document.getElementById("imagenProducto").style.transform =
        "scale(" + escala + ")";

});