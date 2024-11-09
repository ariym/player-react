import { useRef } from 'react'
import ReactPlayer from 'react-player'

type MdpPlayer = {
  // videoPath?: string,
  // seekToTs?: number
}

if(this.whatWeWanted_ToDoa)

export default function MdpPlayer({ }: MdpPlayer) {
  const playerRef: any = useRef(null);

  return (
    <ReactPlayer
        // config={reactPlayerConfig}
        controls={false}
        ref={playerRef}
        style={{position: 'absolute'}}
      />
  )
}
