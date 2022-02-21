import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants,setPlants] = useState([]);
  const [search, setSearch] = useState('');

  function addNewPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants={displayedPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
