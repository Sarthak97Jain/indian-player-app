import React from "react";
import "./CopyExample.css";
import useCopyToClipboard from "../library/UseCopyToClipboard";
import { useState } from "react";

const CopyExample = () => {
  const [handleCopy] = useCopyToClipboard();
  let noChangeBtnState = {
    1: false,
    2: false,
    3: false,
    4: false,
  };
  const [buttonStates, setButtonStates] = useState(noChangeBtnState);

  const handleClick = (id) => {
    setButtonStates(noChangeBtnState);
    handleCopy(document.getElementById(id).textContent);
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  return (
    <div className="parent-copy">
      <div>CopyExample</div>
      <div className="player">
        <p id="1">Virat Kohli</p>
        <button className="btn" onClick={() => handleClick("1")}>
          {buttonStates["1"] ? "copied" : "copy"}
        </button>
      </div>
      <div className="player">
        <p id="2">Rohit Sharma</p>
        <button className="btn" onClick={() => handleClick("2")}>
          {buttonStates["2"] ? "copied" : "copy"}
        </button>
      </div>
      <div className="player">
        <p id="3">MS Dhoni</p>
        <button className="btn" onClick={() => handleClick("3")}>
          {buttonStates["3"] ? "copied" : "copy"}
        </button>
      </div>
      <div className="player">
        <p id="4">Yuvraj Singh</p>
        <button className="btn" onClick={() => handleClick("4")}>
          {buttonStates["4"] ? "copied" : "copy"}
        </button>
      </div>
      <input type="text" placeholder="Check by pasting here"></input>
    </div>
  );
};

export default CopyExample;
