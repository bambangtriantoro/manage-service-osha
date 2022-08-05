import './Solution.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from "react-bootstrap"

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
                    <Row xs={1} sm={1} md={3} className="g-3">
                        <Col data-aos="fade-up">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>First Solution</h5> 
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="300">
                        <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Second Solution</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="600">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Third Solution</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up">
                        <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Fourth Solution</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="300">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Fifth Solution</h5>
                                    <p>Click for more information</p>
                                </div> 
                            </div>
                        </Col>
                        <Col data-aos="fade-up" data-aos-delay="600">
                        <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  className="image" alt="service"/>
                                <div className="overlay">
                                    <h5>Sixth Solution</h5>
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