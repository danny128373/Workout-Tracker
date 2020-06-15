import React, { useEffect, useState } from 'react'
import ApiManager from '../modules/ApiManager'
import './Profile.css'

export default function Profile(props) {

  const [user, setUser] = useState({ name: "", age: "", height: "", weight: "" })
  const [image, setImage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const getUser = () => {
    const currentUser = JSON.parse(sessionStorage.getItem('credentials'))[0].id
    ApiManager.getUser(currentUser).then(user => {
      setUser(user)
    })
  }

  const uploadImage = async event => {
    const files = event.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'userImage')
    setIsLoading(true)
    const res = await fetch('https://api.cloudinary.com/v1_1/dp5l2gxzh/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setIsLoading(false)
  }

  useEffect(getUser, [])

  return (
    <div>
      <input
        id="file"
        type="file"
        name="file"
        placeholder="Upload Image"
        onChange={uploadImage}
      />
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
          <img alt="Profile" src={image} />
        )}
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Height: {user.height}</p>
      <p>Weight: {user.weight} lbs.</p>
    </div>
  )
}
