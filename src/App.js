import React from "react";

import VisuallyHidden from "./VisuallyHidden";

function ClickBallGame() {
  function handleClick(type) {
    // if (type === 'win') {
    console.log(type);
    // function handleClick(event) {
    //   const element = event.target;
    //   const type = element.dataset.type;
    if (type === "ball") {
      alert("You win!");
    } else {
      alert("You lose :(");
    }
  }

  const handleDivClick = () => {
    alert("Div was clicked!");
  };

  return (
    <div className="wrapper">
      <button className="ball" data-type="ball" onClick={handleClick}>
        <VisuallyHidden>This is Ball text node</VisuallyHidden>
      </button>
      <button
        className="bomb"
        data-type="bomb"
        aria-label="this is the bomb"
        onClick={handleClick}
      >
        <span role="img" aria-label="this is the span" tabindex="0">
          <div className="some-div" role="button"></div>
        </span>
      </button>
      <div
        className="another-div"
        role="button"
        tabindex="0"
        aria-label="Save file"
        onClick={handleDivClick}
      ></div>
    </div>
  );
}

export default ClickBallGame;
