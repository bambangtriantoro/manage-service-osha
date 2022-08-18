import './NavigationBar.css'
import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import { LogoOsha, TitleOsha, oranye, lemon, easybi, websiteSolution, mobileSolution, customSolution, biSolution, professionalService, itbootcamp } from './imports.js'
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const [dropdownImg, setDropdownImg] = useState(websiteSolution);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Link className='linkto' to="/">
                            <img src={LogoOsha} alt="logo osha" width={40}/>
                            <img src={TitleOsha} alt="logo osha" width={100}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Nav.Link><Link className='linkto' to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link className='linkto' to="/about">About Us</Link></Nav.Link>
                            <NavDropdown title="Solutions & Services">
                                <Row xs='1' sm='1' md='2'>
                                    <Col>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(websiteSolution)}>
                                            <Link className='linkto' to="/websolution">Website & Web Apps</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(mobileSolution)}>
                                            <Link className='linkto' to="/mobilesolution">Mobile Apps</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(customSolution)}>
                                            <Link className='linkto' to="/customsolution">Custom Apps</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(biSolution)}>
                                            <Link className='linkto' to="/bisolution">Business Intelligence</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('')}>
                                            <Link className='linkto' to="/simanisapp">Simanis</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(oranye)}>
                                            <Link className='linkto' to="/oranyeapp">Oranye</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(lemon)}>
                                            <Link className='linkto' to="lemonapp">Lemon</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(easybi)}>
                                            <Link className='linkto' to="easybiapp">Easy BI</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(professionalService)}>
                                            <Link className='linkto' to="proservices">Professional Services</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(itbootcamp)}>
                                            <Link className='linkto' to="itbootcamp">IT Bootcamp</Link>
                                        </NavDropdown.Item>
                                    </Col>
                                    <Col className='d-flex justify-content-center align-items-center'>
                                        <img src={dropdownImg} className='dropdown-img' alt='dropdown'/>
                                    </Col>   
                                </Row>
                            </NavDropdown>
                            <Nav.Link><Link className='linkto' to="/career">Career</Link></Nav.Link>
                            <Nav.Link><Link className='linkto' to="/news">News</Link></Nav.Link>
                            <Nav.Link><Link className='linkto' to="/features">Features</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar

