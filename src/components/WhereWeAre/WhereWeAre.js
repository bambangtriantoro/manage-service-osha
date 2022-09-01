import './WhereWeAre.css'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';
import { indo } from './imports'
import { HiOutlineLocationMarker } from 'react-icons/hi'

AOS.init({
  once: true,
  duration: 1000,
});

const WhereWeAre = () => {
  return (
    <section className='whereweare'>
        <h2 data-aos='fade-up' data-aos-delay='500'>WHERE WE ARE</h2>
        <Container>
            <Row xs={1} sm={1} md={2}>
                <Col>
                    <img src={indo} alt='map indo' className='w-100' data-aos='zoom-out'/>
                </Col>
                <Col>
                    <div className='location'>
                        <h5 data-aos='fade-right'><HiOutlineLocationMarker size={30} color='#FF7A00' /> BANDUNG</h5>
                        <div className='d-flex flex-column'>
                            <p data-aos='fade-right' data-aos-delay='300'>Griya Cikutra Blok-B No.08, Cibeunying, Bandung, Jawa Barat</p>
                            <p data-aos='fade-right' data-aos-delay='600'><b>Phone</b> : +62 878 1770 0088</p>
                            <p data-aos='fade-right' data-aos-delay='900'><b>Email</b> : info@oshatechnology.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default WhereWeAre