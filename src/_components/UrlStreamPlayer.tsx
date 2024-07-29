import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '@/api'
import { useSearchParams } from 'react-router-dom'

type UrlStreamPlayer = { 
  // videoPath?: string,
  // seekToTs?: number
}

export default function UrlStreamPlayer({}: UrlStreamPlayer) {
  const ref: any = useRef(null);
  const [URL, updateURL]: any = useState(null);
  
  const [URLParams, updateURLParams] = useSearchParams();
  const videoPath = URLParams.get("videoID");

  useEffect(()=>{

    if(!videoPath) return;

    let resourceURL = `${BASE_URL}/streamV2?videoPath=${encodeURI(videoPath)}`;

    updateURL(resourceURL);
  }, [videoPath]);

  return (
    <ReactPlayer
      // className="py-2"
      url={URL ? URL : null}
      // config={reactPlayerConfig}
      controls={true}
      ref={ref}
    />
  )
}
