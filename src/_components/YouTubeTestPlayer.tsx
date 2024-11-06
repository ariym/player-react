import { useRef, useEffect } from 'react'
import YouTubePlayer from 'react-player/youtube';

// THIS PAGE IS TESTING IF POSSIBLE TO OVERLAY CANVAS ON YOUTUBE VIDEO
// verdict: success
// test if possible to disable YouTube buttons and control pause/play with JS

// todo: Investigate why canvas position, pointerEvents style properties cause TS error but still work.


export default function YouTubeTestPlayer() {
  const playerRef: any = useRef(null);

  // canvas things
  const canvasRef = useRef(null)

  const draw = (ctx: any) => {
    ctx.fillStyle = '#0555'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2 * Math.PI)
    ctx.fill()
  }

  useEffect(() => {

    const canvas: any = canvasRef.current
    const context = canvas.getContext('2d')

    //Our draw come here
    draw(context);
  }, [draw])


  return (
    <>
      <YouTubePlayer
        url="https://www.youtube.com/watch?v=5ZhNmKb-dqk"
        controls={false}
        ref={playerRef}
        style={{ position: 'absolute' }}
      />
      <canvas
        style={styles}
        ref={canvasRef}
      ></canvas>
    </>
  )
}

const styles = {
  backgroundColor: 'transparent',
  position: 'absolute',
  pointerEvents: 'none'
}
