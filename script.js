const starField = document.getElementById('star-field');


function createStar(x = Math.random() * window.innerWidth, y = Math.random() * window.innerHeight) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  starField.appendChild(star);
  setTimeout(() => star.remove(), 4000);
}


setInterval(() => createStar(), 200);

document.addEventListener('mousemove', (e) => {
  createStar(e.clientX, e.clientY);
});
