import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { BASE_URL } from '../api'
import { Textarea } from "@/_components/ui/textarea"
import { MentionsInput, Mention } from 'react-mentions'

const users = [
  {
    id: 'walter',
    display: 'Walter White',
  },
  {
    id: 'pipilu',
    display: '皮皮鲁',
  },
  {
    id: 'luxixi',
    display: '鲁西西',
  },
  {
    id: 'satoshi1',
    display: '中本聪',
  },
  {
    id: 'satoshi2',
    display: 'サトシ・ナカモト',
  },
  {
    id: 'nobi',
    display: '野比のび太',
  },
  {
    id: 'sung',
    display: '성덕선',
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
  },
  {
    id: 'saul',
    display: 'Saul Goodman',
  },
  {
    id: 'hank',
    display: 'Hank Schrader',
  },
  {
    id: 'skyler',
    display: 'Skyler White',
  },
  {
    id: 'mike',
    display: 'Mike Ehrmantraut',
  },
  {
    id: 'lydia',
    display: 'Lydìã Rôdarté-Qüayle',
  },
]

export default function QueryPlayer({ videoPath }: { videoPath: any }) {
  const [url, setUrl]: [any, any] = useState(null);
  const [value, setValue]: [any, any] = useState("");

  useEffect(() => {
    setUrl(`${BASE_URL}/streamV2?videoPath=${encodeURI(videoPath)}`)
  }, [videoPath]);

  return (
    <>
      <ReactPlayer
        playing={true}
        controls={true}
        url={url}
        muted={true}
      />
      <Textarea placeholder="Type your message here." />

      <MentionsInput
        value={value}
        onChange={(ev:any, newValue:string) => setValue(newValue)}
        // style={defaultStyle}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
        allowSuggestionsAboveCursor={true}
        // customSuggestionsContainer={(children)=><div><span style={{fontWeight: "bold"}}><h2>This container has customised suggestions</h2></span>{children}</div>}
      >
        <Mention
          trigger="!"
          data={users} 
          // onAdd={(...args) => console.log('added a new mention', ...args)}
          // style={defaultMentionStyle}
        />
      </MentionsInput>
    </>
  )
}
