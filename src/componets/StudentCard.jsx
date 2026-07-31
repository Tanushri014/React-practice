// 🟢 Level 1 – Components & JSX
// Task 1: Student Information Card

// Create a card that displays:

// Name
// Branch
// Year
// CGPA
// College

// Concepts: Components, JSX, CSS





function StudentCard(){
    return(
<div className="outer">
    <div className="inner">
<form>
    <label>Name</label>
    <br/>
    <input type="text"/>
<br/>
    <label>Branch</label>
    <br/>
    <input type="text"/>
<br/>
    <label>College</label>
    <br/>
    <input type="text"/>
<br/>
    <label>cgpa</label>
    <br/>
    <input type="number"/>
    <br/>
</form>
    </div>
</div>




    )
}
export default StudentCard;