import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '@/api'
import { useSearchParams } from 'react-router-dom'

const MSG = "video url param not set!";

export default function ClipPlayer() {
  const ref: any = useRef(null);
  const [URL, updateURL]: any = useState(null);
  
  const [URLParams, updateURLParams] = useSearchParams();
  const videoPath = URLParams.get("video");
  const start = URLParams.get("start");
  const duration = URLParams.get("duration");

  // keep state up-to-date with url param
  useEffect(()=>{

    if(!videoPath || !start || !duration) return;

    let resourceURL = 
    `${BASE_URL}/stream-local-clip?videoPath=${encodeURI(videoPath)}&start=${start}&duration=${duration}`;

    updateURL(resourceURL);
  }, [videoPath]);
  
  return (
    <>
    {!URL ? <ErrorMessage msg={MSG} /> : null}
    <ReactPlayer
      url={URL}
      controls={true}
      ref={ref}
      onError={event => {
        console.log(event)
        // alert(event.type + ". not able to play.")
      }}
    />
    </>
  )
}

const ErrorMessage = ({msg}: {msg: string}) => <p>{msg}</p>;
