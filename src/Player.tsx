import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

import './App.css'
import { BASE_URL } from './api'

export default function Player({ url, seekToTs }: { url: any, seekToTs: any }) {
  const ref:any = useRef(null);

  const reactPlayerConfig = {
    // file: {
    // tracks: [
    // { kind: 'subtitles', src: 'subs/subtitles.en.vtt', srcLang: 'en', default: true },
    // { kind: 'subtitles', src: 'subs/subtitles.ja.vtt', srcLang: 'ja' },
    // { kind: 'subtitles', src: 'subs/subtitles.de.vtt', srcLang: 'de' }
    // ]
    // }
  }

  useEffect(() => {
    ref.current.seekTo(seekToTs)
  }, [seekToTs]);


  return (
    <ReactPlayer
      url={`${BASE_URL}/streamV2?videoPath=${encodeURI(url)}`}
      config={reactPlayerConfig}
      controls={true}
      ref={ref}
    />
  )
}
