import './Footer.css'
import { Container, Col, Row } from "react-bootstrap"
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <footer>
                <Container fluid>
                    <Row xs='1' sm='1' md='2' className='g-5'>
                        <Col>
                            <p>Copyright &copy; 2022 by OSHA Technology</p>
                        </Col>
                        <Col className="d-flex">
                            <p>Follow Us</p>
                            <div className='d-flex align-items-center gap-3'>
                                <a target='_blank' href='https://www.facebook.com/profile.php?id=100082695342982'><FaFacebook size={20}/></a>
                                <a target='_blank' href='https://www.instagram.com/osha.technology'><FaInstagram size={20}/></a>
                                <a target='_blank' href='https://www.linkedin.com/company/osha-technology'><FaLinkedin size={20}/></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer