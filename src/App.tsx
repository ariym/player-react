import { useEffect, useState } from 'react'
import FileBrowser from './FileBrowser'
import Player from './Player'
import { fetchDirectoryTree } from './api'
import './App.css'


const DEFAULT_PATH = "/users/shared";


export default function App() {
  const [url, updateUrl] = useState(DEFAULT_PATH);
  const [dirTree, udpateDirTree]: [any, any] = useState([]);

  const updateTree = async (newPath: string) => {
    const res = await fetchDirectoryTree(newPath);
    udpateDirTree(res);
  }

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    updateTree(url)
  }

  return (
    <div className="App">

      <h1 className="text-4xl">Player</h1>

      <FileBrowser
        dirTree={dirTree}
        onSelectPath={(chosenPath: string) => updateTree(chosenPath)}
      />

      <Player url={url} />

      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-black"
          value={url}
          onChange={(e: any) => updateUrl(e.target.value)}
        />
        <input className="form-button" type="submit"/>
      </form>

    </div>
  )
}
