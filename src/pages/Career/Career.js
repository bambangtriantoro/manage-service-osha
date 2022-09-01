import './Career.css'
import React from 'react'
import { useState } from 'react'
import { Button, Container, Card, Row, Col, Collapse, ListGroup } from 'react-bootstrap'
import { CareerForm, Footer, NavigationBar } from '../../components'
import { FaReact, FaAngular, FaJava, FaRulerCombined } from 'react-icons/fa'
import { SiGo } from 'react-icons/si'
import { AiFillControl } from 'react-icons/ai'

const Career = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div>
        <NavigationBar />
        <section className='career the-header'>
          <Container>
            <h2>Career</h2>
            <p>Be the Part of Us!</p>
          </Container>
        </section>

        <section className='career-list'>
          <Container>
            <Row xs={1} sm={1} md={1} lg={2} className='gy-5'>
              {/* Mobile */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h3>
                        <FaReact size={30} /> Mobile Developer
                      </h3>
                    </Card.Title>
                    <Card.Text>
                      <button onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>
                        Requirements 
                        <img src='http://cdn.onlinewebfonts.com/svg/img_144754.png' alt='dropdown' className={open1 ? 'rotated':''} width={10} />
                      </button>
                    </Card.Text>
                    <Collapse in={open1}>
                      <div id="example-collapse-text">
                        <ListGroup as='ul' className='mt-3'>
                          <ListGroup.Item as='li'>Ability to work independently and in a team environment</ListGroup.Item>
                          <ListGroup.Item as='li'>Ability to work under pressure</ListGroup.Item>
                          <ListGroup.Item as='li'>You have proficiency and proven experience in Mobile Development, iOS, React Native and any cross-mobile-platform framework </ListGroup.Item>
                          <ListGroup.Item as='li'>Understanding android native java/kotlin (a plus) </ListGroup.Item>
                          <ListGroup.Item as='li'>Have worked in agile environment (Scrum, Kanban, Jira, Trello, ect) </ListGroup.Item>
                          <ListGroup.Item as='li'>Familiar with Git </ListGroup.Item>
                          <ListGroup.Item as='li'>You have practice object-oriented programming </ListGroup.Item>
                          <ListGroup.Item as='li'>Have passion to learn about something new </ListGroup.Item>
                        </ListGroup>
                        <Button className='mt-3 w-100'>Apply</Button>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
              {/* Frontend */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h3><FaAngular size={30} /> Front-end Developer</h3>
                      </Card.Title>
                      <Card.Text>
                      <button onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>
                        Requirements 
                        <img src='http://cdn.onlinewebfonts.com/svg/img_144754.png' alt='dropdown' className={open2 ? 'rotated':''} width={10} />
                      </button>
                    </Card.Text>
                    <Collapse in={open2}>
                      <div id="example-collapse-text">
                        <ListGroup as='ul' className='mt-3'>
                          <ListGroup.Item as='li'>Familiar with React.js/Vue.js/Angular, Typescript,  JavaScript, CSS, jQuery, Git</ListGroup.Item>
                          <ListGroup.Item as='li'>Good knowledge on working with RESTful API </ListGroup.Item>
                          <ListGroup.Item as='li'>In-depth understanding of the entire web development process (design, development and deployment) </ListGroup.Item>
                          <ListGroup.Item as='li'>Have worked in agile environment (Scrum, Kanban, Jira, Trello, ect) </ListGroup.Item>
                          <ListGroup.Item as='li'>An ability to perform well in a fast-paced environmentc </ListGroup.Item>
                          <ListGroup.Item as='li'>You have practice object-oriented programming </ListGroup.Item>
                          <ListGroup.Item as='li'>Have passion to learn about something new </ListGroup.Item>
                        </ListGroup>
                        <Button className='mt-3 w-100'>Apply</Button>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
              {/* Java */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h3><FaJava style={{ strokeWidth: "10"}} size={30} /> Java Developer</h3>
                    </Card.Title>
                    <Card.Text>
                      <button onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>
                        Requirements 
                        <img src='http://cdn.onlinewebfonts.com/svg/img_144754.png' alt='dropdown' className={open3 ? 'rotated':''} width={10} />
                      </button>
                    </Card.Text>
                    <Collapse in={open3}>
                      <div id="example-collapse-text">
                        <ListGroup as='ul' className='mt-3'>
                          <ListGroup.Item as='li'>Strong knowledge in Java</ListGroup.Item>
                          <ListGroup.Item as='li'>Good knowledge in PostgreSQL</ListGroup.Item>
                          <ListGroup.Item as='li'>Familiar with asynchronus messaging or RabbitMQ </ListGroup.Item>
                          <ListGroup.Item as='li'>Efficient table & database querying </ListGroup.Item>
                          <ListGroup.Item as='li'>Have worked in agile environment (Scrum, Kanban, Jira, Trello, ect)s </ListGroup.Item>
                          <ListGroup.Item as='li'>Swagger or openAPI</ListGroup.Item>
                          <ListGroup.Item as='li'>Microservices or Quarkus</ListGroup.Item>
                        </ListGroup>
                        <Button className='mt-3 w-100'>Apply</Button>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
              {/* Golang */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h3><SiGo size={30} /> Golang Developer</h3>
                    </Card.Title>
                    <Card.Text>
                      <button onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>
                        Requirements 
                        <img src='http://cdn.onlinewebfonts.com/svg/img_144754.png' alt='dropdown' className={open4 ? 'rotated':''} width={10} />
                      </button>
                    </Card.Text>
                    <Collapse in={open4}>
                      <div id="example-collapse-text">
                        <ListGroup as='ul' className='mt-3'>
                          <ListGroup.Item as='li'>Strong knowledge in Golang</ListGroup.Item>
                          <ListGroup.Item as='li'>Good knowledge in PostgreSQL</ListGroup.Item>
                          <ListGroup.Item as='li'>Familiar with asynchronus messaging or RabbitMQ </ListGroup.Item>
                          <ListGroup.Item as='li'>Efficient table & database querying </ListGroup.Item>
                          <ListGroup.Item as='li'>Have worked in agile environment (Scrum, Kanban, Jira, Trello, ect) </ListGroup.Item>
                          <ListGroup.Item as='li'>Swagger or openAPI</ListGroup.Item>
                          <ListGroup.Item as='li'>Microservices</ListGroup.Item>
                        </ListGroup>
                        <Button className='mt-3 w-100'>Apply</Button>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
              {/* QA */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h3><FaRulerCombined size={20} /> QA Engineer</h3>
                    </Card.Title>
                    <Card.Text>
                      <button onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>
                        Requirements 
                        <img src='http://cdn.onlinewebfonts.com/svg/img_144754.png' alt='dropdown' className={open5 ? 'rotated':''} width={10} />
                      </button>
                    </Card.Text>
                    <Collapse in={open5}>
                      <div id="example-collapse-text">
                        <ListGroup as='ul' className='mt-3'>
                          <ListGroup.Item as='li'>Strong knowledge in Automation Testing</ListGroup.Item>
                          <ListGroup.Item as='li'>Experienced in Katalon, Selenium, using distributed control tools like GIT</ListGroup.Item>
                          <ListGroup.Item as='li'>Good knowledge in  Swagger or openAPI</ListGroup.Item>
                          <ListGroup.Item as='li'>Have worked in agile environment (Scrum, Kanban, Jira, Trello, ect) </ListGroup.Item>
                        </ListGroup>
                        <Button className='mt-3 w-100'>Apply</Button>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
              {/* Product Manager */}
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h3><AiFillControl size={20} /> Product Manager</h3>
                    </Card.Title>
                    <Card.Text>
                      <button onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>
                        Requirements 
                        <img src='http://cdn.onlinewebfonts.com/svg/img_144754.png' alt='dropdown' className={open6 ? 'rotated':''} width={10} />
                      </button>
                    </Card.Text>
                    <Collapse in={open6}>
                      <div id="example-collapse-text">
                        <ListGroup as='ul' className='mt-3'>
                          <ListGroup.Item as='li'>Ability to work independently and in a team environment</ListGroup.Item>
                          <ListGroup.Item as='li'>Ability to work under pressure</ListGroup.Item>
                          <ListGroup.Item as='li'>Prioritized with background from fintech & bank</ListGroup.Item>
                        </ListGroup>
                        <Button className='mt-3 w-100'>Apply</Button>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <CareerForm />
        <Footer />
    </div>
  )
}

export default Career