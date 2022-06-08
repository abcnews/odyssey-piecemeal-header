import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { selectMounts } from '@abcnews/mount-utils';
import styles from './styles.css';

whenOdysseyLoaded.then(() => {
  const headerEl = document.querySelector('.Header');
  const firstBlockEl = document.querySelector('.Block');
  const headerContentEl = headerEl.querySelector('.Header-content');
  const firstBlockContentEl = firstBlockEl.querySelector('.Block-content');
  const headerBlockContentEl = firstBlockContentEl.cloneNode(true);
  const [placeholderEl] = selectMounts('piecemealheader');
  const placeholderBlockContentEl = placeholderEl && placeholderEl.closest('.Block-content');

  headerBlockContentEl.innerHTML = '';
  headerBlockContentEl.className = `${headerBlockContentEl.className} ${styles.root}`;
  Array.prototype.slice
    .call(headerContentEl.childNodes)
    .forEach(node => node.tagName !== 'DIV' && headerBlockContentEl.appendChild(node.cloneNode(true)));

  if (placeholderBlockContentEl) {
    placeholderBlockContentEl.parentElement.insertBefore(headerBlockContentEl, placeholderBlockContentEl);
    placeholderBlockContentEl.parentElement.removeChild(placeholderBlockContentEl);
  } else {
    firstBlockContentEl.parentElement.insertBefore(headerBlockContentEl, firstBlockContentEl);
  }
});
