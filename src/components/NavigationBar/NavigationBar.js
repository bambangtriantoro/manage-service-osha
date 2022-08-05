import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap'
import './NavigationBar.css'
import LogoOsha from '../../assets/images/LOGO OSHA.png'
import TitleOsha from '../../assets/images/TITLE OSHA.png'
import { useState } from 'react'

const NavigationBar = () => {
    const [dropdownImg, setDropdownImg] = useState('https://img.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg?w=740&t=st=1659503041~exp=1659503641~hmac=bf49b961034434711b46b8f3808da09ddae0d699656c60052e0df02751714fd9');

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
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg?w=740&t=st=1659503041~exp=1659503641~hmac=bf49b961034434711b46b8f3808da09ddae0d699656c60052e0df02751714fd9')}>Solution One</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/monitor_53876-59944.jpg?w=740&t=st=1659504289~exp=1659504889~hmac=efb4c5a7e1eb16157bf7024c86541f2b0eddd1abd6f057a63ddb4edcfffa7401')}>Solution Two</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?w=740&t=st=1659504313~exp=1659504913~hmac=40afd4536a652f5bef59ec95f5c67f6249bf5ab8540b1c755f11671080c2ece0')}>Solution Three</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg?w=740&t=st=1659503041~exp=1659503641~hmac=bf49b961034434711b46b8f3808da09ddae0d699656c60052e0df02751714fd9')}>Solution Four</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/monitor_53876-59944.jpg?w=740&t=st=1659504289~exp=1659504889~hmac=efb4c5a7e1eb16157bf7024c86541f2b0eddd1abd6f057a63ddb4edcfffa7401')}>Solution Five</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?w=740&t=st=1659504313~exp=1659504913~hmac=40afd4536a652f5bef59ec95f5c67f6249bf5ab8540b1c755f11671080c2ece0')}>Solution Six</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg?w=740&t=st=1659504628~exp=1659505228~hmac=5c82987a542b1f17ff84beb46c1d572bec5a250a79631712310dd505b37fef38')}>Solution Seven</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg?w=740&t=st=1659503041~exp=1659503641~hmac=bf49b961034434711b46b8f3808da09ddae0d699656c60052e0df02751714fd9')}>Solution Eight</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/monitor_53876-59944.jpg?w=740&t=st=1659504289~exp=1659504889~hmac=efb4c5a7e1eb16157bf7024c86541f2b0eddd1abd6f057a63ddb4edcfffa7401')}>Solution Nine</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?w=740&t=st=1659504313~exp=1659504913~hmac=40afd4536a652f5bef59ec95f5c67f6249bf5ab8540b1c755f11671080c2ece0')}>Solution Ten</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg?w=740&t=st=1659503041~exp=1659503641~hmac=bf49b961034434711b46b8f3808da09ddae0d699656c60052e0df02751714fd9')}>Solution  Eleven</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/monitor_53876-59944.jpg?w=740&t=st=1659504289~exp=1659504889~hmac=efb4c5a7e1eb16157bf7024c86541f2b0eddd1abd6f057a63ddb4edcfffa7401')}>Solution Twelve</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?w=740&t=st=1659504313~exp=1659504913~hmac=40afd4536a652f5bef59ec95f5c67f6249bf5ab8540b1c755f11671080c2ece0')}>Solution Thirteen</NavDropdown.Item>
                                        <NavDropdown.Item href="#" onMouseEnter={() => setDropdownImg('https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg?w=740&t=st=1659504628~exp=1659505228~hmac=5c82987a542b1f17ff84beb46c1d572bec5a250a79631712310dd505b37fef38')}>Solution Fourteen</NavDropdown.Item>
                                    </Col>
                                    <Col className='d-flex justify-content-center align-items-center'>
                                        <img src={dropdownImg} className='dropdown-img' alt='dropdown'/>
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

