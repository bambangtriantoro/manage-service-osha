import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel, Row, Col, Form, Button } from 'react-bootstrap'

AOS.init({
    once: true,
    duration: 600,
});

const Hero = () => {
    return(
        <>  
            <div className='hero'>
                <div className='carousel-container'>
                    <Carousel variant='dark' interval={5000} controls={false}>
                        <Carousel.Item>
                            <div                            
                                className="d-block w-100 carousel-img"
                            />
                            <Carousel.Caption>
                                <Row xs="1" sm="1" md="2">
                                    <Col data-aos="fade-up">
                                        <h2>First slide label</h2>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        <Button className='btn-primary mt-3' size='lg'>Learn More</Button>
                                    </Col>
                                    <Col>
                                        <h4>Lorem</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-img"
                            />

                            <Carousel.Caption>
                                <Row xs="1" sm="1" md="2">
                                    <Col data-aos="fade-up">
                                        <h2>Second slide label</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <Button className='btn-primary mt-3' size='lg'>Learn More</Button>
                                    </Col>
                                    <Col>
                                        <h4>Lorem</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-img"
                            />

                            <Carousel.Caption>
                                <Row xs="1" sm="1" md="2">
                                    <Col data-aos="fade-up">
                                        <h2>Third slide label</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <Button className='btn-primary mt-3'>Learn More</Button>
                                    </Col>
                                    <Col>
                                        <h4>Lorem</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='hero-absolute-item'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" size="sm" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" size="sm" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" size="sm" placeholder="Contact Number" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" size="sm" placeholder="Company" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                size="sm"
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" className='w-100 rounded rounded-5'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Hero