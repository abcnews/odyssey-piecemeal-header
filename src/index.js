const styles = require('./styles.css');

function init() {
  const headerEl = document.querySelector('.Header');
  const firstBlockEl = document.querySelector('.Block');
  const headerContentEl = headerEl.querySelector('.Header-content');
  const firstBlockContentEl = firstBlockEl.querySelector('.Block-content');
  const headerBlockContentEl = firstBlockContentEl.cloneNode(true);

  headerBlockContentEl.innerHTML = '';
  headerBlockContentEl.className = `${styles.root} ${headerBlockContentEl.className}`;
  headerEl.parentElement.removeChild(headerEl);
  Array.prototype.slice
    .call(headerContentEl.childNodes)
    .forEach(node => node.tagName !== 'DIV' && headerBlockContentEl.appendChild(node.cloneNode(true)));
  firstBlockContentEl.parentElement.insertBefore(headerBlockContentEl, firstBlockContentEl);
}

if (window.matchMedia('(min-width: 61.25rem)').matches) {
  window.__ODYSSEY__ ? init() : window.addEventListener('odyssey:api', init);
}
