const { listPets } = require('./generated');

const fetchPets = async () => {
  try {
    const response = await listPets();
    const pets = response.data;
    console.log('Pets:', pets);
  } catch (error) {
    console.error('Error fetching pets:', error);
  }
};

fetchPets();
