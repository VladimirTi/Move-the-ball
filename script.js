document.querySelector('#field').addEventListener('click', (event) => {
  [ball.style.left, ball.style.top] = normalizeBorder(event.offsetX, event.offsetY);
});

function normalizeBorder (x, y) {
  const arr = []
  x < 20 ? arr.push('20px') :
  x > 180 ? arr.push('180px') :
  arr.push(`${x}px`);
  y < 20 ? arr.push('20px') :
  y > 130 ? arr.push('130px') :
  arr.push(`${y}px`);
  return arr
}
