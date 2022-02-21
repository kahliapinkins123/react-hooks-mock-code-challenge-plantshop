import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  const listOfPlants = plants.map((plant)=>{
    return <PlantCard key={plant.id} plant={plant}/>
  })

  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
