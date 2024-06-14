import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Tableheader = ["Id", "SchoolName", "Location"];
const SchoolDatabase = () => {
    const [SchoolDatas, setSchoolDatas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/school")
            .then(res => { setSchoolDatas(res.data) })
            .catch(err => { console.log(err); })
    }, []);

    return (
        <div>
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
                        <tr key={index}>
                            <td>{school.id}</td>
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