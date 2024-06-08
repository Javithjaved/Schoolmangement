import { Col, Container, Row, Image, Button } from "react-bootstrap";
import schoolImage from "../asset/image/School-Image.jpg"
import { Icon } from "@iconify/react/dist/iconify.js";
import Input from "../Component/Input.jsx"
import { useState } from "react";
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
                console.log('Response:', res.data);
            })
            .catch(err => {
                console.error('Error:', err);
            });
    }
 
    const handleClick = () => {
        toast("Add your School")
        schoolDetail();
    }
    return (
        <Container fluid className="p-0">
            <Row>
                <Col xs={7} className="p-0">
                    <div >
                        <Image src={schoolImage} fluid />
                    </div>
                </Col>
                <Col xs={5} className="p-4">
                    <div className="mt-3">
                        <h1 className="fs-3 ">School Management <span><Icon className="float-end mx-3" icon="logos:facebook" /></span>  <span><Icon className="float-end" icon="logos:twitter" /></span></h1>
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