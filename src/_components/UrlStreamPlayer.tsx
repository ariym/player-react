import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '@/api'
import { useSearchParams } from 'react-router-dom'

const MSG = "video url param not set!";

export default function UrlStreamPlayer() {
  const ref: any = useRef(null);
  const [URL, updateURL]: any = useState(null);
  
  const [URLParams, updateURLParams] = useSearchParams();
  const videoPath = URLParams.get("video");

  // keep state up-to-date with url param
  useEffect(()=>{

    if(!videoPath) return;

    let resourceURL = `${BASE_URL}/stream-local-file?videoPath=${encodeURI(videoPath)}`;

    updateURL(resourceURL);
  }, [videoPath]);
  
  return (
    <>
    {!URL ? <ErrorMessage msg={MSG} /> : null}
    <ReactPlayer
      url={URL}
      controls={true}
      ref={ref}
      onError={event => alert(event.type + ". not able to play.")}
    />
    </>
  )
}

const ErrorMessage = ({msg}: {msg: string}) => <p>{msg}</p>;
