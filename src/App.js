import logo from './logo.svg';
import './App.css';
import PlayerComp from './components/Player-comp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CopyExample from './components/CopyCustomHookExample/CopyExample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PlayerComp/> } />
        <Route path="/copy" element={ <CopyExample/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
