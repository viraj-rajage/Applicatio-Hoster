

const menuIcon = document.getElementById('menu-icon');
const menuItems = document.getElementById('menu-items');



menuIcon.addEventListener('click', () => {
  menuItems.style.display = (menuItems.style.display === 'none' || menuItems.style.display === '') ? 'block' : 'none';
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('#menu-icon') && !event.target.closest('.menu-items')) {
      hideMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 930) {
      hideMenu();
  } else {
      menuItems.style.display = 'block';
  }
});

function hideMenu() {
  menuItems.style.display = 'none';
}


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });


  setTimeout(function() {
    location.reload();
}, 5000);