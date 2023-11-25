import { createSlice } from "@reduxjs/toolkit";
const InitialPlayers = {
  players: [
    {
      name: "Rohit Sharma",
      jersey: 45,
      odiFifty: 55,
      testFifty: 16,
      ttFifty: 29,
    },
    {
      name: "Shubman Gill",
      jersey: 77,
      odiFifty: 13,
      testFifty: 4,
      ttFifty: 1,
    },
    {
      name: "Virat Kohli",
      jersey: 18,
      odiFifty: 71,
      testFifty: 29,
      ttFifty: 37,
    },
    { name: "Shreyas Iyer", 
      jersey: 41, 
      odiFifty: 7, 
      testFifty: 5, 
      ttFifty: 7 },
    { 
      name: "KL Rahul", 
      jersey: 1, 
      odiFifty: 17, 
      testFifty: 13, 
      ttFifty: 22 },
    {
      name: "Suryakumar Yadav",
      jersey: 63,
      odiFifty: 4,
      testFifty: 0,
      ttFifty: 16,
    },
    { 
      name: "R Jadeja", 
      jersey: 8, 
      odiFifty: 13, 
      testFifty: 19, 
      ttFifty: 0 
    },
    { 
      name: "Mo Shami", 
      jersey: 11, 
      odiFifty: 0, 
      testFifty: 2, 
      ttFifty: 0 
    },
    {
      name: "Jaspreet Bumrah",
      jersey: 93,
      odiFifty: 0,
      testFifty: 0,
      ttFifty: 0,
    },
    {
      name: "Kuldeep Yadav",
      jersey: 23,
      odiFifty: 0,
      testFifty: 0,
      ttFifty: 0,
    },
    {
      name: "Mo Siraj",
      jersey: 13,
      odiFifty: 0,
      testFifty: 0,
      ttFifty: 0,
    },
  ],
  sub: [
    { name: "Hardik Pandya", jersey: 33,
      odiFifty: 11,
      testFifty: 4,
      ttFifty: 3, 
    }
  ],
};

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

    // { // ...state, // total: state.total + 1, // // players : [ // ...state.players, // "Virat Kohli", 18 // ]
  },
});

export const { addPlayer } = PlayerSlice.actions;
export default PlayerSlice.reducer;
