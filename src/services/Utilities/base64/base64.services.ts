export function filetoBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}

export function base64ToFile(dataurl: string, prefix: string): File {
  const arr = dataurl.split(",")
  const match = arr[0].match(/:(.*?);/)
  const mime = match ? match[1] : ""
  const extension = mime.split("/")[1] // Extract file extension from MIME type
  const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2, 5) // Generate a unique identifier
  const filename = `${prefix}_${uniqueId}`
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${extension}`, { type: mime })
}
