import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ApiManager from '../modules/ApiManager'
import './Profile.css'


export default function Profile(props) {

  const [user, setUser] = useState({ name: "", age: "", height: "", weight: "" })
  const [image, setImage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

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
    ApiManager.update({ ...user, url: file.url }, 'users').then(e => {
      setIsLoading(false)
      setIsUploading(true)
    })
    //file.url has link of profile pic
  }

  const handleLogout = () => {
    props.clearUser()
    props.history.push('/login')
  }

  useEffect(getUser, [])

  return (
    <div id="profileContainer">
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
          <img src={image} />
        )}

      {!isUploading ?
        < img src={user.url} />
        : null}
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Height: {user.height}</p>
      <p>Weight: {user.weight} lbs.</p>
      <Link to="/login" className="" onClick={handleLogout}>Logout</Link>
    </div>
  )
}
