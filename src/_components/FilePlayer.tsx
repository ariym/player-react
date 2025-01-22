import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '@/api'
import { useSearchParams } from 'react-router-dom'

// copied from UrlStreamPlayer

export default function FilePlayer() {
  const ref: any = useRef(null);
  const [URL, updateURL]: any = useState(null);
  
  const [URLParams, updateURLParams] = useSearchParams();
  const videoPath = URLParams.get("video");

  useEffect(()=>{

    if(!videoPath) return;

    let resourceURL = `${BASE_URL}/streamV2?videoPath=${encodeURI(videoPath)}`;

    updateURL(resourceURL);
  }, [videoPath]);

  return (
    <ReactPlayer
      url={URL ? URL : null}
      controls={true}
      ref={ref}
    />
  )
}
