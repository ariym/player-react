import { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { ChevronDownIcon, PlayIcon } from '@radix-ui/react-icons';
import { fetchDirectoryTree } from '@/api';
import { Input } from './_components/ui/input';
import { TDir } from '@/types';

// todo: add react-query
export default function FileExplorer() {

  const [URLParams, updateURLParams] = useSearchParams();
  const folderPath = URLParams.get("folder");

  const navigate = useNavigate();

  const [TreeItems, setTreeItems] = useState([]);
  const [dirPath, setDirPath] = useState("/Users/ari/Movies");

  // const navToFolder = (pth: string) => navigate("?folder=" + encodeURI(pth));
  const navToFolder = (pth: string) => {

    updateURLParams({folder: pth});
    
  }

  const fetchAndUpdateDirTree = async () => {
    const dirTree: any = await fetchDirectoryTree(dirPath);

    const items = dirTree.contents.map((item: TDir, i: number) => {

      let classNames = 'flex flex-row';

      if (item.isDir) classNames += ' font-extrabold text-blue-700 underline '
      else classNames += ' font-normal text-blue-700'

      const iconStyles = 'mr-2 h-4 w-4';

      const VidLink = () => (
        <Link
          className={classNames}
          to={'/file-player?video=' + encodeURI(item.location)}
        ><PlayIcon className={iconStyles} /> {item.name}</Link>
      );

      const DirLink = () => (
        <Link
          className={classNames}
          to={"?folder=" + encodeURI(item.location)}
        ><ChevronDownIcon className={iconStyles} /> {item.name}</Link>
      )

      return (
        <li key={"dt_" + i}>{item.isDir ? <DirLink /> : <VidLink />}</li>
      )
    });

    setTreeItems(items);
  }

  const onSubmitPath = () => {
    // fetchAndUpdateDirTree();
    // navigate to the new URL param to trigger page reload
    navToFolder(dirPath)
  }

  useEffect(() => {
    console.log("typeof",typeof folderPath,folderPath)
    if (typeof folderPath === 'string') {
      setDirPath(folderPath);
    }
  }, [folderPath]);

  // fetch the directory contents when page loads
  useEffect(() => {
    fetchAndUpdateDirTree();
  }, [location]);

  return (
    <div>

      <FilePathBar
        onEditPath={(event: any) => setDirPath(event.target.value)}
        onSubmitPath={onSubmitPath}
        val={dirPath}
      />

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
);
