import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import { streamVideoFile } from './api'
import './App.css'


export default function Player({ url }: { url: any }) {

  const [dirTree, udpateDirTree]: [any, any] = useState([]);

  const reactPlayerConfig = {
    // file: {
      // tracks: [
        // { kind: 'subtitles', src: 'subs/subtitles.en.vtt', srcLang: 'en', default: true },
        // { kind: 'subtitles', src: 'subs/subtitles.ja.vtt', srcLang: 'ja' },
        // { kind: 'subtitles', src: 'subs/subtitles.de.vtt', srcLang: 'de' }
      // ]
    // }
  }

  return (
    <div className="App">

      <canvas className="border-black border-2">
        <ReactPlayer
          url={url}
          config={reactPlayerConfig}
        />
      </canvas>

    </div>
  )
}
