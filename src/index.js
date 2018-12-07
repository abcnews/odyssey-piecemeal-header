const styles = require('./styles.css');

function init() {
  const headerEl = document.querySelector('.Header');
  const firstBlockEl = document.querySelector('.Block');
  const headerContentEl = headerEl.querySelector('.Header-content');
  const firstBlockContentEl = firstBlockEl.querySelector('.Block-content');
  const headerBlockContentEl = firstBlockContentEl.cloneNode(true);

  headerBlockContentEl.innerHTML = '';
  headerBlockContentEl.className = `${headerBlockContentEl.className} ${styles.root}`;
  Array.prototype.slice
    .call(headerContentEl.childNodes)
    .forEach(node => node.tagName !== 'DIV' && headerBlockContentEl.appendChild(node.cloneNode(true)));

  firstBlockContentEl.parentElement.insertBefore(headerBlockContentEl, firstBlockContentEl);
}

window.__ODYSSEY__ ? init() : window.addEventListener('odyssey:api', init);
