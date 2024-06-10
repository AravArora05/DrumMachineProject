import React, { useState } from 'react';
import Display from './Display';
import CurrText from './CurrText';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

const audioClips = [
  { key: 'Q', text: 'kick 1', path: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'W', text: 'kick 2', path: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
  { key: 'E', text: 'kick 3', path: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'A', text: 'snare 1', path: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
  { key: 'S', text: 'snare 2', path: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
  { key: 'D', text: 'snare 3', path: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  { key: 'Z', text: 'shaker', path: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
  { key: 'X', text: 'open hh', path: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },
  { key: 'C', text: 'closed hh', path: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
];

function App() {
  const [audioText, setAudioText] = useState("");
  const [volume, changeVolume] = useState("0.5");
  const [toggled, setToggle] = useState(true);

  const handleChange = (e) => {
    changeVolume(e.currentTarget.value);
  }

  return (
    <div id="drum-machine" className="text-center border m-5 p-5 bg-light">
      <h2>Click a Key and hear some Wonderful Music!</h2>
      <div className="volume-container m-1 border rounded">
        <label className="px-2" htmlFor="name">Volume: </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          name="volume"
          value={volume}
          onChange={handleChange}
        />
      </div>
      <div
        className={`toggle-button ${toggled ? "toggled" : ""}`}
        onClick={() => setToggle(!toggled)}
      >
        <button className="thumb"></button>
      </div>
      {toggled && <Display id="display" audioClips={audioClips} volume={volume} setAudioText={setAudioText} />}
      {toggled && <CurrText currAudioText={audioText} />}
    </div>
  );
}

export default App;
