import { useEffect, useState } from 'react';
import { ChevronDownIcon, PlayIcon } from '@radix-ui/react-icons';
import { fetchDirectoryTree } from '@/api';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { TDir } from '@/types';

export type TFileExplorer = {
  onSelectVideo?: any,
  chosenPath?: string
};


// todo: merge all regex formatting stuff into api/get-directories on server 
// todo: add react-query
export default function FileExplorer({
  chosenPath = "/",
  onSelectVideo
}: TFileExplorer) {

  const [dirTree, udpateDirTree]: [any, any] = useState([]);
  const [TreeItems, setTreeItems] = useState([]);
  const [parentDir, setParentDir] = useState({ name: "none", location: "none", isDir: true });

  const [url, setUrl] = useState(chosenPath);

  const onEditPath = (event: any) => {
    // On edit path
    // -> Check if matches exact path
    // If TRUE setPath (triggers file explorer)
    setUrl(event.target.value);
  }
  

  const onSubmitPath = (newUrl: TDir) => {
    // locally select and display directory
    if(newUrl.isDir){
      fetchAndUpdateDirTree(newUrl.location)
    } else {
      onSelectVideo(newUrl.location);
    }

    // lastly, update url for <FilePathBar />
    setUrl(newUrl.location);
  }

  const fetchAndUpdateDirTree = async (pth: string) => {
    const res = await fetchDirectoryTree(pth);
    udpateDirTree(res);
  }


  // this is way too massive
  useEffect(() => {
    
    // create hashmap {path: TDir}


    // do we even need to be checking this?
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
  
      const items = dirTree.contents.map((item: TDir, i: number) => {
        
        let classNames = '';

        if(item.isDir) classNames += ' font-extrabold text-blue-700 underline'
        else classNames += ' font-normal text-blue-700'

        const iconStyles = 'mr-2 h-4 w-4';
        
        return <li key={"dirTree_" + i}><Button variant="link" className={classNames} onClick={() => onSubmitPath(item)}>{item.isDir ? <ChevronDownIcon className={iconStyles} /> : <PlayIcon className={iconStyles} />} {item.name}</Button></li>
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
        onClick={() => onSubmitPath(parentDir)}
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
