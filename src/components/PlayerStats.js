import React from 'react';
import { useSelector } from 'react-redux';
import './PlayerStats.css'


const PlayerStats = (selectedPlayer) => {
    const allPlayers = useSelector((state) => state?.playersName);
    console.log(allPlayers);
    console.log(selectedPlayer);
  return (
    <div className=' stat-parent'>
        <h3 className='stats-heading'>International Fiftys</h3>
        <div className='playerStats'>
        <h5>{selectedPlayer.selectedPlayer.name !== '' ?selectedPlayer.selectedPlayer.name : ""}</h5>
        <h5>ODi Career  : {allPlayers.players?.filter( (player) => player?.name.toString() === selectedPlayer.selectedPlayer.name)[0]?.odiFifty}</h5>
        <h5>TEST Career : {allPlayers.players?.filter( (player) => player?.name.toString() === selectedPlayer.selectedPlayer.name)[0]?.testFifty}</h5>
        <h5>T20 Career  : {allPlayers.players?.filter( (player) => player?.name.toString() === selectedPlayer.selectedPlayer.name)[0]?.ttFifty}</h5>
        {/* <h5>{allPlayers.players?.filter( (player) => player?.name === selectedPlayer.selectedPlayer.name).jersey}</h5> */}
        </div>
    </div>
  )
}
export default PlayerStats
