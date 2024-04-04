import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '@/api'

type FilePlayer = { 
  videoPath?: string,
  seekToTs?: number
}

export default function FilePlayer({ videoPath, seekToTs }: FilePlayer) {
  const ref: any = useRef(null);
  const [URL, updateURLParams]: any = useState(null);

  // seeking - LOCAL
  useEffect(() => {
    if(Number(seekToTs) < 0){
      ref.current.seekTo(seekToTs)
    }
  }, [seekToTs]);

  useEffect(()=>{

    if(!videoPath) return;

    let resourceURL = `${BASE_URL}/streamV2?videoPath=${encodeURI(videoPath)}`;

    if(Number(seekToTs) < 0) resourceURL += `&start=${seekToTs}`;

    updateURLParams(resourceURL);
  }, [videoPath, seekToTs]);

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
