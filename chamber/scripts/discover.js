document.addEventListener('DOMContentLoaded', () => {
    const discoverSection = document.getElementById('discover');
  
    fetch('./items.json')
      .then(response => response.json())
      .then(items => {
        items.forEach(item => {
          const card = document.createElement('section');
          card.classList.add('card');
  
          card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
              <img src="${item.image}" alt="${item.name}">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
          `;
  
          discoverSection.appendChild(card);
        });
      })
      .catch(error => console.error('Error loading items:', error));
  
    // Visitor message logic
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();
  
    if (!lastVisit) {
      visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
      const daysDifference = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
      if (daysDifference < 1) {
        visitMessage.textContent = 'Back so soon! Awesome!';
      } else {
        visitMessage.textContent = `You last visited ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago.`;
      }
    }
  
    localStorage.setItem('lastVisit', currentVisit);
  });
  document.addEventListener('DOMContentLoaded', () => {
  const discoverSection = document.getElementById('discover');
  const visitMessage = document.getElementById('visit-message');
  const isMobile = window.innerWidth <= 640;


  fetch('./data/items.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch items.json');
      return response.json();
    })
    .then(items => {
      items.forEach((item, index) => {
        const card = document.createElement('section');
        card.classList.add('card');
        card.style.gridArea = `card${index + 1}`; // You must define card1–card8 in CSS grid

        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure>
            <img src="${item.image}" alt="Image of ${item.name}" width="300" height="200" loading="lazy" class="hover-img">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
        `;

        discoverSection.appendChild(card);
      });

 
      if (!isMobile) {
        document.querySelectorAll('.hover-img').forEach(img => {
          img.classList.add('hover-effect');
        });
      }
    })
    .catch(error => console.error('Error loading items:', error));

  const lastVisit = Number(localStorage.getItem('lastVisit'));
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
  } else {
    const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysPassed < 1) {
      visitMessage.textContent = 'Back so soon! Awesome!';
    } else {
      visitMessage.textContent = `You last visited ${daysPassed} day${daysPassed === 1 ? '' : 's'} ago.`;
    }
  }

  localStorage.setItem('lastVisit', now);
});
