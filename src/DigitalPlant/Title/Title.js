import React from "react";

export default function Title(props) {
  const { title } = props;

  return (
    <div
      style={{
        display: "flex",
        padding: "30px 0px 30px 32px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        alignSelf: "stretch",

        borderTop: "1px solid  #000",
        borderBottom: "1px solid  #000",
        borderRight: "1px solid #000",

        fontFamily: "Kalnia",
        fontWeight: "500",
        fontSize: "2.4rem",

        // color: "rgb(115,115,115)",
        color: "rgb(159, 107, 255)",
      }}
    >
      <p>{title}</p>
    </div>
  );
}
