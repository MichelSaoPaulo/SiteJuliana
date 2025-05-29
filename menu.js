const btnMenu = document.getElementById('btnMenu');
const menuLateral = document.getElementById('menuLateral');

function toggleMenu() {
  menuLateral.classList.toggle('active');
}

function clickForaMenu(event) {
  if (!menuLateral.contains(event.target) && event.target !== btnMenu) {
    menuLateral.classList.remove('active');
  }
}

btnMenu.addEventListener('click', toggleMenu);
document.addEventListener('click', clickForaMenu);

