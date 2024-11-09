export const BASE_URL = import.meta.env.VITE_BASE_API_URL

// unused
export async function getVideoData(videoPath: string): Promise<string[]> {
  return await fetch(`${BASE_URL}/video-data?videoPath=${encodeURI(videoPath)}`, {
    method: 'GET'
  }).then(raw => raw.json())
  .then(res => {
    console.log("res", res)
    return res.transcript;
  })
  .catch(error => {
    throw error;
  })
}

// unused
export async function fetchDirectoryTree(dirPath: string): Promise<string[]> {
  return await fetch(`${BASE_URL}/get-directories`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({dirPath})
  }).then(raw => raw.json())
  .then(res => {
    return res;
  })
  .catch(error => {
    throw error;
  })
}
