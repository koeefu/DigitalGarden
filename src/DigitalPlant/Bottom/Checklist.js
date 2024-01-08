import React from "react";

export default function Checklist(props) {
  const { categories, checklist } = props;

  return (
    <div
      style={{
        display: "flex",
        paddingRight: "16px",
        alignItems: "center",
        gap: "12px",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "140px",
          alignItems: "center",
          gap: "10px",
          alignSelf: "stretch",
        }}
      >
        <h3
          style={{
            color: "#000",
            lineHeight: "normal",

            fontSize: "1.2rem",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Kalnia",
          }}
        >
          {categories}
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          padding: "12px 12px 12px 0px",
          alignItems: "center",
          flex: "1 0 0",
          alignSelf: "stretch",

          color: "rgb(115,115,115)",
        }}
      >
        <p>{checklist}</p>
      </div>
    </div>
  );
}
