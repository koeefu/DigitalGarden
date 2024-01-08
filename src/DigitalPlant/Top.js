import React from "react";

function PlantInfo(props) {
  const { info, title } = props;
  return (
    <div
      style={{
        display: "flex",
        padding: "20px 32px",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flex: "1 0 0",
        alignSelf: "stretch",
        borderRight: "1px solid #000",
        fontFamily: "Kalnia",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "8px 0px",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <h3
          style={{
            color: "#000",
            fontSize: "1.2rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          {title}
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "10px",
          alignSelf: "stretch",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            color: "rgb(115,115,115)",
          }}
        >
          {info}
        </p>
      </div>
    </div>
  );
}

export default function Top(props) {
  const { acDate, light, memo } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignSelf: "stretch",

        fontFamily: "Kalnia",
      }}
    >
      <PlantInfo title={"Acquisition Date"} info={acDate} />
      <PlantInfo title={"Light"} info={light} />
      <PlantInfo title={"Memo"} info={memo} />
    </div>
  );
}
