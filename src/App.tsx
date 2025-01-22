import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClipPlayer from "@/_components/ClipPlayer";
import HlsPlayer from "./_components/HlsPlayer";

let routes = {
  "/": <p>choose a route</p>,
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
