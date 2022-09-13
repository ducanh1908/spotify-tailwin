
import './App.css';
import DetailSong from './component/detail-song';
import ListSong from './component/list-song';
import Navbar from './component/navbar';
import { Songs } from './context';
import DataSongs from './data/song.json'
import Audio from './component/playing';
import {useState} from "react"
function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }
  return (
    <div className="App" >
     <Songs.Provider value={{DataSongs, song, handleSetSong}}>
     <Navbar></Navbar>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
        
        <DetailSong>
          
        </DetailSong>
        <ListSong></ListSong>
      </div>
        <Audio></Audio>
     </Songs.Provider>
    </div>
  );
}

export default App;
