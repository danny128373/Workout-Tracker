import React from 'react'
import { Link } from 'react-router-dom'

export default function MuscleList() {
  return (
    <>
      <ul>
        <li><Link to="/abs"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/Abs_brpcfd.png" /></Link></li>
        <li><Link to="/back"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/back_q4ic4h.png" /></Link></li>
        <li><Link to="/biceps"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/biceps_uedb03.png" /></Link></li>
        <li><Link to="/calves"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/calves_crdrkl.png" /></Link></li>
        <li><Link to="/cardio"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/cardio_r0x2v8.png" /></Link></li>
        <li><Link to="/chest"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/chest_ueilnx.png" /></Link></li>
        <li><Link to="/forearms"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/forearms_d2wdpk.png" /></Link></li>
        <li><Link to="/glutes"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/glutes_gspifl.png" /></Link></li>
        <li><Link to="/shoulders"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/shoulders_a1azvp.png" /></Link></li>
        <li><Link to="/triceps"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/triceps_fxbdhh.png" /></Link></li>
        <li><Link to="/upperLegs"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/upperlegs_dsrgvc.png" /></Link></li>
      </ul>
    </>
  )
}
