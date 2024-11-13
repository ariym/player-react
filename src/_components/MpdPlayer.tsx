import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { BASE_URL } from '@/api';

export default function MpdPlayer() {
  const ref: any = useRef(null);
  
  return (
    <>
    <ReactPlayer
      // todo: check if URL ending in '.mpd' triggers DASH player
      url={`${BASE_URL}/file.mpd`}
      controls={true}
      ref={ref}
      config={{
        file:{
          // forceDASH: true
        }
      }}
      onError={event => {
        console.log("Error event");
        console.log(event)
      }}
    />
    </>
  )
}
