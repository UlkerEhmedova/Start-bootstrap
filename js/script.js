// Menu rrenk deyisdirmek
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
})


// Modal
var btn = document.getElementById("img01");
var modal = document.getElementById("modal01");
function onClick(e) {
    btn.src = e.src;
    modal.style.display = "block";
}
function closse() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "block";
    }
}