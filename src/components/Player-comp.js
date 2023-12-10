import React, { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
// import { addPlayer } from "../../App/PlayerSlice"; 
import "./Player-comp.css"; 
import PlayerStats from "./PlayerStats";

const PlayerComp= () => { 
    const allPlayers = useSelector((state) => state?.playersName); 
    const [returnPlayer , setReturnPlayer] =useState({name: '', battingNum: 0}); 
    let string =''; 
    console.log(returnPlayer); 
    // const dispatch = useDispatch();
    
    // const addPlayer = () =>{ // return { // type: "ADD_PLAYER", // payload: { // name: "Virat Kohli", // jersey: 18, // } // } // } 
    const submitHandler = (event) => {
         event.preventDefault(); 
         console.log(allPlayers); 
         string = event.target[0].value;
         const battingPlayer = allPlayers.players[Number(string)-1] 
         if(battingPlayer){
             setReturnPlayer((prevState)=>
             ({ ...prevState, 
                name: battingPlayer.name, 
                battingNum: Number(string) 
            })); } 
         else 
            setReturnPlayer(undefined); 
    } 
    
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
          <form onSubmit={submitHandler}>
            <h3>Search Player based on Batting order 1 to 11</h3>
            <div style={{"display": "flex"}}>
                <input type="number" name='box' className="input-height" placeholder="1 to 11"/>
                <h5 className="check">{returnPlayer !== undefined ? ( returnPlayer.battingNum !== 0 ? 'Player with batting order ' + returnPlayer.battingNum + ' : ' + returnPlayer.name: '') : "Player not found"}</h5>
            </div>
            <div className="form-field">
              <input type="submit" name="search"></input>
            </div>
          </form>
          {/* <button  onClick = {() => dispatch(addPlayer())}>Add VK</button> */}
          {returnPlayer !== undefined && returnPlayer.battingNum !== 0 && <PlayerStats selectedPlayer={returnPlayer}/>}
        </>
      );
    };
    
export default PlayerComp;
    