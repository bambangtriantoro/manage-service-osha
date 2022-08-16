import './Solution.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from "react-bootstrap"
import { website, webapps, mobileApps, customApps, businessIntelligence } from './imports.js'

AOS.init({
    once: true,
    duration: 1000,
});

const Solution = () => {
    return(
        <>  
            <section id="solution" className="solution">
                <Container>
                    <h2 data-aos="fade-right" data-aos-delay="500">SOLUTION</h2>
                    <Row xs={1} sm={1} md={3} className="justify-content-center align-items-center g-3">
                        <Col data-aos="fade-up">
                            <div className="img-container">
                                <img src={website}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Website Solutions</h5> 
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="300">
                        <div className="img-container">
                                <img src={webapps}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Web Apps Solutions</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="600">
                            <div className="img-container">
                                <img src={mobileApps}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Mobile Solutions</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                        <div className="img-container">
                                <img src={customApps}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Custom Solutions</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="300">
                            <div className="img-container">
                                <img src={businessIntelligence}  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Business Intelligence Solutions</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Solution