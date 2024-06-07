// App.js
import React, { useState } from 'react';
import Filters from './components/Filters';
import PetBrowser from './components/PetBrowser';

function App() {
  const [filters, setFilters] = useState({ type: 'all' });
  const [pets, setPets] = useState([]);

  const handleChangeType = (type) => {
    setFilters({ ...filters, type });
  };

  const handleFindPetsClick = () => {
    let url = 'http://localhost:3001/pets';
    if (filters.type !== 'all') {
      url += `?type=${filters.type}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPets(data));
  };

  const handleAdoptPet = (id) => {
    const updatedPets = pets.map((pet) =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };

  return (
    <div className="app">
      <Filters
        onChangeType={handleChangeType}
        onFindPetsClick={handleFindPetsClick}
      />
      <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
    </div>
  );
}

export default App;
