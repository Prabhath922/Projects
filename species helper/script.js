  // Animate each species box when page loads
  anime({
    targets: '.species',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    easing: 'easeOutExpo'
  });  
  async function searchGISD() {
    const query = document.getElementById('searchInput').value;
    if (!query) return alert('Please enter a species or country.');

    window.open(`https://www.gbif.org/occurrence/search?query=${encodeURIComponent(query)}&country=`, '_blank');
  }
  
  
  async function loadSpeciesByUserLocation() {
    const container = document.getElementById('species-list');
    container.innerHTML = 'Loading...';
  
    try {
      const pos = await new Promise((res, rej) => 
        navigator.geolocation.getCurrentPosition(res, rej)
      );
  
      const { latitude, longitude } = pos.coords;
  
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const geoData = await geoRes.json();
      const countryCode = geoData.address.country_code.toUpperCase();
  
      const response = await fetch(`https://api.gbif.org/v1/occurrence/search?country=${countryCode}&hasCoordinate=true&limit=10`);
      const data = await response.json();
  
      container.innerHTML = '';
      data.results.forEach(species => {
        const div = document.createElement('div');
        div.className = 'species';
        div.innerHTML = `
          <strong>${species.scientificName || 'Unknown'}</strong><br>
          Location: ${species.decimalLatitude}, ${species.decimalLongitude}
        `;
        container.appendChild(div);
      });
  
    } catch (err) {
      container.innerHTML = 'Unable to fetch species data.';
      console.error(err);
    }
  }
  window.onload = loadSpeciesByUserLocation;
  
  window.onload = loadInvasiveSpecies;
  fetch('https://api.gbif.org/v1/occurrence/search?country=CA&hasCoordinate=true&taxon_key=1000000')
  .then(res => res.json())
  .then(data => {
    console.log(data.results); // You get an array of species
  });
