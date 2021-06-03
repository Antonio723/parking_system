var openModal = document.getElementById("precos");
var closeModal = document.getElementById("close_modal");
var modal = document.getElementById("bg_modal");

window.addEventListener('click', function (e) {
    if (openModal.contains(e.target)) {
        modal.style.display = "flex";
    } else if (closeModal.contains(e.target)) {
        modal.style.display = "none";
    } else{}
})

