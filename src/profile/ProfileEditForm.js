import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import ApiManager from '../modules/ApiManager'


export default function ProfileEditForm(props) {

  const [profile, setProfile] = useState({ name: "", weight: "", height: "" })

  const handleFieldChange = evt => {
    const stateToChange = { ...profile }
    stateToChange[evt.target.id] = evt.target.value;
    setProfile(stateToChange)
  }

  const getProfile = () => {
    ApiManager.get('users', JSON.parse(sessionStorage.getItem('credentials'))[0].id).then(profile => {
      setProfile(profile)
    })
  }

  const updateProfile = () => {
    const stateToPost = {
      ...profile
    }
    ApiManager.update(stateToPost, 'users').then(e => {
      props.history.push("/profile")
    })
  }

  useEffect(getProfile, [])

  return (
    <div id="profileEdit">
      <form>
        <fieldset>
          <label>Name:</label>
          <input id="name" onChange={handleFieldChange} type="text" value={profile.name} />
        </fieldset>
        <fieldset>
          <label>Height:</label>
          <input id="height" onChange={handleFieldChange} type="text" value={profile.height} />
        </fieldset>
        <fieldset>
          <label>Weight:</label>
          <input id="weight" onChange={handleFieldChange} type="text" value={profile.weight} />
        </fieldset>
        <Link><Button id="profileEditSubmitButton" onClick={updateProfile}>Submit Changes</Button></Link>
      </form>
    </div>
  )
}
