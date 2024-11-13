import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrlStreamPlayer from "@/_components/UrlStreamPlayer";
import MpdPlayer from "./_components/MpdPlayer";

let routes = {
  // "/": <UrlStreamPlayer />,
  "/": <MpdPlayer />,
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
