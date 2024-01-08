import React, { useState } from "react";
import Top from "../DigitalPlant/Top";
import Title from "../DigitalPlant/Title/Title";
import Bottom from "../DigitalPlant/Bottom/index";
import "../App.css";

export default function GardenPage() {
  const [plantList, setPlantList] = useState([]);

  const [plantName, setPlantName] = useState("");
  const [light, setLight] = useState("");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");

  const [water, setWater] = useState("");
  const [fertilize, setFertilize] = useState("");
  const [prune, setPrune] = useState("");
  const [disease, setDisease] = useState("");

  const addPlant = () => {
    if (
      plantName.trim() !== "" &&
      light.trim() !== "" &&
      date.trim() !== "" &&
      memo.trim() !== "" &&
      water.trim() !== "" &&
      fertilize.trim() !== "" &&
      prune.trim() !== "" &&
      disease.trim() !== ""
    ) {
      const newPlant = {
        plantName,
        light,
        date,
        memo,
        water,
        fertilize,
        prune,
        disease,
      };

      setPlantList([...plantList, newPlant]);

      setPlantName("");
      setLight("");
      setDate("");
      setMemo("");
      setWater("");
      setFertilize("");
      setPrune("");
      setDisease("");
    }
  };

  const removePlant = (index) => {
    const updatedList = [...plantList];
    updatedList.splice(index, 1);
    setPlantList(updatedList);
  };

  return (
    <div
      style={{
        backgroundColor: "#faf3fe",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#faf3fe",
          // marginTop: "4rem",
          display: "flex",
          paddingTop: "40px",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <br />
        <br />
        <div
          style={{
            fontFamily: "Kalnia",
            fontWeight: "600",
            fontSize: "3.5rem",
            color: "rgb(149, 101, 238)",
          }}
        >
          My Plants
        </div>
        <p
          style={{
            color: "grey",
            textAlign: "center",
            fontFamily: "Kalnia",
            fontWeight: "400",
            fontSize: "1.3rem",
            width: "55%",
          }}
        >
          Welcome to my Digital Plant Diary! <br />
          Here, I capture the essence of my leafy companions' journey.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            flex: "1 0 0",
          }}
        >
          <div className="button_list">
            <input
              type="text"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              placeholder="Plant Name"
            />
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
            />
            <input
              type="text"
              value={light}
              onChange={(e) => setLight(e.target.value)}
              placeholder="Light"
            />
            <input
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="Memo"
            />
          </div>

          <div className="button_list">
            <input
              type="text"
              value={water}
              onChange={(e) => setWater(e.target.value)}
              placeholder="Watering"
            />
            <input
              type="text"
              value={fertilize}
              onChange={(e) => setFertilize(e.target.value)}
              placeholder="Fertilize"
            />
            <input
              type="text"
              value={prune}
              onChange={(e) => setPrune(e.target.value)}
              placeholder="Pruning"
            />
            <input
              type="text"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              placeholder="Diseases"
            />
          </div>
        </div>

        <button className="button1" onClick={addPlant}>
          Add to My Plants
        </button>
        <br />
        <br />

        <div>
          {plantList.map((plant, index) => (
            <div>
              <div
                style={{
                  display: "flex",
                  width: "55vw",
                  height: "auto",

                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",

                  backgroundColor: "#f5eeff",
                  borderLeft: "1px solid var(--lines, #000)",
                  borderTop: "1px solid var(--lines, #000)",
                  borderBottom: "1px solid var(--lines, #000)",
                }}
              >
                <Top
                  acDate={plant.date}
                  light={plant.light}
                  memo={plant.memo}
                />
                <Title title={plant.plantName} />
                <Bottom
                  water={plant.water}
                  fertilize={plant.fertilize}
                  prune={plant.prune}
                  disease={plant.disease}
                />
              </div>

              <button
                className="button2"
                onClick={() => removePlant(index)}
                name="remove"
              >
                Remove
              </button>
              <br />
              <br />
            </div>
          ))}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
