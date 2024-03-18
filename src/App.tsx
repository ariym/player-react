import { BrowserRouter, Routes, Route } from "react-router-dom";

import FilePlayerPage from './FilePlayerPage'
import CanvasPage from '@/_components/CanvasPage'
import QueryPlayer from '@/_components/QueryPlayer'
import TimelinePage from '@/Timeline/Timeline'
import StreamFFmpeg from '@/StreamFFmpeg'
// import TimelineEditorTest from '@/TimelineEditorTest'

const DEFAULT_VIDEO_PATH = import.meta.env.VITE_DEFAULT_VIDEO_PATH;
const DEFAULT_DIR_PATH = import.meta.env.VITE_DEFAULT_DIR_PATH;

let routes = {
  "/": <StreamFFmpeg />,
  "canvas": <CanvasPage videoPath={DEFAULT_VIDEO_PATH} />,
  "query-player": <QueryPlayer videoPath={DEFAULT_VIDEO_PATH} />,
  "file-player": <FilePlayerPage
    // todo: REPLACE these props with a in-route call to react-query
    defaultDirPath={DEFAULT_DIR_PATH}
    defaultVideoPath={DEFAULT_VIDEO_PATH}
  />,
}

export default function App() {
  return (
    <BrowserRouter basename="/">

      <Routes>

        {
          Object.entries(routes).map(

            ([key, value]) => <Route path={key} element={value} />

          )
        }

      </Routes>

    </BrowserRouter>
  );
}
