import {
  useEffect,
  useState,
  useContext,
  createContext,
  useReducer
} from 'react';

const VIDEO_PATH = import.meta.env.VITE_VIDEO;

export const TimelineContext = createContext({
  pos: 0,
  videoPath: null, // todo: replace with videoId
  thumbnails: [],
});

type Timeline = {
  videoPath: string,
  pos?: number, // timestamp in seconds
}


// TimelinePage is a thin wrapper around timeline with some buttons that would
// ...normally be included on the page using it
// this component is just for developing the <Timeline /> component family
export default function TimelinePage({ videoPath, pos }: Timeline) {


  return (
    <div className="border-2 border-solid h-80">
      <Timeline videoPath={VIDEO_PATH} />
    </div>
  )
}

function Timeline({ videoPath, pos }: Timeline) {
  return (
    <p>I know there must be something better.</p>
  )
}

function Playhead(){
  return(
    <p>ji</p>
  );
}