import { useEffect, useState } from 'react'
type TFileBrowser = { dirTree: any, onSelectPath: any }


export default function FileBrowser({ dirTree, onSelectPath }: TFileBrowser) {

  const [TreeItems, setTreeItems] = useState([])
  const [parentDir, setParentDir] = useState({ name: "none", location: "none" });


  useEffect(() => {

    if(typeof dirTree.location === "string"){

      // remove everything BEFORE final slash in string /path/to/something -> /path/to
      const regexBegin = /^(.*[\\\/])/
      let parentDirPath: any = regexBegin.exec(dirTree.location);
      parentDirPath = parentDirPath[0]
      parentDirPath = parentDirPath.replace(/\/$/, ''); // strip trailing slash
      console.log(parentDirPath)
  
      // remove everything AFTER final slash
      const regexAfter = /\/([^\/]*)$/
      const match = regexAfter.exec(parentDirPath);
      const parentDirName = match ? match[0] : '';

      const newParentDir = {
        name: parentDirName,
        location: parentDirPath
      }
      console.log("new parent dir",newParentDir)
      setParentDir(newParentDir)
    }


    if (dirTree.contents && dirTree.contents.length > 0) {

      const items = dirTree.contents.map((item: any, i: number) => {
        return <li key={i}><a onClick={() => onSelectPath(item.location)}>{item.name}</a></li>
      });

      setTreeItems(items);
    }

  }, [dirTree]);

  // TRY SHADCN
  // https://ui.shadcn.com/docs/components/button

  return (
    <div>
      {/* replace button below with a breadcrumb */}
      <button
        type="button"
        className="rounded"
        onClick={() => onSelectPath(parentDir.location)}
      >Up Directory: <span>{parentDir.name}</span></button>
      <ul>
        {TreeItems}
      </ul>
    </div>
  )
}
