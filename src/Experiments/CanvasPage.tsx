import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '../api'

export default function Player({ videoPath }: { videoPath: any }) {
  const [url, setUrl]: [any, any] = useState(null);

  useEffect(() => {
    setUrl(`${BASE_URL}/stream?videoPath=${encodeURI(videoPath)}`)
    console.log("CanvasPlayer Updated URL passed to ReactPlayer")
  }, [videoPath])

  return (
    <>
      <ReactPlayer playing={true} controls={true} url={url} muted={true} />

      <canvas style={styles.canvas}></canvas>

    </>
  )
}

const styles:any = {
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: "rgba(255, 0, 0, 0.5)"
  }
}
