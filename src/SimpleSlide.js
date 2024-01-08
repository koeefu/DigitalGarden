export default function SimpleSlide(props) {
  const { children, viewportPosition } = props;
  return (
    <div
      style={{
        position: "absolute",
        minWidth: "45vw",
        top: `${viewportPosition}vh`,
        zIndex: "50",
        width: "100%",
        // fontSize: "60px",
        // color: "rgb(89, 46, 230)",
        color: "rgb(101, 64, 222)",
        fontFamily: "Kalnia, serif",
        fontWeight: "Regular 400",
      }}
    >
      {children}
    </div>
  );
}
