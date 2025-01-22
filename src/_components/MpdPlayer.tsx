import { useRef } from 'react';
import ReactPlayer from 'react-player/file';
import { BASE_URL } from '@/api';

// todo: rename this to m3u8 player

export default function MpdPlayer() {
  const ref: any = useRef(null);
  
  return (
    <>
    <ReactPlayer
      // todo: check if URL ending in '.mpd' triggers DASH player
      url={`${BASE_URL}/playlist.m3u8`}
      controls={true}
      ref={ref}
      onError={console.log}
      config={{ forceHLS: true }}/>
    </>
  )
}
