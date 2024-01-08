import React from "react";
import Checklist from "./Checklist";

// all the info about the bottom part of my page
export default function Bottom(props) {
  const { water, fertilize, prune, disease } = props;
  return (
    <div
      style={{
        display: "flex",
        paddingLeft: "32px",
        alignItems: "center",
        alignSelf: "stretch",
        borderRight: "1px solid #000",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "24px 0px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "16px",
          flex: "1 0 0",
          alignSelf: "stretch",

          fontFamily: "Kalnia",
        }}
      >
        <Checklist categories={"Watering"} checklist={water} />
        <Checklist categories={"Fertilize"} checklist={fertilize} />
        <Checklist categories={"Pruning"} checklist={prune} />
        <Checklist categories={"Diseases"} checklist={disease} />
      </div>
    </div>
  );
}
