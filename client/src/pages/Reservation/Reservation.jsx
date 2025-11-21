import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { apts } from '../../data/cardsApt';
import { CardApts } from '../../components/CardApts/CardApts';
import { useNavigate } from 'react-router-dom'
const Reservation = () => {
  const navigate = useNavigate();
  return (
   <>
   <section>
     <Container>
      <h1 className='m-4'>Nuestras habitaciones</h1>
      <Row>
        {apts.map(apt => (
          <Col key={apt.id} className='m-5' >
          <CardApts apt = {apt} navigate= {navigate}/>
          </Col>
        ))}
      </Row>

     </Container>
   </section>
   </>
  )
}
export default Reservation;
