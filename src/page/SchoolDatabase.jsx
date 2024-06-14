import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Input from "../Component/Input";
import { useNavigate } from "react-router-dom";
const Tableheader = ["Id", "SchoolName", "Location"];
const SchoolDatabase = ({SchoolDatas,setSchoolDatas}) => {
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8080/api/school")
            .then(res => { setSchoolDatas(res.data) })
            .catch(err => { console.log(err); })
    }, []);
    const hanldeSearchApi = () => {
        axios({
            method: "get",
            url: "http://localhost:8080/api/school/search",
            data: SchoolDatas.schoolName
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleClickschoolId = (id) => {
        axios({
            method: "get",
            url: `http://localhost:8080/api/school/${id}`
        })
            .then(res => {
                console.log(res);
                navigate(`/school-details/${id}`)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="d-flex float-end mx-3">
                <Input />
                <Button className="h-50 mt-4 mx-2 mb-2" onClick={hanldeSearchApi}>Search</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {Tableheader.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {SchoolDatas.map((school, index) => (
                        <tr key={index} onClick={() => handleClickschoolId(school.id)}>
                            <td >{school.id}</td>
                            <td>{school.schoolName}</td>
                            <td>{school.location}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default SchoolDatabase;