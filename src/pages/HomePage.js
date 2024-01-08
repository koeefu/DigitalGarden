import { useEffect } from "react";

import SimpleSlide from "../SimpleSlide";
import Scene from "../Scene";
import { CameraTimeline } from "../AnimatedCamera";

import "../App.css";

function getScrollProgress() {
  const winScroll = window.document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  return winScroll / height;
}

export default function HomePage() {
  useEffect(() => {
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();

      CameraTimeline.progress(scrolled);

      return () => {
        window.onscroll = null;
      };
    };
  }, []);

  return (
    <div className="article_wrapper">
      <SimpleSlide viewportPosition={10}>
        <div
          style={{
            padding: "0rem 3rem 0rem 0rem",
            color: "rgb(159, 107, 255)",
            fontSize: "30px",
            textAlign: "right",
          }}
        >
          {/* Scroll down */}
        </div>
      </SimpleSlide>

      <SimpleSlide viewportPosition={100}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* This dewdrop world— */}
        </div>
      </SimpleSlide>

      <SimpleSlide viewportPosition={240}>
        <div
          style={{
            padding: "0rem 4rem 0rem 0rem",
            textAlign: "right",
          }}
        >
          {/* Is a dewdrop world, */}
        </div>
      </SimpleSlide>

      <SimpleSlide viewportPosition={380}>
        <div
          style={{
            padding: "0rem 0rem 0rem 8rem",
            color: "rgb(159, 107, 255)",
            fontSize: "60px",
            // textAlign: "center",
          }}
        >
          {/* And yet,
          <br />
          and yet... */}
          My
          <br />
          Digital
          <br />
          Garden
        </div>
      </SimpleSlide>
      <Scene />
    </div>
  );
}
