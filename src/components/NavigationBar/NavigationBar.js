import './NavigationBar.css'
import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import { LogoOsha, TitleOsha, oranye, lemon, easybi, websiteSolution, mobileSolution, customSolution, biSolution, professionalService, itbootcamp } from './imports.js'
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    const [dropdownImg, setDropdownImg] = useState(websiteSolution);
    
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <img src={LogoOsha} alt="logo osha" width={40}/>
                            <img src={TitleOsha} alt="logo osha" width={100}/>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Nav.Link><NavLink className={({ isActive }) => isActive ? 'linkto active' : 'linkto'} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={({ isActive }) => isActive ? 'linkto active' : 'linkto'} to="/about">About Us</NavLink></Nav.Link>
                            <NavDropdown title="Solutions & Services">
                                <Row xs='1' sm='1' md='2'>
                                    <Col>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(websiteSolution)}>
                                            <NavLink className='linkto' to="/websolution">Website & Web Apps Solution </NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(mobileSolution)}>
                                            <NavLink className='linkto' to="/mobilesolution">Mobile Apps Solution</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(customSolution)}>
                                            <NavLink className='linkto' to="/customsolution">Custom Apps Solution</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(biSolution)}>
                                            <NavLink className='linkto' to="/bisolution">Business Intelligence Solution</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(LogoOsha)}>
                                            <NavLink className='linkto' to="/simanisapp">Simanis - Document Tracker System</NavLink>s
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(oranye)}>
                                            <NavLink className='linkto' to="/oranyeapp">Oranye - HR Information System</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(lemon)}>
                                            <NavLink className='linkto' to="/lemonapp">Lemon - E-Learning System</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(easybi)}>
                                            <NavLink className='linkto' to="/easybiapp">Easy BI - Dashboard Analytic and Monitoring</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(professionalService)}>
                                            <NavLink className='linkto' to="/proservices">Professional Services</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(itbootcamp)}>
                                            <NavLink className='linkto' to="/itbootcamp">IT Bootcamp</NavLink>
                                        </NavDropdown.Item>
                                    </Col>
                                    <Col className='d-flex justify-content-center align-items-center'>
                                        <img src={dropdownImg} className='dropdown-img' alt='dropdown'/>
                                    </Col>   
                                </Row>
                            </NavDropdown>
                            <Nav.Link><NavLink className={({ isActive }) => isActive ? 'linkto active' : 'linkto'} to="/career">Career</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={({ isActive }) => isActive ? 'linkto active' : 'linkto'} to="/news">News</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={({ isActive }) => isActive ? 'linkto active' : 'linkto'} to="/features">Features</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar

