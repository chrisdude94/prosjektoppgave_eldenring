const API_URL = 'https://eldenring.fanapis.com/api/bosses';

async function fetchBosses() {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    displayBosses(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayBosses(bosses) {
    console.log('Bosses data:', bosses); 
  
    const bossesContainer = document.getElementById('bosses-container');
    bossesContainer.innerHTML = '';
  
    if (Array.isArray(bosses)) {
      bosses.forEach(boss => {
        const bossElement = document.createElement('div');
        bossElement.innerText = `Boss Name: ${boss.name}, Health: ${boss.health}`;
        bossesContainer.appendChild(bossElement);
      });
    } else {
      console.log('Data is not an array:', bosses);
    }
  }