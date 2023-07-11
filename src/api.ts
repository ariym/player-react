// const BASE_URL = "http://localhost:3000/"
// const BASE_URL = "http://192.168.1.22:3000/"; // fios 70th
const BASE_URL = "http://192.168.1.152:3000/"; // house

export async function getVideoData(videoPath: string): Promise<string[]> {
  return await fetch(`${BASE_URL}video-data?videoPath=${encodeURI(videoPath)}`, {
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

export async function streamVideoFile(videoPath: string) {
  return await fetch(`${BASE_URL}stream?videoPath=${encodeURI(videoPath)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'video/mp4',
      'Range': 'bytes=0-'
    }
  }).then(raw => {
    console.log("file returned", raw)
    return raw.body;
  })
  .catch(error => {
    throw error;
  })
}


export async function fetchDirectoryTree(dirPath: string): Promise<string[]> {
  return await fetch(`${BASE_URL}get-directories`, {
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