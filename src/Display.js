import { useEffect} from 'react';
const Display = ({ audioClips, setAudioText, volume }) => {

    const newVolume = parseFloat(volume);
    
    const playSong = (e) => {
        let key = e.currentTarget.id;  
        let audio = document.getElementById(`${key}-audio`);
        if (audio) {
            audio.volume = newVolume;
            audio.currentTime = 0;
            audio.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        /**changeAudioText(audioClips.find(audioClip => 
                audioClip.key == key).text); 
                */    
            setAudioText(audioClips.find((audioClip) => audioClip.key.toUpperCase() === key).text);
        };
        };


        const findKey = (e) => {
            let key = e.key.toUpperCase();
            let audio = document.getElementById(`${key}-audio`);
            if (audio) {
                audio.volume = newVolume;
                audio.currentTime = 0;
                audio.play().catch(error => {
                    console.error("Audio playback failed:", error);
                });
            /**changeAudioText(audioClips.find(audioClip => 
                    audioClip.key == key).text); 
                    */    
                setAudioText(audioClips.find((audioClip) => audioClip.key.toUpperCase() === key).text);
            };
            };
        useEffect(()=> {
            document.addEventListener("keydown", findKey);

            return ()=> {
                document.removeEventListener("keydown", findKey);
            }
        }, [findKey]);

        
    return (
        <div class="items-container">
            {audioClips.map((audioClip) => (
                <div className="drum-pad btn btn-primary border text-center" id={audioClip.key.toUpperCase()} key={audioClip.key} onClick={playSong}>
                    <h2>{audioClip.key}</h2>
                    <audio id={`${audioClip.key.toUpperCase()}-audio`} src={audioClip.path}></audio>
                </div>
            ))}
        </div>
    );
};


export default Display;
