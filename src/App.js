import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import School from './page/School';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SchoolDatabase from './page/SchoolDatabase.jsx';
import SchoolDetail from "./page/SchoolDetail.jsx"
import { useState } from 'react';
import Question from './page/Question.jsx';
function App() {
  const [SchoolDatas, setSchoolDatas] = useState([]);
  const [schoolManagementdata,setschoolManagementData]=useState({
    schoolInformation:[],

  })
  const [tutor, setTutor] = useState({
    tutorName: "",
    address: "",
    questionText:""
})
const [studentinformation, setStudentInformation] = useState({
  studentName: "",
  address: ""
})
const handleTutorChange = (e) => {
  setTutor({ ...tutor, [e.target.name]: e.target.value })
}
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<School />}></Route>
        <Route path='/school-database' element={<SchoolDatabase setSchoolDatas={setSchoolDatas} SchoolDatas={SchoolDatas}/>}></Route>
        <Route path='/school-details/:id' element={<SchoolDetail SchoolDatas={SchoolDatas} setschoolManagementData={setschoolManagementData} schoolManagementdata={schoolManagementdata} tutor={tutor} setTutor={setTutor} setStudentInformation={setStudentInformation} studentinformation={studentinformation} handleTutorChange={handleTutorChange} />}></Route>
        <Route path='/tutor-question' element={<Question tutor={tutor} setTutor={setTutor} setStudentInformation={setStudentInformation} studentinformation={studentinformation} handleTutorChange={handleTutorChange}  />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
