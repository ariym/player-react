import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input } from '@/_components/ui/input'
import FileExplorer from '@/_components/FileExplorer'
import FilePlayer from '@/_components/FilePlayer'
import BookmarkBar from '@/_components/BookmarkBar'

// COPIED from StreamFFmpeg

export type FilePlayerPage = {
  defaultDirPath?: string
  defaultVideoPath?: string
};

export default function FilePlayerPage({ defaultDirPath = "/", defaultVideoPath }: FilePlayerPage) {

  const [videoPath, updateVideoPath] = useState(defaultVideoPath);
  const [seekToTs, setSeekToTs] = useState(0);
  const [url, updateUrl] = useState(defaultDirPath);
  const [urlParams, setUrlParams]: any = useSearchParams()

  const onSelectPath = async (newPath: string) => {
    // updates URL param
    setUrlParams({ url: newPath });

    // video PLAYER link
    updateVideoPath(newPath);
  }


  useEffect(() => {
    const urlParam = urlParams.get('url');
    // load player on first page load
    updateVideoPath(urlParam);
    // move fileexplorer
    updateUrl(urlParam);
  }, [urlParams]);


  return (
    <div className='flex justify-center '>
      <div className="max-w-xl">

        <h1 className="text-4xl">File Explorer & Player</h1>

        <FilePlayer
          videoPath={videoPath}
          seekToTs={seekToTs}
        />

        <Input
          className='mt-5'
          type="number"
          value={seekToTs}
          onChange={(event: any) => setSeekToTs(event.target.value)}
        />

        <FileExplorer
          onSelectVideo={(chosenPath: string) => onSelectPath(chosenPath)}
          chosenPath={url}
        />
      </div>
    </div>
  )
}
