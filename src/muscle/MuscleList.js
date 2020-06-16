import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import './Muscle.css'

export default function MuscleList() {
  return (
    <>
      <Container>
        <Row>
          <Col><Link to="/abs"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/Abs_brpcfd.png" /></Link></Col>
          <Col><Link to="/back"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/back_q4ic4h.png" /></Link></Col>
          <Col><Link to="/biceps"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/biceps_uedb03.png" /></Link></Col>
        </Row>
        <Row>
          <Col><Link to="/calves"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/calves_crdrkl.png" /></Link></Col>
          <Col><Link to="/cardio"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/cardio_r0x2v8.png" /></Link></Col>
          <Col><Link to="/chest"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925316/chest_ueilnx.png" /></Link></Col>
        </Row>
        <Row>
          <Col><Link to="/forearms"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/forearms_d2wdpk.png" /></Link></Col>
          <Col><Link to="/glutes"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/glutes_gspifl.png" /></Link></Col>
          <Col><Link to="/shoulders"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/shoulders_a1azvp.png" /></Link></Col>
        </Row>
        <Row>
          <Col><Link to="/triceps"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/triceps_fxbdhh.png" /></Link></Col>
          <Col><Link to="/upperLegs"><img className="upperlegs" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1591925317/upperlegs_dsrgvc.png" /></Link></Col>
        </Row>
      </Container>
    </>
  )
}
