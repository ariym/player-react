import { BrowserRouter, Routes, Route } from "react-router-dom";

import FilePlayerPage from './FilePlayerPage'
import CanvasPage from '@/_components/CanvasPage'
import QueryPlayer from '@/_components/QueryPlayer'
import TimelinePage from '@/Timeline/Timeline'
// import TimelineEditorTest from '@/TimelineEditorTest'

const DEFAULT_VIDEO_PATH = import.meta.env.VITE_DEFAULT_VIDEO_PATH;
const DEFAULT_DIR_PATH = import.meta.env.VITE_DEFAULT_DIR_PATH;

export default function App() {
  return (
    <BrowserRouter basename="/">

      <Routes>

        <Route path="/" element={<FilePlayerPage 
          // todo: REPLACE these props with a in-route call to react-query
          defaultDirPath={DEFAULT_DIR_PATH}
          defaultVideoPath={DEFAULT_VIDEO_PATH}
        />} />
        
        <Route path="/canvas" element={<CanvasPage videoPath={DEFAULT_VIDEO_PATH} />}  />

        <Route path="timeline" element={<TimelinePage videoPath={DEFAULT_VIDEO_PATH} />} />

        <Route path="query-player" element={<QueryPlayer videoPath={DEFAULT_VIDEO_PATH} />} />

        {/* <Route path="timeline-editor" element={<TimelineEditorTest />} /> */}

      </Routes>

    </BrowserRouter>
  );
}
