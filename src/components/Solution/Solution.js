import './Solution.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from "react-bootstrap"
import { website, mobileApps, customApps, businessIntelligence } from './imports.js'
import { Link } from 'react-router-dom';

AOS.init({
    once: true,
    duration: 1000,
});

const Solution = (props) => {
    return(
        <>  
            <section id="solution" className="solution" ref={props.testRef}>
                <Container>
                    <h2 data-aos="fade-right" data-aos-delay="500">SOLUTION</h2>
                    <Row xs={1} sm={1} md={2} lg={4} className="justify-content-center align-items-center g-3">
                        <Col data-aos="fade-up">
                            <Link to='/websolution'>
                            <div className="img-container">
                                <img src={website}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Web & Web Apps Solutions</h5> 
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                            </Link>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="300">
                            <Link to='/mobilesolution'>
                            <div className="img-container">
                                <img src={mobileApps}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Mobile Solutions</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                            </Link>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="600">
                            <Link to='/customsolution'>
                            <div className="img-container">
                                <img src={customApps}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Custom Solutions</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                            </Link>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="900">
                            <Link to='/bisolution'>
                            <div className="img-container">
                                <img src={businessIntelligence}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Business Intelligence Solutions</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Solution