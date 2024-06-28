document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.navigation .container');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  const images = document.querySelectorAll('.imagegroup2 img'); // Select images in imagegroup2
  
  navItems.forEach((navItem, index) => {
    const arrow = navItem.querySelector('.arrow');
    navItem.addEventListener('click', () => {
      dropdownMenus.forEach((menu, menuIndex) => {
        if (index === menuIndex) {
          menu.classList.toggle('active');
          arrow.classList.toggle('active');
        } else {
          menu.classList.remove('active');
          navItems[menuIndex].querySelector('.arrow').classList.remove('active');
        }
      });
    });
  });

  images.forEach((img) => {
    img.addEventListener('click', () => {
      // Remove 'active' class from all images
      images.forEach(image => image.classList.remove('active'));
      // Add 'active' class to the clicked image
      img.classList.add('active');
    });
  });
});
