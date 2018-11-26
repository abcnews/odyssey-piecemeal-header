const styles = require('./styles.css');

function init() {
  const headerEl = document.querySelector('.Header');
  const firstBlockEl = document.querySelector('.Block');
  const headerContentEl = headerEl.querySelector('.Header-content');
  const firstBlockContentEl = firstBlockEl.querySelector('.Block-content');
  const headerBlockContentEl = firstBlockContentEl.cloneNode(true);

  headerBlockContentEl.innrHTML = '';
  headerBlockContentEl.className = `${styles.root} ${headerBlockContentEl.className}`;
  headerEl.parentElement.removeChild(headerEl);
  headerBlockContentEl.childNodes.forEach(node => headerBlockContentEl.removeChild(node));
  headerContentEl.childNodes.forEach(node => headerBlockContentEl.appendChild(node.cloneNode(true)));
  firstBlockContentEl.parentElement.insertBefore(headerBlockContentEl, firstBlockContentEl);
}

window.__ODYSSEY__ ? init() : window.addEventListener('odyssey:api', init);
