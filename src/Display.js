import { useEffect } from 'react';

const Display = ({ audioClips, setAudioText, volume }) => {
  const newVolume = parseFloat(volume);

  const playSong = (e) => {
    let key = e.currentTarget.id;
    let audio = document.getElementById(`${key}-audio`);
    if (audio) {
      audio.volume = newVolume;
      audio.currentTime = 0;
      audio.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
      setAudioText(audioClips.find((audioClip) => audioClip.key.toUpperCase() === key).text);
    }
  };

  useEffect(() => {
    const findKey = (e) => {
      let key = e.key.toUpperCase();
      let audio = document.getElementById(`${key}-audio`);
      if (audio) {
        audio.volume = newVolume;
        audio.currentTime = 0;
        audio.play().catch((error) => {
          console.error('Audio playback failed:', error);
        });
        setAudioText(audioClips.find((audioClip) => audioClip.key.toUpperCase() === key).text);
      }
    };

    document.addEventListener('keydown', findKey);

    return () => {
      document.removeEventListener('keydown', findKey);
    };
  }, [audioClips, newVolume, setAudioText]); // Add necessary dependencies here

  return (
    <div className="items-container">
      {audioClips.map((audioClip) => (
        <div
          className="drum-pad btn btn-primary border text-center"
          id={audioClip.key.toUpperCase()}
          key={audioClip.key}
          onClick={playSong}
        >
          <h2>{audioClip.key}</h2>
          <audio id={`${audioClip.key.toUpperCase()}-audio`} src={audioClip.path}></audio>
        </div>
      ))}
    </div>
  );
};

export default Display;
