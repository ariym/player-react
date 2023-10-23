import { BrowserRouter, Routes, Route } from "react-router-dom";

import BrowserPage from './BrowserPage'
import CanvasPage from './Experiments/CanvasPage'

const videoPath = "/Users/ari/Desktop/oClip/council_2023-03-23/VIDEO/NYCC-PV-250-14_230323-103916.mp4"

export default function App() {
  return (
    <BrowserRouter basename="/">

      <Routes>

        <Route path="/" element={<BrowserPage/>} />
        
        <Route path="/canvas" element={<CanvasPage videoPath={videoPath} />}  />

      </Routes>

    </BrowserRouter>
  );
}
