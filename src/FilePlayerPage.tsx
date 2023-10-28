import { useState } from 'react'

import { fetchDirectoryTree } from './api'

// components
import FileExplorer from '@/_components/FileExplorer'
import FilePlayer from '@/_components/FilePlayer'

export type BrowserPage = {
  defaultDirPath?: string
  defaultVideoPath?: string
};

export default function FilePlayerPage({ defaultDirPath="/", defaultVideoPath }: BrowserPage) {

  const [url, updateUrl] = useState(defaultDirPath);
  const [videoPath, updateVideoPath] = useState(defaultVideoPath);
  const [dirTree, udpateDirTree]: [any, any] = useState([]);
  const [seekToTs, setSeekToTs] = useState(0);

  const onSelectPath = async (newPath: string) => {

    if(newPath.endsWith(".mp4")){
      updateVideoPath(newPath)
    } else {
      const res = await fetchDirectoryTree(newPath);

      // todo: add if() check if res is appropriate place to call fs on
      // this might be the source of an error in recursive searching (like crash when reaches .Trash)
      udpateDirTree(res);
    }
  }

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    onSelectPath(url)
  }

  return (
    <div className="App">

      <h1 className="text-4xl">File Explorer and Player</h1>

      <FileExplorer
        dirTree={dirTree}
        onSelectPath={(chosenPath: string) => onSelectPath(chosenPath)}
      />

      <FilePlayer
        videoPath={videoPath}
        seekToTs={seekToTs}
      />

      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-black"
          value={url}
          onChange={event => updateUrl(event.target.value)}
        />
        <input className="form-button" type="submit"/>
      </form>
      
      <input
          type="number"
          className="border-2 border-black"
          value={seekToTs}
          onChange={(event:any) => setSeekToTs(event.target.value)}
        />

    </div>
  )
}
