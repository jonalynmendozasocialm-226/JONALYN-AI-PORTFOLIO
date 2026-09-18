(() => {
  const mediaSelector = 'img, video';

  document.addEventListener('contextmenu', (event) => {
    if (event.target.closest(mediaSelector)) event.preventDefault();
  });

  document.addEventListener('dragstart', (event) => {
    if (event.target.closest(mediaSelector)) event.preventDefault();
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if ((event.ctrlKey || event.metaKey) && (key === 's' || key === 'u')) {
      event.preventDefault();
    }
  });

  document.querySelectorAll(mediaSelector).forEach((media) => {
    media.setAttribute('draggable', 'false');
  });
})();
