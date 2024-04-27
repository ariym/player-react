import { Link } from "react-router-dom";

const AppHeader = () => (
  <header className="flex flex-row justify-between align-text-bottom">
    <h1 className="text-4xl">File Explorer & Player</h1>
    <span className='flex justify-between align-text-bottom'>
      <Link to="/file-player">File Player</Link>
      <Link to="/">FFmpeg Stream</Link>
    </span>
  </header>
);

export default AppHeader;