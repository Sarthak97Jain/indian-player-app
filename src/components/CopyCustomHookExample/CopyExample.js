import React from "react";
import "./CopyExample.css";
import useCopyToClipboard from "../library/UseCopyToClipboard";
import { useState } from "react";
import { copyPlayers } from "../library/constants";

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
      <h2 style={{ color: "#2255A4" }} className="heading">
        Copy Example
      </h2>
      {copyPlayers.map((player, index)=>{
        return (
          <div className="player" key={index}>
            <p id={player.id}>{player.name}</p>
            <button className="btn" onClick={() => handleClick(player.id)}>
          {buttonStates[player.id] ? "copied" : "copy"}
        </button>
          </div>
        );
      })}
      <div className="paste-area">
        <h3>Check by pasting here</h3>
        <input style={{marginBottom: '5px'}}type="text"></input>
      </div>
    </div>
  );
};

export default CopyExample;
