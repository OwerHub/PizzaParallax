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

  const styleHead = {
    position: "fixed",
    top: "0px",
    width: "100vw",
  };
  /*   console.log(offset); */

  function testDivLoad() {
    /* console.log("in"); */
    let testDiv = document.querySelector(".testDiv");
    if (testDiv !== null) {
      console.log(testDiv.scrollTop);
    }
  }

  function test() {
    console.log("test");
  }

  // valamiért nem működik handlescroll-ra

  function handleScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop;
    let itemTranslate = Math.min(0, scrollTop / 3 - 60);
    console.log(itemTranslate);
  }

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
      <div
        className="testDiv"
        style={{ margin: "300px 0 0 0 " }}
        onLoad={testDivLoad()}
      >
        test
      </div>
      <div
        style={{
          transform: `translateY(${offset * -0.5}px)`,
          position: "fixed",
          top: "320px",
          width: "100vw",
        }}
      >
        test2
      </div>
    </div>
  );
}

export default ParallaxContainer;
