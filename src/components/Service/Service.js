import './Service.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap'
import { FaUserTie, FaLaptop, FaServer } from "react-icons/fa";

AOS.init({
    once: true,
    duration: 1000,
});

const Service = () => {
    return (
        <>
            <section id="service" className="service">
                <Container><h2 data-aos='fade-right' data-aos-delay='500'>SERVICE</h2></Container>
                <div className='service-list'>
                    <Container>
                        <Row xs='1' md='3' className='g-3'>
                            <Col data-aos='fade-up'>
                                <FaUserTie  size={70} className='mb-3' />
                                <h4 className='mb-5'>IT Professional Service</h4>
                                <button>More Detail</button>
                            </Col>
                            <Col data-aos='fade-up' data-aos-delay='300'>
                                <FaLaptop size={70} className='mb-3' />
                                <h4 className='mb-5'>IT Custom Development</h4>
                                <button>More Detail</button>
                            </Col>
                            <Col data-aos='fade-up' data-aos-delay='600'>
                                <FaServer size={70} className='mb-3' />
                                <h4 className='mb-5'>Middleware</h4>
                                <button>More Detail</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Service