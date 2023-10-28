import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '@/api'

type FilePlayer = { 
  videoPath?: string,
  seekToTs?: number
}

export default function FilePlayer({ videoPath, seekToTs }: FilePlayer) {

  const ref: any = useRef(null);

  const [resourceURL, updateResourceURL]: any = useState(null);
  const [URL, updateURLParams]: any = useState(null)

  useEffect(() => {
    if(videoPath){
      console.log("updateResourceURL")
      // updateResourceURL(`${BASE_URL}/video-ffmpeg/bus.mp4`)
      updateResourceURL(`${BASE_URL}/streamV2?${encodeURI(videoPath)}`);
    }
  }, [videoPath])

  // seeking - LOCAL
  useEffect(() => {
    if(Number(seekToTs) < 0){
      ref.current.seekTo(seekToTs)
    }
  }, [seekToTs]);

  useEffect(()=>{
    if(videoPath && Number(seekToTs) < 0) {
      console.log("updateURLParams")
      // seeking - SERVER clip loading

      updateURLParams(`${resourceURL}&start=${seekToTs}`);
    } else if(videoPath){

      updateURLParams()

    }
  }, [videoPath, seekToTs]);

  // if(!URL) return null;
  return (
    <div className="border">

    <ReactPlayer
      url={URL ? URL : null}
      // config={reactPlayerConfig}
      controls={true}
      ref={ref}
    />
    </div>
  )
}
