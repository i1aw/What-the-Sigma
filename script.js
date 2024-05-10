window.addEventListener('load', function () {
    var button = document.getElementById("hamburger-icon");
    button.addEventListener("click", toggleDropdownMenu)
    // console.log(button);
  })

function toggleDropdownMenu() {
    var menu = document.getElementById("sidebar");
    // console.log(menu);
    menu.classList.toggle("show-sidebar");
}