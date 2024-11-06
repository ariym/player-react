import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '@/HomePage'
import FolderPage from '@/FolderPage'
import UrlStreamPlayer from "@/_components/UrlStreamPlayer";
import YouTubeTestPlayer from "@/_components/YouTubeTestPlayer";

let routes = {
  "/": <HomePage />,
  "folder": <FolderPage />,
  "file-player": <UrlStreamPlayer />,
  "youtube-test": <YouTubeTestPlayer />
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
