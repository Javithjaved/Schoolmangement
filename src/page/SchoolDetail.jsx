import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import Input from "../Component/Input";
import axios from "axios";
import StudentInfo from "../asset/image/student.png"
const SchoolDetail = ({ schoolManagementdata, setschoolManagementData,tutor,setStudentInformation ,studentinformation,handleTutorChange }) => {
    const { id } = useParams();
    const [isTutor, setIstutor] = useState(false);
    const navigate = useNavigate();
   
    useEffect(() => {
        axios.get(`http://localhost:8080/api/school/${id}`)
            .then(res => {
                setschoolManagementData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);
  
 
    const handleChangeStudent = (e) => {
        setStudentInformation({ ...studentinformation, [e.target.name]: e.target.value })
    }

    const hanldeSubmitStudentinfo = () => {
        axios({
            method: "post",
            url: "http://localhost:8080/api/student",
            data: {
                studentName: studentinformation.studentName,
                address: studentinformation.address,
                school: {
                    id: schoolManagementdata.id,
                    schoolName: schoolManagementdata.schoolName,
                    location: schoolManagementdata.location
                }
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleSubmitTutordata = () => {
        axios({
            method: "post",
            url: "http://localhost:8080/api/tutor",
            data: {
                tutorName: tutor.tutorName,
                address: tutor.address,
                school: {
                    id: schoolManagementdata.id,
                    schoolName: schoolManagementdata.schoolName,
                    location: schoolManagementdata.location
                }
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const hanldeStudentdata = () => {
        console.log(studentinformation);
        hanldeSubmitStudentinfo();
    }
    const handleTutorSubmit = () => {
        navigate("/tutor-question")
        handleSubmitTutordata();
    }
    const handleTutor = () => {
        setIstutor(!isTutor);
    }
    return (
        <Container fluid className="p-5">
            <Row>
                <Col xs={7}>
                    <Image src={StudentInfo} fluid />
                </Col>
                <Col xs={5}>
                    <div className="p-5">
                        <h4 className="text-primary text-center">{schoolManagementdata.schoolName} </h4>
                        <p className="fs-6 text-primary text-center">{schoolManagementdata.location}</p>
                        <div className="mt-4">
                            <Input name={isTutor ? "tutorName" : "studentName"} label={isTutor ? "Tutor Name" : "Student Name"} onChange={isTutor ? handleTutorChange : handleChangeStudent} value={isTutor ? tutor.tutorName : studentinformation.studentName} />
                        </div>
                        <div className="mt-4 ">
                            <Input name={isTutor ? "address" : "address"} label={"Address"} onChange={isTutor ? handleTutorChange : handleChangeStudent} value={isTutor ? tutor.address : studentinformation.address} />
                        </div>
                        <div>
                            <p className="text-end text-primary fw-medium mt-2 " style={{ cursor: "pointer" }} onClick={handleTutor}>Are you tutor ?</p>
                        </div>
                        <div className="mt-4 text-center w-100 ">
                            <Button onClick={isTutor ? handleTutorSubmit : hanldeStudentdata} className="w-100">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SchoolDetail;