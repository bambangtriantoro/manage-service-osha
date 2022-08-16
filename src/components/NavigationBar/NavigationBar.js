import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import './NavigationBar.css'
import { LogoOsha, TitleOsha, oranye, lemon, easybi, websiteSolution, mobileSolution, customSolution, biSolution, professionalService, itbootcamp } from './imports.js'

const NavigationBar = () => {
    const [dropdownImg, setDropdownImg] = useState(websiteSolution);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={LogoOsha} alt="logo osha" width={40}/>
                        <img src={TitleOsha} alt="logo osha" width={100}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Nav.Link href="#" active>Home</Nav.Link>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <NavDropdown title="Solutions & Services">
                                <Row xs='1' sm='1' md='2'>
                                    <Col>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(websiteSolution)}>
                                            Website & Web Apps
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(mobileSolution)}>
                                            Mobile Apps
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(customSolution)}>
                                            Custom Apps
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(biSolution)}>
                                            Business Intelligence
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('')}>
                                            Simanis
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(oranye)}>
                                            Oranye
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(lemon)}>
                                            Lemon
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(easybi)}>
                                            Easy BI
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(professionalService)}>
                                            Professional Services
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg(itbootcamp)}>
                                            IT Bootcamp
                                        </NavDropdown.Item>
                                    </Col>
                                    <Col className='d-flex justify-content-center align-items-center'>
                                        <img src={dropdownImg} className='dropdown-img' alt='dropdown image'/>
                                    </Col>   
                                </Row>
                            </NavDropdown>
                            <Nav.Link href="#career">Career</Nav.Link>
                            <Nav.Link href="#news">News</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar

