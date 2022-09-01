import './Website.css'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { BsGlobe } from 'react-icons/bs'
import { FcServices } from 'react-icons/fc'

const Website = () => {
  return (
    <section className='website'>
        <Row xs={1} sm={1} md={2}>
            <Col>
                <Container>
                    <h2><BsGlobe color='#F'/> Website Solutions</h2>
                    <h5>Media For Press Releases</h5>
                    <ul>
                        <li>Business branding to consumers' hearts</li>
                        <li>Compete with competitors in the digital realm</li>
                        <li>Increase brand awareness and consumer trust</li>
                        <li>Demonstrate business credibility</li>
                        <li>Promote a product or service more broadly</li>
                        <li>Educate consumers about products, services, or business through blog posts</li>
                        <li>Provide customer service at any time for consumers</li>
                        <li>Get potential leads</li>
                    </ul>
                </Container>
            </Col>
            <Col>
                <Container>
                    <h2><FcServices /> Web Apps Solutions</h2>
                    <h5>Quickly Business Expansion</h5>
                    <ul>
                        <li>Providing a positive experience for consumers with efficient service (indirectly building business branding as well)</li>
                        <li>Solve business problems systematically and automatically. For example, making invoices, checking online transactions, opening communication channels between users, etc</li>
                        <li>Closer personally with consumers</li>
                        <li>Build operational systems effectively and efficiently</li>
                        <li>Develop business with more flexibility. it is easy to develop, update, upgrade, and access</li>
                    </ul>
                </Container>
            </Col>
        </Row>
    </section>
  )
}

export default Website