import React, { useState, useEffect } from "react";

function ParallaxContainer() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const innerStyle = {
    color: "red",
    border: "2px solid black",
    padding: "15px",
  };

  const styleHead = { position: "fixed", display: "flex" };
  console.log(offset);
  return (
    <div>
      <div style={styleHead} className="head">
        head
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            transform: `translateX(${offset * 0.5 + 20}px)`,
            position: "fixed",
            top: "20px",
          }}
        >
          <div style={innerStyle}>Hello</div>
        </div>
        <div
          style={{
            transform: `translateX(${offset * -0.2 + 800}px)`,
            position: "fixed",
            top: "250px",
          }}
        >
          <div style={innerStyle}>Hello</div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxContainer;
