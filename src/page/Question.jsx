import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Input from "../Component/Input";
import { useParams } from "react-router-dom";

const Question = ({ tutor, studentinformation, handleTutorChange }) => {
    const { id } = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleQuestion = () => {
        axios({
            method: "post",
            url: `http://localhost:8080/api/question/${"654"}`,
            data: {
                questionText: tutor.questionText,
                tutor: {
                    id: tutor.id,
                    tutorName: tutor.tutorName,
                    address: tutor.address,
                    school: tutor.school 
                }
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        });
    };

    const handleSubmitQuestion = () => {
        handleQuestion();
        handleClose();
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col className="p-3">
                        <div className="text-end">
                            <Button onClick={handleShow}>Create Question</Button>
                        </div>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Create a New Question</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    <Input 
                                        label={"Question"} 
                                        name={"questionText"} 
                                        onChange={handleTutorChange} 
                                        value={tutor.questionText} 
                                    />
                                    <div className="p-2 text-end">
                                        <Button onClick={handleSubmitQuestion}>Submit Question</Button>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Question;
