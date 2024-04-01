import React from "react"
import { Button } from "@/_components/ui/button"

type BookmarkBar = {
  video: {
    timestamp: string
  }
}

export default function BookmarkBar ({
  video
}: BookmarkBar){
return(
  <div className="flex flex-row">
    <BookmarkButton>Save point {video.timestamp}</BookmarkButton>
  </div>
)
}

const BookmarkButton:any  = ({children}:any) => (
  <Button>
    {...children}
  </Button>
)