import React, { useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { apartmentsData } from '../../data/apartamentsData';
import "./apartment.css"

const Apartaments = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }; 
   const { id } = useParams();
  const apartment = apartmentsData.find(a => a.id === Number(id));
  return (
    <>
      <h1 className='mt-5'>{apartment.title}</h1>
      <Carousel className='mt-5' activeIndex={index} onSelect={handleSelect}>
      {apartment.images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              src={img}
              className="carousel-img"
              alt={`Foto ${idx + 1}`}
            />
          </Carousel.Item>
        ))}
    </Carousel>
    <p>{apartment.description}</p>

       <Container>
  <Row className='g-4 mb-5'>
    {apartment.images.map((img, idx) => (
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
    </>
  )
}
export default Apartaments ;
