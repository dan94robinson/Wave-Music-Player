import React, {useState, useRef} from 'react';
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
//Import Data and Util
import data from './data';




function App() {
     //Ref
     const audioRef = useRef(null);
  //State
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
//State
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,
});
const [libraryStatus, setLibraryStatus] = useState(false);
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;

  //Calculate Percentage
  const roundedCurrent = current;
  const roundedDuration = duration;
  const animationP = ((roundedCurrent / roundedDuration) * 100);
  setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animationP})
};
const songEndHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      if (isPlaying) 
        audioRef.current.play();
        
}


  return (
    <div className={`App ${libraryStatus ? 'library-active' : 'library-inactive'}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player  setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setSongInfo={setSongInfo} songInfo={songInfo}/>
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setSongs={setSongs} libraryStatus={libraryStatus} />

      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
    </div>
  );
}

export default App;
