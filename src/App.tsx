import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlStreamPlayer from "@/_components/UrlStreamPlayer";
import ClipPlayer from "@/_components/ClipPlayer";
import MpdPlayer from "./_components/MpdPlayer";
import HlsPlayer from "./_components/HlsPlayer";

let routes = {
  "/": <UrlStreamPlayer />,
  "/file-player": <UrlStreamPlayer />,
  "/clip-player": <ClipPlayer />,
  "/hls": <HlsPlayer />,
}

export default function App() {
  return (

    <BrowserRouter basename="/">
      <Routes>
        {
          Object.entries(routes).map(

            ([key, value]) => <Route path={key} element={value} key={"route_" + key} />

          )
        }
      </Routes>
    </BrowserRouter>

  );
}
