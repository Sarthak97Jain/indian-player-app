import { createSlice } from "@reduxjs/toolkit"; 
const InitialPlayers = { players: [ 
        { name: "Rohit Sharma", jersey: 45, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "Shubman Gill", jersey: 77, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "Virat Kohli", jersey: 18, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "Shreyas Iyer", jersey: 34, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "KL Rahul", jersey: 99, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "Suryakumar Yadav", jersey: 97, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "R Jadeja", jersey: 8, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "Mo Shami", jersey: 19, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "Jaspreet Bumrah", jersey: 24, odiFifty: 5, testFifty: 5, ttFifty: 5 }, 
        { name: "Kuldeep Yadav", jersey: 37, odiFifty: 5, testFifty: 5, ttFifty: 5}, 
        { name: "Mo Siraj", jersey: 95, odiFifty: 5, testFifty: 5, ttFifty: 5}, ], 
    sub: [ 
        { name: "Hardik Pandya", jersey: 33, },
     ]}; 

const PlayerSlice = createSlice(
    { name: "Players", 
    initialState: InitialPlayers, 
    reducers: { 
        addPlayer: (state) => { const player = { name: "Virat Kohli", jersey: 18 }; 
        let newState = { ...state }; 
        console.log(newState); 
        newState["players"] = [...newState["players"], player]; 
        return newState; }, 
        
        // { // ...state, // total: state.total + 1, // // players : [ // ...state.players, // "Virat Kohli", 18 // ]  

    }}); 
        
export const { addPlayer } = PlayerSlice.actions; 
export default PlayerSlice.reducer;