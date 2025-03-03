const toggleNav = document.querySelector('.toggle-nav');
const xmark = document.querySelector('.toggle-xmark');
const toggleBar = document.querySelector('.toggle-bar');
const body = document.querySelector('body');

toggleBar.addEventListener('click', () => {
    toggleNav.style.display = "flex";
    xmark.style.display = "none";
    body.style.overflow = "hidden";
});

xmark.addEventListener('click', () => {
    toggleNav.style.display = "none";
    toggleBar.style.display = "flex";
    body.style.overflow = "auto";
});