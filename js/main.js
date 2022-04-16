const mainNav = document.querySelector('.nav');
const menuContainer = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const home = document.getElementById('home-link');
const about = document.getElementById('about-link');
const program = document.getElementById('program-link');
const join = document.getElementById('join-link');
const sponsor = document.getElementById('sponsor-link');
const news = document.getElementById('news-link');
const campaign = document.getElementById('campaign-link');
mobileMenu.style.display = 'none';
closeIcon.style.display = 'none';
const menuToggle = () => {
  if (mainNav.classList.contains('displayMenu')) {
    mainNav.classList.remove('displayMenu');
    closeIcon.style.display = 'none';
    mainNav.style.backgroundColor = '#fff';
    menuIcon.style.display = 'block';
    mobileMenu.style.display = 'none';
  } else {
    mainNav.classList.add('displayMenu');
    mainNav.style.backgroundColor = '#ec5242';
    closeIcon.style.display = 'block';
    mobileMenu.setAttribute('class', 'mobile-menu');
    menuIcon.style.display = 'none';
    mobileMenu.style.display = 'block';
  }
};
menuContainer.addEventListener('click', menuToggle);
function closeMenu() {
  closeIcon.style.display = 'none';
  mobileMenu.style.display = 'none';
  menuIcon.style.display = 'block';
}
home.addEventListener('click', closeMenu);
about.addEventListener('click', closeMenu);
program.addEventListener('click', closeMenu);
join.addEventListener('click', closeMenu);
sponsor.addEventListener('click', closeMenu);
news.addEventListener('click', closeMenu);
campaign.addEventListener('click', closeMenu);
const copy = document.querySelector('.copyright');
const date = new Date();
const year = date.getFullYear();
const copyrightContent = `
    &copy ${year} Africa AI Expo. All Rights Reserved.
`;
copy.innerHTML = copyrightContent;
