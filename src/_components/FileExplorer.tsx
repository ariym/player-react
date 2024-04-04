import { useEffect, useState } from 'react'
import { Input } from './ui/input';
import { Button } from '@/_components/ui/button'
import { ChevronDownIcon, PlayIcon } from '@radix-ui/react-icons'
import { fetchDirectoryTree } from '@/api';

export type TFileExplorer = {
  onSelect?: any,
  onSelectVideo?: any,
  chosenPath?: string
};

// todo: fix confusing naming between
// onSelect
// onSelectPath
// onSubmitPath

// todo: merge all regex formatting stuff into api/get-directories on server 
// todo: add react-query
export default function FileExplorer({
  onSelect,
  chosenPath = "/",
  onSelectVideo
}: TFileExplorer) {

  const [dirTree, udpateDirTree]: [any, any] = useState([]);
  const [TreeItems, setTreeItems] = useState([]);
  const [parentDir, setParentDir] = useState({ name: "none", location: "none" });

  const [url, setUrl] = useState(chosenPath);

  const onEditPath = (event: any) => {
    // On edit path
    // -> Check if matches exact path
    // If TRUE setPath (triggers file explorer)
    setUrl(event.target.value);
  }

  useEffect(() => {
    onSubmitPath(chosenPath)
  }, [chosenPath]);
  
  // clicking a dirTree click
  const onSubmitPath = (newUrl: string) => {
    // locally select and display directory
    onSelectPath(newUrl);
    // parent select to play video
    onSelect ? onSelect(newUrl) : console.log("no onSelect prop for FileExplorer");
    // update url for <FilePathBar />
    setUrl(newUrl);
  }

  // differ between user looking at video or subfolder
  const onSelectPath = async (newPath: string) => {
    // TODO: THIS IF STATEMENT IS NOT USEFUL REPLACE OR REMOVE!!!!!!
    if (!newPath.endsWith(".mp4")) {
      const res = await fetchDirectoryTree(newPath);

      // todo: add if() check if res is appropriate place to call fs on
      // this might be the source of an error in recursive searching (like crash when reaches .Trash)
      udpateDirTree(res);
      console.log("it's a dir path", newPath);
    } else {
      console.log("it's a video", newPath);
      onSelectVideo(newPath);
    }
  }

  useEffect(() => {

    if (typeof dirTree.location === "string") {

      // remove everything BEFORE final slash in string /path/to/something -> /path/to
      const regexBegin = /^(.*[\\\/])/
      let parentDirPath: any = regexBegin.exec(dirTree.location);
      parentDirPath = parentDirPath[0]
      parentDirPath = parentDirPath.replace(/\/$/, ''); // strip trailing slash

      // remove everything AFTER final slash
      const regexAfter = /\/([^\/]*)$/
      const match = regexAfter.exec(parentDirPath);
      const parentDirName = match ? match[0] : '';

      const newParentDir = {
        name: parentDirName,
        location: parentDirPath
      }

      setParentDir(newParentDir)
    }


    if (dirTree.contents && dirTree.contents.length > 0) {
  
      const items = dirTree.contents.map((item: any, i: number) => {
        
        let classNames = '';

        if(item.isDir) classNames += ' font-extrabold text-blue-700 underline'
        else classNames += ' font-normal text-blue-700'

        const iconStyles = 'mr-2 h-4 w-4';
        
        return <li key={"dirTree_" + i}><Button variant="link" className={classNames} onClick={() => onSubmitPath(item.location)}>{item.isDir ? <ChevronDownIcon className={iconStyles} /> : <PlayIcon className={iconStyles} />} {item.name}</Button></li>
      });

      setTreeItems(items);
    }

  }, [dirTree]);

  return (
    <div>

      <FilePathBar
        onEditPath={onEditPath}
        onSubmitPath={onSubmitPath}
        val={url}
      />

      {/* replace button below with a breadcrumb */}
      <Button
        variant="link"
        className="align-center my-1 font-extrabold"
        onClick={() => onSubmitPath(parentDir.location)}
      >Up Directory: {parentDir.name}</Button>

      <ul>{TreeItems}</ul>

    </div>
  )
}

const FilePathBar = ({ onEditPath, onSubmitPath, val }: any) => (
  <Input
    className='my-2'
    onChange={onEditPath}
    onKeyDown={(event: any) => event.key === 'Enter' ? onSubmitPath(val) : null}
    value={val}
  />
)
