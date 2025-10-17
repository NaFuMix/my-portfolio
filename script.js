document.addEventListener('DOMContentLoaded', function () {
  const carouselEl = document.getElementById('carouselExampleRide');
  const infoEl = document.getElementById('project-info');

  function updateInfoFromSlide(item) {
    if (!item || !infoEl) return;
    const title = item.dataset.title || '';
    const desc = item.dataset.desc || '';
    const link = item.dataset.link || '#';
    infoEl.innerHTML = `<h2>${title}</h2><p>${desc}</p><a href="${link}" target="_blank" rel=""><button type="button" class="btn btn-info">View</button></a>`;
  }

  const active = carouselEl.querySelector('.carousel-item.active') || carouselEl.querySelector('.carousel-item');
  updateInfoFromSlide(active);

  carouselEl.addEventListener('slid.bs.carousel', function (e) {
    const newItem = e.relatedTarget;
    updateInfoFromSlide(newItem);
  });
});