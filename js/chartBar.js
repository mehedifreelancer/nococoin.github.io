/* Not massively important, just using height as a text (e.g. 100% etc) for the top of the bar's */
document.addEventListener("DOMContentLoaded", function (event) {

    var divs = document.getElementsByClassName('barchart-Bar');
    for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute("attr-height", divs[i].style.height);
    }

});
