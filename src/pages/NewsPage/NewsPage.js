import './NewsPage.css'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Footer, NavigationBar } from '../../components'
import { Link } from 'react-router-dom'

const NewsPage = () => {
  return (
    <div>
        <NavigationBar />
        <section className='the-news the-header'>
          <Container>
            <h2>News</h2>
            <p>Announcements and information about OSHA Technology</p>
          </Container>
        </section>
        <section className='the-news-list'>
          <Container>
            <h2>Latest News</h2>
            <div className='the-news-item'>
              <Row xs={1} sm={1} md={1} lg={1} className='gy-5'>
                <Col>
                  <Row>
                    <Col xs={12} sm={12} md={4} >
                      <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='' className='w-100' />
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                      <div>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consequatur numquam voluptatum velit quod nostrum mollitia. Culpa hic exercitationem laudantium similique maiores in quis tempore eos blanditiis? Minus voluptates ea sit quaerat enim fugit omnis quisquam quod, blanditiis natus libero! Distinctio necessitatibus saepe autem amet obcaecati eum id, nihil vero.</p>
                        <Link to='newsitem'><p>Read More</p></Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} sm={12} md={4} >
                      <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='' className='w-100' />
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                      <div>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consequatur numquam voluptatum velit quod nostrum mollitia. Culpa hic exercitationem laudantium similique maiores in quis tempore eos blanditiis? Minus voluptates ea sit quaerat enim fugit omnis quisquam quod, blanditiis natus libero! Distinctio necessitatibus saepe autem amet obcaecati eum id, nihil vero.</p>
                        <Link to='newsitem'><p>Read More</p></Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} sm={12} md={4} >
                      <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='' className='w-100' />
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                      <div>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consequatur numquam voluptatum velit quod nostrum mollitia. Culpa hic exercitationem laudantium similique maiores in quis tempore eos blanditiis? Minus voluptates ea sit quaerat enim fugit omnis quisquam quod, blanditiis natus libero! Distinctio necessitatibus saepe autem amet obcaecati eum id, nihil vero.</p>
                        <Link to='newsitem'><p>Read More</p></Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} sm={12} md={4} >
                      <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='' className='w-100' />
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                      <div>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consequatur numquam voluptatum velit quod nostrum mollitia. Culpa hic exercitationem laudantium similique maiores in quis tempore eos blanditiis? Minus voluptates ea sit quaerat enim fugit omnis quisquam quod, blanditiis natus libero! Distinctio necessitatibus saepe autem amet obcaecati eum id, nihil vero.</p>
                        <Link to='newsitem'><p>Read More</p></Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} sm={12} md={4} >
                      <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='' className='w-100' />
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                      <div>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consequatur numquam voluptatum velit quod nostrum mollitia. Culpa hic exercitationem laudantium similique maiores in quis tempore eos blanditiis? Minus voluptates ea sit quaerat enim fugit omnis quisquam quod, blanditiis natus libero! Distinctio necessitatibus saepe autem amet obcaecati eum id, nihil vero.</p>
                        <Link to='newsitem'><p>Read More</p></Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={12} sm={12} md={4} >
                      <img src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt='' className='w-100' />
                    </Col>
                    <Col xs={12} sm={12} md={8}>
                      <div>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, consequatur numquam voluptatum velit quod nostrum mollitia. Culpa hic exercitationem laudantium similique maiores in quis tempore eos blanditiis? Minus voluptates ea sit quaerat enim fugit omnis quisquam quod, blanditiis natus libero! Distinctio necessitatibus saepe autem amet obcaecati eum id, nihil vero.</p>
                        <Link to='newsitem'><p>Read More</p></Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <Footer />
    </div>
  )
}

export default NewsPage