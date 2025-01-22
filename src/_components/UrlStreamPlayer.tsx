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
  useEffect(() => {

    if (!videoPath) return;

    let resourceURL = `${BASE_URL}/stream-local-file?videoPath=${encodeURI(videoPath)}`;

    updateURL(resourceURL);
  }, [videoPath]);

  return (
    <div style={styles.playerWrapper}>
      {!URL ? <ErrorMessage msg={MSG} /> : null}
      <ReactPlayer
        url={URL}
        controls={true}
        ref={ref}
        onError={event => alert(event.type + ". not able to play.")}
        width='100%'
        height='100%'
      />
    </div>
  )
}

const ErrorMessage = ({ msg }: { msg: string }) => <p>{msg}</p>;

// this is supposed to create a "responsive player height"
const styles: any = {
  playerWrapper: {
    position: 'relative',
    // paddingTop: '56.25%', // Player ratio: 100 / (1280 / 720
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}
