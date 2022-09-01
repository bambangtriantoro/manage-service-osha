import './News.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

AOS.init({
    once: true,
    duration: 1000,
});

const News = () => {
    return (
        <>
            <section id='news' className='news'>
                <Container>
                    <h2 data-aos='fade-right' data-aos-delay='500'>NEWS UPDATE</h2>
                    <Row xs='1' md='3' className='g-3'>
                        <Col data-aos='fade-up'>
                            <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='news'/>
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Col>
                        <Col data-aos='fade-up' data-aos-delay='300'>
                            <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='news'/>
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Col>
                        <Col data-aos='fade-up' data-aos-delay='600'>
                            <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='news'/>
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </Col>
                    </Row>
                    <Link to='/news'>See All News</Link>
                </Container>
            </section>
        </>
    )
}

export default News