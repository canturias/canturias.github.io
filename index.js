// Scrolling
const main = document.getElementById('main');
const minScroll = 350;

function lockScroll() {
  if (main.scrollTop < minScroll) {
    main.scrollTop = minScroll;
  }
}

lockScroll();

main.addEventListener('scroll', () => {
  lockScroll();
});
// Scrolling



// Load
window.onload = function () {
  let window = document.getElementById('window');
  window.classList.remove('window-hide');
};
//Load

// Background
const background = document.getElementById('background');
background.playbackRate = 0.5;
// Background



// Current Year
document.getElementById('year').innerHTML = new Date().getFullYear();
// Current Year