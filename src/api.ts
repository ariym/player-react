export const BASE_URL = import.meta.env.VITE_BASE_API_URL

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

export async function streamVideoFile(videoPath: string) {
  return await fetch(`${BASE_URL}/streamV2?videoPath=${encodeURI(videoPath)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'video/mp4',
      'Range': 'bytes=0-'
    }
  }).then(raw => {return raw.body})
  .catch(error => {throw error})
}

export async function streamVideoFileV3(videoPath: string) {
  return await fetch(`${BASE_URL}/streamV3?videoPath=${encodeURI(videoPath)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'video/mp4',
      'Range': 'bytes=0-'
    }
  }).then(raw => {return raw.body})
  .catch(error => {throw error})
}

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