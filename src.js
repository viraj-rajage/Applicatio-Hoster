// const icon = document.getElementById('menu-icon');
// const hiddenDiv = document.getElementById('menu-items');

const menuIcon = document.getElementById('menu-icon');
const menuItems = document.getElementById('menu-items');


// icon.addEventListener('mouseenter', () => {
//   hiddenDiv.style.display = 'block';
// });

// icon.addEventListener('click', () => {
//   if (!event.target.matches('#menu-icon') && !event.target.closest('.menu-items')) {
//     menuItems.style.display = 'none';
//   }
// });


// // function hideMenu() {
// //   hiddenDiv.style.display = 'none';
// // }

// window.addEventListener('resize', () => {
//   if (window.innerWidth <= 930) {
//       hideMenu();
//   } else {
//       hiddenDiv.style.display = 'block';
//   }
// });

// // JavaScript to hide menu when screen width is 930px or less
// function hideMenu() {
//   hiddenDiv.style.display = 'none';
// }


menuIcon.addEventListener('click', () => {
  menuItems.style.display = (menuItems.style.display === 'none' || menuItems.style.display === '') ? 'block' : 'none';
});

// Close the menu if clicked outside or on a menu item
document.addEventListener('click', (event) => {
  if (!event.target.matches('#menu-icon') && !event.target.closest('.menu-items')) {
      hideMenu();
  }
});

// Adjust visibility on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth <= 930) {
      hideMenu();
  } else {
      menuItems.style.display = 'block';
  }
});

// JavaScript to hide menu when screen width is 930px or less
function hideMenu() {
  menuItems.style.display = 'none';
}


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });


