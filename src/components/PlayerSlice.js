import { createSlice } from "@reduxjs/toolkit";
import { InitialPlayers } from "./library/constants";

const PlayerSlice = createSlice({
  name: "Players",
  initialState: InitialPlayers,
  reducers: {
    addPlayer: (state) => {
      const player = { name: "Virat Kohli", jersey: 18 };
      let newState = { ...state };
      console.log(newState);
      newState["players"] = [...newState["players"], player];
      return newState;
    },
    swapPlayer: (state , {payload}) =>{
      // return action.payload
      let indexPlayer1 = Number(payload?.indexPlayer1);  
      let indexPlayer2 = Number(payload?.indexPlayer2);
      console.log(state);
      let newState={ ...state };
      console.log(newState)
      console.log(newState.players)
      newState.players =  [...state.players] ;
      console.log(newState.players)
      console.log(newState);
      let storedPlayer1 = newState.players[indexPlayer1];
      newState.players[indexPlayer1] = newState.players[indexPlayer2];
      newState.players[indexPlayer2] = storedPlayer1;
      console.log(newState);

      return newState;
    }


    // { // ...state, // total: state.total + 1, // // players : [ // ...state.players, // "Virat Kohli", 18 // ]
  },
});

export const { addPlayer ,swapPlayer} = PlayerSlice.actions;
export default PlayerSlice.reducer;
