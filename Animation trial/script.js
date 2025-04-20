  // Animate each species box when page loads
  anime({
    targets: '.species',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    easing: 'easeOutExpo'
  });
  function searchGISD() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
      const url = `https://www.invasivespecies.net/database/species/search/?search=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    }
  }