const starField = document.getElementById('star-field');

function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 3;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;
  starField.appendChild(star);
  setTimeout(() => star.remove(), 4000);
}

setInterval(createStar, 200);
