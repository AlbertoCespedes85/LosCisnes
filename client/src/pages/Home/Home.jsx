import React from 'react'
import "./home.css"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { apts } from '../../data/cardsApt';
import { useNavigate } from 'react-router';
import { CardApts } from '../../components/CardApts/CardApts';
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <section className='section1 ' > 
      <h1 className=' text-white'>Apartamentos los cisnes</h1>  
      <br />
      <h2 className='text-white'>Tu lugar de relax</h2>
    </section>
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
export default Home;
