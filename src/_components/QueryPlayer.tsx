import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '../api'
import { Textarea } from "@/_components/ui/textarea"

export default function QueryPlayer({ videoPath }: { videoPath: any }) {
  const [url, setUrl]: [any, any] = useState(null);

  useEffect(() => {
    setUrl(`${BASE_URL}/streamV2?videoPath=${encodeURI(videoPath)}`)
}, [videoPath]);

  return (
    <>
      <ReactPlayer playing={true} controls={true} url={url} muted={true} />
      <Textarea placeholder="Type your message here." />
    </>
  )
}
