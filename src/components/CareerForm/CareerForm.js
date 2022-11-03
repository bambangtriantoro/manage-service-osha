import "./CareerForm.css";  
import React, { Component, useState } from "react";
import { Col, Container, Form, Row, Button, Table } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { AxiosCustom } from "../../config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import Loading from "../../subcomponents/Loading/Loading";

// For Saving File
// import { saveAs } from 'file-saver'

const workingdescinput = [{
  type: "text",
  id: 1,
  value: ""
}]
const workingprojectinput = [{
  type: "text",
  id: 1,
  value: ""
}]
const workingtoolinput = [{
  type: "text",
  id: 1,
  value: ""
}]

// Initial State
const initialState = {
  name: "-",
  email: "-",
  position: "-",
  birthPlace: "-",
  birthDate: "-",
  gender: "-",
  status: "-",
  education: "-",
  edufrom: "-",
  eduto: "-",
  workingexp: "",
  workfrom: "",
  workto: "",
  workingpos: "",
  workingexpdata: [],
  workingdesc: "",
  workingdescarray: workingdescinput,
  workingproject: "",
  workingprojectarray: workingprojectinput,
  workingtool: "",
  workingtoolarray: workingtoolinput,
  capability: "",
  capabilities: [],
  latest_applicant: null,
  step: null,
  loading: false
};

class CareerForm extends Component {
  // Initial function
  constructor(props) {
    super(props)
    this.state = initialState;

    // Form ref
    this.form = React.createRef();
    this.step1 = React.createRef();
    this.step2 = React.createRef();
    this.step3 = React.createRef();
  }

  componentDidMount() {
    this.submitForm()
  }

  componentDidUpdate() {
    console.log('jobdesc',this.state['workingdescarray']);
    console.log('project',this.state['workingprojectarray']);
    console.log('tool',this.state['workingtoolarray']);
  }

  // Reset State Function
  resetState() {
    this.setState(initialState);
  }

  // Initial value
  initialValue = '-'

  // Primary state
  state = {
    name: "-",
    email: "-",
    position: "-",
    birthPlace: "-",
    birthDate: "-",
    gender: "-",
    status: "-",
    education: "-",
    edufrom: "-",
    eduto: "-",
    workingexp: "",
    workfrom: "",
    workto: "",
    workingpos: "",
    workingexpdata: [],
    workingdesc: "",
    workingdescarray: workingdescinput,
    workingproject: "",
    workingprojectarray: workingprojectinput,
    workingtool: "",
    workingtoolarray: workingtoolinput,
    capability: "",
    capabilities: [],
    latest_applicant: null,
    step: null,
    loading: false
  };

  // Add Input
  addInputJobDesc = () => {
    const lastId = this.state['workingdescarray'][this.state['workingdescarray'].length - 1].id;
    this.setState({
      workingdescarray : [
        ...this.state['workingdescarray'],
        {
          type: "text",
          id: lastId+1,
          value: ""
        }
      ]
    })
  };
  addInputProject = () => {
    const lastId = this.state['workingprojectarray'][this.state['workingprojectarray'].length - 1].id;
    this.setState({
      workingprojectarray : [
        ...this.state['workingprojectarray'],
        {
          type: "text",
          id: lastId+1,
          value: ""
        }
      ]
    })
  };
  addInputTool = () => {
    const lastId = this.state['workingtoolarray'][this.state['workingtoolarray'].length - 1].id;
    this.setState({
      workingtoolarray : [
        ...this.state['workingtoolarray'],
        {
          type: "text",
          id: lastId+1,
          value: ""
        }
      ]
    })
  };

  addInputCapabilities = () => {
    const lastId = this.state['capabilities'].length>0?this.state['capabilities'][this.state['capabilities'].length - 1].id:0;
    
    if(this.state['capability'] === ""){
      this.HandleClickWarning('Please fill the field before adding');
    } else {
      this.setState({
        capabilities : [
          ...this.state['capabilities'],
          {
            id: lastId+1,
            value: this.state['capability']
          }
        ]
      })
    }

    this.form.reset()
    this.setState({capability: ""});
  };

  // Form input on change
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  };

  handleChangeMultiple = (e, statename) => {
    e.preventDefault();

    const index = e.target.id;
    const newArr = this.state[statename].slice();
    newArr[index-1].value = e.target.value;
    if(statename === 'workingdescarray') {
      this.setState({workingdescarray: newArr});
    }else if(statename === 'workingprojectarray') {
      this.setState({workingprojectarray: newArr});
    }else if(statename === 'workingtoolarray') {
      this.setState({workingtoolarray: newArr});
    }else {
      this.HandleClickWarning('Error')
    }
    console.log(index, e.target.value)
  };

  // Submit Form Function
  submitForm = () => {
    if(this.state['step'] === 1) {
      this.addNewApplicant();
    } else if(this.state['step'] === 2) {
      if(this.state['workingexpdata'].length > 0){ 
        this.step2.current.style.display = 'none';
        this.step3.current.style.display = 'block';
        this.step1.current.style.display = 'none';
        this.setState({step: 3})
      } else {
        this.HandleClickWarning('Please add some experience')
      }
    } else if(this.state['step'] === 3) {
      if(this.state['capabilities'].length > 0){ 
        this.addNewCapability()
      } else {
        this.HandleClickWarning('Please add some capabilities')
      }
    } else {
      this.step1.current.style.display = 'block';
      this.step2.current.style.display = 'none';
      this.step3.current.style.display = 'none';
      this.setState({step: 1})
    }
  }

  // Apply Function
  addNewApplicant = () => {
    this.setState({loading: true})

    const validate = Object.keys(this.state).map((key) => {
      if(this.state[key] === this.initialValue){
        return false
      } 
      return true
    })

    if (!validate.includes(false)) {
      AxiosCustom.post("/api/applicant/store", this.state)
      .then((res) => {
        if(res.data.success === false) {
          this.HandleClickWarning(res.data.data.email[0]);
        } else {
          this.resetState()
          this.step1.current.style.display = 'none';
          this.step2.current.style.display = 'block';
          this.step3.current.style.display = 'none';
          this.setState({step: 2})
        }
      },
      error => {
        console.error('Error : ',error)
      });
    } else if (validate.includes(false)) {
      this.HandleClickWarning()
    } else {
      console.log(validate)
    }
  };

  // Get Experience Data
  fetchDataExperience = async () => {
    await AxiosCustom.get('/api/experience')
    .then((res) => {
      this.setState({workingexpdata: res.data})
    },
    error => {
      console.error('Error Fetching Data : ',error)
    })
  }

  // Add New Experience Function
  addNewExperience = async () => {
    this.setState({loading: true})

    if(this.state['workingexp']==='' || this.state['workfrom']==='' || this.state['workto']==='' || this.state['workingpos']==='' || this.state['workingdescarray'][0].value === '') {
      this.HandleClickWarning();
    } else {
      AxiosCustom.post("/api/experience/store", this.state)
      .then((res) => {
        if(res.data.success === false) {
          this.HandleClickWarning("Form Error, send CV to email instead.");
        } else {
          this.addJobdesc()
          this.addProject()
          this.addTool()
          this.fetchDataExperience()
          this.form.reset()
          this.setState({loading: false})
        }
      },
      error => {
        console.error('Error : ',error)
      })
    }
  };

  // Add Jobdesc
  addJobdesc = () => {
    AxiosCustom.post("/api/jobdesc/store", this.state)
    .then((res) => {
      if(res.data.success === false) {
        this.HandleClickWarning("Form Error, send CV to email instead.");
      } else {
        this.setState({workingdescarray: workingdescinput})
      }
    },
    error => {
      console.error('Error : ',error)
    });
  }

  // Add Project
  addProject = () => {
    AxiosCustom.post("/api/projects/store", this.state)
    .then((res) => {
      if(res.data.success === false) {
        this.HandleClickWarning("Form Error, send CV to email instead.");
      } else {
        this.setState({workingprojectarray: workingprojectinput})
      }
    },
    error => {
      console.error('Error : ',error)
    });
  }

  // Add Tool
  addTool = () => {
    AxiosCustom.post("/api/tools/store", this.state)
    .then((res) => {
      if(res.data.success === false) {
        this.HandleClickWarning("Form Error, send CV to email instead.");
      } else {
        this.setState({workingtoolarray: workingtoolinput})
      }
    },
    error => {
      console.error('Error : ',error)
    });
  }

  // Get Capabilties Data
  fetchDataCapabilities = async () => {
    await AxiosCustom.get('/api/capabilities')
    .then(res => {
        this.setState({workingexpdata: res.data})
        this.setState({loading: false})
    },
    error => {
        console.error('Error Fetching Data : ',error)
    })
  }

  // Add New Capability Function
  addNewCapability = () => {
    this.setState({loading: true})
    
    AxiosCustom.post("/api/capabilities/store", this.state)
    .then((res) => {
      if(res.data.success === false) {
        this.HandleClickWarning("Form Error, send CV to email instead.");
      } else {
        this.HandleClickAutoclose(true)
      }
    },
    error => {
      console.error('Error : ',error)
    });

    this.fetchDataCapabilities()
  };

  // Date Input
  DateField = () => {
    const [startDate, setStartDate] = useState(null);

    const handleChangeDate = (date) => {
      const thedate = new Date(date);
      const formattedDate = thedate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const valueOfInput = formattedDate;
      this.setState({ birthDate: valueOfInput });
    };

    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          handleChangeDate(date);
        }}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        maxDate={new Date()}
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={80}
        placeholderText="Click to select a date"
        className="form-control"
        name="birthDate"
      />
    );
  };

  // Alert warning
  HandleClickWarning(message = 'Please fill in all fields') {
    Swal.fire({
        title: message,
        type: "warning",
        confirmButtonColor: '#FF7A00',
        confirmButtonText: 'Okay',
        closeOnConfirm: true
    }).then((result) => {
      this.setState({loading: false})
    });
  }

  // Alert auto close
  HandleClickAutoclose(reload=false) {
    let timerInterval;
    Swal.fire({
      title: "Registration Success!",
      timer: 3000,
      timerProgressBar: true,
      confirmButtonColor: "#FF7A00",
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        this.setState({loading: false})
      } else {
        this.setState({loading: false})
      }

      if(reload === true) {
        window.location.reload();
      }
    });
  }

  // Only Number Function
  onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
      evt.preventDefault();
    }
    console.log(evt.which);
    console.log(evt.keyCode);
  }

  // Create PDF then send it to email with nodeJS
  // createAndDownloadPdf = () => {
  //   AxiosCustom.post('/create-pdf', this.state)
  //   .then(() => AxiosCustom.get('fetch-pdf', {responseType: 'blob'}))
  //   .then((res) => {
  //     const pdfBlob = new Blob([res.data], { type:'application/pdf' })
  //     saveAs(pdfBlob, 'newPdf.pdf')
  //   })
  // }

  render() {

    return (
      <div>
        <section className="career-form" ref={this.props.careerRef}>
          <Container>
            <h2>Registration Form</h2>
            <Form ref={(el) => this.form = el}>
              <div ref={this.step1}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Position</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="position"
                    onChange={this.handleChange}
                    defaultValue='-'
                  >
                    <option value='-' disabled>
                      Select Position
                    </option>
                    <option value="Mobile Developer">Mobile Developer</option>
                    <option value="Front-end Developer">
                      Front-end Developer
                    </option>
                    <option value="Java Developer">Java Developer</option>
                    <option value="Golang Developer">Golang Developer</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Row xs={1} sm={1} md={2} className="gy-3">
                    <Col>
                      <Form.Label>Place of Birth</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Place of Birth"
                        name="birthPlace"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Date of Birth</Form.Label>
                      <this.DateField />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Male"
                        name="gender"
                        value="Male"
                        type={type}
                        onChange={this.handleChange}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="gender"
                        value="Female"
                        type={type}
                        onChange={this.handleChange}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
                    onChange={this.handleChange}
                    defaultValue='-'
                  >
                    <option value='-' disabled>
                      Select Your Marital Status
                    </option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Latest Formal Education</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Latest Formal Education"
                    name="education"
                    onChange={this.handleChange}
                  />
                  <div className="d-flex gap-3 mt-3">
                    <Form.Control
                      type="text"
                      placeholder="Period From (Year)"
                      name="edufrom"
                      onChange={this.handleChange}
                      onKeyDown={this.onlyNumberKey}
                      pattern="[0-9]*"
                    />
                    <Form.Control
                      type="text"
                      placeholder="Period To (Year)"
                      name="eduto"
                      onChange={this.handleChange}
                      onKeyDown={this.onlyNumberKey}
                      pattern="[0-9]*"
                    />
                  </div>
                </Form.Group>
              </div>

              <div ref={this.step2}>
                <Table>
                    <thead>
                      <tr>
                        <th>Working Place</th>
                        <th>Working Period</th>
                        <th>Working Position</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state['workingexpdata'].map((item, i) => {
                      return (
                        <tr>
                          <td>{item.work_place}</td>
                          <td>{item.work_period}</td>
                          <td>{item.work_position}</td>
                        </tr>
                      );
                    })}
                    </tbody>
                </Table>
                <Form.Group className="mb-3">
                  <Form.Label>Working Experience</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Latest Working Place"
                    name="workingexp"
                    onChange={this.handleChange}
                  />
                  <div className="d-flex gap-3 mt-3">
                    <Form.Control
                      type="text"
                      placeholder="Period From (Year)"
                      name="workfrom"
                      onChange={this.handleChange}
                      onKeyDown={this.onlyNumberKey}
                    />
                    <Form.Control
                      type="text"
                      placeholder="Period To (Year)"
                      name="workto"
                      onChange={this.handleChange}
                      onKeyDown={this.onlyNumberKey}
                    />
                  </div>
                  <Form.Control
                    className="my-3"
                    type="text"
                    placeholder="Position"
                    name="workingpos"
                    onChange={this.handleChange}
                  />
                  {/* project */}
                  <div className="project">
                    <Form.Label>Worked Project</Form.Label>
                    <Button size='sm' type='button' onClick={()=>{this.addInputProject()}}><AiOutlinePlus /></Button>
                  </div>
                  {this.state['workingprojectarray'].map((item, i) => {
                    return (
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Project"
                        name="workingproject"
                        onChange={e => this.handleChangeMultiple(e,'workingprojectarray')}
                        id={item.id}
                      />
                    );
                  })}
                  {/* tool */}
                  <div className="tool">
                    <Form.Label>Used Tool</Form.Label>
                    <Button size='sm' type='button' onClick={()=>{this.addInputTool()}}><AiOutlinePlus /></Button>
                  </div>
                  {this.state['workingtoolarray'].map((item, i) => {
                    return (
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Tool Name"
                        name="workingtool"
                        onChange={e => this.handleChangeMultiple(e, 'workingtoolarray')}
                        id={item.id}
                      />
                    );
                  })}
                  {/* jobdesc */}
                  <div className="job-desc">
                    <Form.Label>Job Description</Form.Label>
                    <Button size='sm' type='button' onClick={()=>{this.addInputJobDesc()}}><AiOutlinePlus /></Button>
                  </div>
                  {this.state['workingdescarray'].map((item, i) => {
                    return (
                      <Form.Control
                        className="mb-3"
                        type="text"
                        placeholder="Job Description"
                        name="workingdesc"
                        onChange={e => this.handleChangeMultiple(e,'workingdescarray')}
                        id={item.id}
                      />
                    );
                  })}
                </Form.Group>
                <Button type="button" className="mt-3 w-100" onClick={()=>{this.addNewExperience()}}>
                  {this.state['loading'] ? <Loading size='small'/> : 'Add Experience'}
                </Button>
              </div>

              <div ref={this.step3}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          IT Capabilities :
                        </td>
                        <td>
                        {this.state['capabilities'].length>0 ? 
                          this.state['capabilities'].map((item, i) => {
                            return (
                              <>{i===0 ? item.value:', '+item.value}</>
                            );
                        }):'...'
                        }
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Form.Control
                    as="textarea"
                    placeholder="Your IT Capabilities such as programming language, frameworks and all"
                    name="capability"
                    size="md"
                    onChange={this.handleChange}
                  />
                  <Button type="button" className="mt-3 w-100" onClick={()=>this.addInputCapabilities()}> Add Capability </Button>
                </Form.Group>
              </div>

              <Button
                type="button"
                  className="mt-3 w-100"
                onClick={()=>{this.submitForm()}}
              >
                {this.state['loading'] ? <Loading size='small'/> : this.state['step'] === 3 ? 'Submit' : 'Next'}
              </Button>

              <div className="dot-container">
                <div className={`dot ${this.state['step'] === 1 || this.state['step'] === null  ? 'active' : ''}`}></div>
                <div className={`dot ${this.state['step'] === 2 ? 'active' : ''}`}></div>
                <div className={`dot ${this.state['step'] === 3 ? 'active' : ''}`}></div>
              </div>

            </Form>
          </Container>
        </section>
      </div>
    );
  }
}

export default CareerForm;
