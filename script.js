const starField = document.getElementById('star-field');

function createStar(x = Math.random() * window.innerWidth, y = Math.random() * window.innerHeight) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 2 + 1;
  star.addEventListener('animationend', () => star.remove());
setInterval(() => createStar(), 500);
  star.style.height = `${size}px`;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  starField.appendChild(star);
  setTimeout(() => star.remove(), 20000);
}

setInterval(() => createStar(), 300);


document.addEventListener('mousemove', (e) => {
  createStar(e.clientX, e.clientY);
});
