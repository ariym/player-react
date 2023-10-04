import { useState } from 'react'
import Player from './BrowserPlayer'
// import Player from './CanvasPlayer'

const videoPath = "/Users/ari/Desktop/oClip/council_2023-03-23/VIDEO/NYCC-PV-250-14_230323-103916.mp4"

export default function App() {

  return (
    <div className="App">

      <h1 className="text-2xl">Player</h1>

      <Player />
      {/* <Player videoPath={videoPath} /> */}

    </div>
  )
}
