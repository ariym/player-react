import { BrowserRouter, Routes, Route } from "react-router-dom";

import FilePlayer from "@/_components/FilePlayer";
import ClipPlayer from "@/_components/ClipPlayer";

const routes = {
  "/": <p>choose a route</p>,
  "/file-player": <FilePlayer />,
  "/clip-player": <ClipPlayer />,
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
