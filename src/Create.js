// Plant.js
import React, { useState } from "react";

export default function Create() {
  const [plantData, setPlantData] = useState({
    name: "",
    memo: "",
    date: "",
    light: "",
    watering: "",
    fertilize: "",
    pruning: "",
    disease: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={plantData.name}
          onChange={handleChange}
        />
      </label>
      {/* Repeat similar code for other fields */}
    </div>
  );
}
