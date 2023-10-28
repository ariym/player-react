import { useState } from 'react'
import FileBrowser from '@/_components/FileBrowser'
import Player from '@/_components/Player'
import { fetchDirectoryTree } from './api'


const DEFAULT_PATH = "/users/shared";


export default function App() {
  const [url, updateUrl] = useState(DEFAULT_PATH);
  const [videoUrl, updateVideoUrl] = useState(DEFAULT_PATH);
  const [dirTree, udpateDirTree]: [any, any] = useState([]);
  const [seekToTs, setSeekToTs] = useState(0);

  const onSelectPath = async (newPath: string) => {

    if(newPath.endsWith(".mp4")){
      console.log("updating video url", newPath)
      updateVideoUrl(newPath)
    } else {
      console.log("updating tree", newPath)
      const res = await fetchDirectoryTree(newPath);
      udpateDirTree(res);
    }
  }

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    onSelectPath(url)
  }

  return (
    <div className="App">

      <h1 className="text-4xl">Player</h1>

      <FileBrowser
        dirTree={dirTree}
        onSelectPath={(chosenPath: string) => onSelectPath(chosenPath)}
      />

      <Player
        url={videoUrl}
        seekToTs={seekToTs}
      />

      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-black"
          value={url}
          onChange={(e: any) => updateUrl(e.target.value)}
        />
        <input className="form-button" type="submit"/>
      </form>
      
      {/* input for timestamp to seek to */}
      <input
          type="number"
          className="border-2 border-black"
          value={seekToTs}
          onChange={(e: any) => setSeekToTs(e.target.value)}
        />


    </div>
  )
}
