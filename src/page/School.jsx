import { Col, Container, Row, Image, Button } from "react-bootstrap";
import schoolImage from "../asset/image/School-Image.jpg"
import Input from "../Component/Input.jsx"
import {useState } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
const School = () => {
    const [schooldata, setSchoolData] = useState({
        schoolName: "",
        location: ""
    })
    const handleChange = (e) => {
        setSchoolData({ ...schooldata, [e.target.name]: e.target.value })
    }
  const schoolDetail=()=>{

      axios({
          method: "post",
          url: 'http://localhost:8080/api/school',
          data: schooldata
      })
          .then(res => {
              console.log('Response:', res);

          })
          .catch(err => {
              console.error('Error:', err);
          });
  }
    const handleClick = () => {
        toast("Add your School")
        schoolDetail();
        window.location.href = "/school-database"
    }
    return (
        <Container fluid className="p-0">
            <Row>
                <Col xs={7}  className="p-0">
                    <div >
                        <Image src={schoolImage} fluid />
                    </div>
                </Col>
                <Col xs={5} className="p-4">
                    <div className="mt-3">
                        <h1 className="fs-3 ">School Management </h1>
                    </div>
                    <div className="p-2 mt-3">
                        <Input
                            label={"School Name"}
                            name="schoolName"
                            value={schooldata.schoolName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="p-2 mt-3">
                        <Input
                            label={"Location"}
                            name="location"
                            value={schooldata.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="p-2 mt-3">
                        <Button
                            className="w-100 p-2"
                            variant="dark"
                            onClick={handleClick}
                        >Add School</Button>
                    </div>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    )
}
export default School;