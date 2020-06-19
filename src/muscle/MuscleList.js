import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import './Muscle.css'

export default function MuscleList() {
  return (
    <>
      <Container>
        <Row>
          <Col><Link to="/abs"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419745/5_1_mv0btc.png" /></Link></Col>
          <Col><Link to="/back"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419807/7_1_ufkqpo.png" /></Link></Col>
          <Col><Link to="/biceps"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419705/1_1_xeo4jy.png" /></Link></Col>
        </Row>
        <Row>
          <Col><Link to="/calves"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419736/4_1_omygmr.png" /></Link></Col>
          <Col><Link to="/cardio"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419814/8_1_yjnt06.png" /></Link></Col>
          <Col><Link to="/chest"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419799/6_1_m9hl0v.png" /></Link></Col>
        </Row>
        <Row>
          <Col><Link to="/forearms"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419840/11_1_ouvnwn.png" /></Link></Col>
          <Col><Link to="/glutes"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419852/12_1_n9qcbk.png" /></Link></Col>
          <Col><Link to="/shoulders"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419725/3_1_sdztok.png" /></Link></Col>
        </Row>
        <Row>
          <Col><Link to="/triceps"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419829/10_1_mb1ajn.png" /></Link></Col>
          <Col><Link to="/upperLegs"><img className="upperlegs" src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419716/2_1_abwezl.png" /></Link></Col>
          <Col><Link to="/addExercise"><img src="https://res.cloudinary.com/dp5l2gxzh/image/upload/v1592419822/9_1_cg5f5y.png" /></Link></Col>
        </Row>

      </Container>
    </>
  )
}