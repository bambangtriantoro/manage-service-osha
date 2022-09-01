import './ProductSolution.css'
import React from 'react'
import { NavigationBar, Footer } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'
import { easybi, lemon, LogoOsha, oranye } from '../../components/NavigationBar/imports'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductSolution = () => {
  return (
    <div>
        <NavigationBar />
        <section className='product-solution'>
            <Container>
                <h2>Product Solutions</h2>
            </Container>
        </section>
        <section className='product-list'>
            <Container>
                <Row xs={1} sm={2} md={4} className='gy-5'>
                    <Col>
                        <div className='img-container-prod'>
                            <img src={LogoOsha} alt='' className='w-75 mb-3' />
                        </div>
                        <h2>SIMANIS</h2>
                        <p>Document System Tracking</p>
                        <Link to='/simanisapp'><Button>See Detail</Button></Link>
                    </Col>
                    <Col>
                        <div className='img-container-prod'>
                            <img src={oranye} alt='' className='w-100 mb-3' />
                        </div>
                        <h2>ORANYE</h2>
                        <p>Human Resources Information System</p>
                        <Link to='/oranyeapp'><Button>See Detail</Button></Link>
                    </Col>
                    <Col>
                        <div className='img-container-prod'>
                            <img src={lemon} alt='' className='w-100 mb-3' />
                        </div>
                        <h2>LEMON</h2>
                        <p>E - Learning System</p>
                        <Link to='/lemonapp'><Button>See Detail</Button></Link>
                    </Col>
                    <Col>
                        <div className='img-container-prod'>
                            <img src={easybi} alt='' className='w-100 mb-3' />
                        </div>
                        <h2>Easy BI</h2>
                        <p>Business Monitoring Dashboard</p>
                        <Link to='/easybiapp'><Button>See Detail</Button></Link>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer />
    </div>
  )
}

export default ProductSolution