import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel, Row, Col, Form, Button } from 'react-bootstrap'
import { easybi, lemon, LogoOsha, oranye } from '../../components/NavigationBar/imports'
import { Link } from 'react-router-dom'

AOS.init({
    once: true,
    duration: 600,
});

const Hero = (props) => {
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
                                <Row xs="1" sm="1" md="2" className='justify-content-between'>
                                    <Col data-aos="fade-up">
                                        <div className='d-flex '>
                                            <div className='logo-img'>
                                                <img src={LogoOsha} alt='simanis' className='w-75' />
                                            </div>
                                            <div className='logo-img'>
                                                <img src={oranye} alt='oranye' className='w-100' />
                                            </div>
                                            <div className='logo-img'>
                                                <img src={lemon} alt='lemon' className='w-100' />
                                            </div>
                                            <div className='logo-img'>
                                                <img src={easybi} alt='easybi' className='w-100' />
                                            </div>
                                        </div>
                                        <h2>Very Useful Products</h2>
                                        <p>We have products that is very useful to help your works, easy to use also.</p>
                                        <Link to='/productsolution'><Button className='btn-primary mt-3' size='lg'>Learn More</Button></Link>
                                    </Col>
                                    <Col>
                                        <h4>Contact Us</h4>
                                        <p>Try Our Products</p>
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
                                        <h2>Great Quality Projects</h2>
                                        <p>We provide project solution services in various platform with advanced technology.</p>
                                        <div onClick={props.scrollToElement}><Button className='btn-primary mt-3' size='lg'>Learn More</Button></div>
                                    </Col>
                                    <Col>
                                        <h4>Contact Us</h4>
                                        <p>We will do the best to make your projects done perfectly</p>
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
                                        <h2>Manage Services</h2>
                                        <p>We have a really good manage service system.</p>
                                        <Link to='/manageservice'><Button className='btn-primary mt-3' size='lg'>Learn More</Button></Link>
                                    </Col>
                                    <Col>
                                        <h4>Contact Us</h4>
                                        <p>Cooperate With Us</p>
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