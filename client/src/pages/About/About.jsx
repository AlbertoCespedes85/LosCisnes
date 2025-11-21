import React from 'react'
import { homeApt } from '../../data/homeApt';
import { Col, Container, Row } from 'react-bootstrap';
import "./about.css"

const About = () => {
  return (
    <>
    <Container>
    <h1 className='mt-5'>Información de los Apartamentos</h1>
  <Row className='g-4'>
    {homeApt.images.map((img, idx) => (
      <Col key={idx} xs={12} sm={6} md={4} lg={3} >
        <img
          className='aboutimg'
          src={img}
          alt={`Foto ${idx + 1}`}
        />
      </Col>
    ))}
  </Row>
      </Container>
    <h2>Ubicación</h2>
    <p>Nos encontramos ubicados en Soto de la marica concretamente en el ayuntamiento de Santa Cruz de Bezana muy cerca de las Playas de San Juan de la Canal ,La Arnia y Covachos</p>
   <iframe 
        className='mb-5'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180.9917013375231!2d-3.90628128324298!3d43.46336916631778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1762783824298!5m2!1ses!2ses"
        width="50%" 
        height="450" 
        style={{ border: 0 }} // En React, los estilos en línea se escriben como objetos JS
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </>
  )
}
export default About;
