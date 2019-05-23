const ball = document.querySelector('#ball')
document.querySelector('#field').addEventListener('click', (event) => {
  [ball.style.left, ball.style.top] = [`${Math.min(180, Math.max(event.offsetX, 20))}px`, `${Math.min(130, Math.max(event.offsetY, 20))}px`];
});
