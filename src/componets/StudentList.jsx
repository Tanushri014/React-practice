// Student List

// Display students with:

// Name
// Marks

// Show only students scoring above 70.

// Concepts

// filtering
// conditional rendering

import { useState } from "react";

//
function StudentList(){

     const [studentList]=useState([{id:Date.now(),name:"radha",marks:60},
{id:Date.now(),name:"maya",marks:80}]);


const[student,setstudent]=useState("");
const[marks,setmarks]=useState(0);

const handleinputChange=(e)=>{
    
    setstudent(e.target.value);
  
}
const handlemarksChange=(e)=>{
    
   
    setmarks(Number(e.target.value));
}
const filteredStudents = studentList.filter((item) => {
    return (
      item.name.toLowerCase().includes(student.toLowerCase()) &&
      item.marks > marks
    );
  });


return(
    <div>
<h1>Student List</h1>
<p>Search By Name</p>
<input type="text" value={student} onChange={handleinputChange} placeholder="search"/>
<p>Search by marks</p>
<input type="number" value={marks} onChange={handlemarksChange} placeholder="Enter your marks"/>
<p><strong>Student List</strong></p>
 <ul>
        {filteredStudents.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Marks: {item.marks}
          </li>
        ))}
      </ul>

    </div>
)
}

export default StudentList;