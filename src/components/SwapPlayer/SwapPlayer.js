import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { swapPlayer } from "../PlayerSlice";

const SwapPlayer = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector((state) => state?.playersName);
  const SwapSubmitHandler = (event) => {
    event.preventDefault();
    let indexPlayer1 = Number(event.target[0]?.value) - 1;
    let indexPlayer2 = Number(event.target[1]?.value) - 1;
    if (indexPlayer1 <= 10 && indexPlayer2 <= 10) {
      let payload = {
        indexPlayer1,
        indexPlayer2,
      };
      dispatch(swapPlayer(payload));
    }

    //   let originalState = {...allPlayers};
    //   originalState['players']  = [...allPlayers['players']] ;
    //   let storedPlayer1 = originalState['players'][indexPlayer1];
    //   originalState['players'][indexPlayer1] = originalState['players'][indexPlayer2];
    //   originalState['players'][indexPlayer2] = storedPlayer1;
    //   console.log(originalState);
  };
  return (
    <>
      <div className="check heading">
        <h2>INDIA Playing 11</h2>
      </div>
      <div className="player-names-div">
        {allPlayers.players?.map((player) => (
          <li className="check">
            {player?.name} {player?.jersey}
          </li>
        ))}
      </div>
      <form onSubmit={SwapSubmitHandler}>
        <h3 className="swap-heading">SwapPlayer</h3>
        <h4 style={{ marginTop: "0px", color: "#2255A4" }}>
          Enter players batting number to be swapped 1 to 11
        </h4>
        <div style={{ display: "flex" }}>
          <input
            type="number"
            name="box1"
            className="input-height"
            placeholder="1 to 11"
          />
          <input
            type="number"
            name="box2"
            className="input-height"
            placeholder="1 to 11"
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className="form-field" style={{ paddingBottom: "1rem" }}>
          <input type="submit" name="search"></input>
        </div>
      </form>
    </>
  );
};

export default SwapPlayer;
