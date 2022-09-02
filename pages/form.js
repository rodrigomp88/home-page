import { useState } from 'react'
import { uploadBytesResumable } from 'firebase/storage'
import { storage } from '../config/firebase'
import { ref, getDownloadURL } from 'firebase/storage'

function FormPage() {
  const [progressPercent, setProgressPercent] = useState(0)
  const uploadTask = uploadBytesResumable(storageRef, file)

  // Pause the upload
  uploadTask.pause()

  // Resume the upload
  uploadTask.resume()

  // Cancel the upload
  uploadTask.cancel()

  const handleSubmit = async e => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return null
    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgressPercent(progress)
      },
      error => {
        alert(error)
      },
      () => {
        e.target[0].value = ''
        getDownloadURL(storageRef).then(downloadURL => {
          console.log(downloadURL)
        })
      }
    )
  }

  return (
    <div className="app" name="upload_file">
      <form className="app__form" onSubmit={handleSubmit}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
      <progress value={progressPercent} max="100" />
    </div>
  )
}
export default FormPage
