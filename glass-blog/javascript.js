const hamburgerMenu = document.querySelector(".hamburger");
const menuItem = document.querySelector(".menu");
let open;

function openMenu() {
    if (open) {
       menuItem.style.display = "none";
       open = false;
    } else if (!open) {
       menuItem.style.display = "block";
       open = true;
    }
  }