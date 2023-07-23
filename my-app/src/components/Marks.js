import React,{useState} from 'react'
//import InputBox from './InputBox'

const Marks = ({marks}) => {
  console.log("marks",marks);
  
    const ma = marks.map((mark) => ({
      id: mark.id,
      sname: mark.sname,
      s1: "",
      s2: "",
      s3: "",
      s4: "",
      s5: "",
      s6: "",
    }))
    const [mars, setMars] = useState(ma);
    
  
console.log("mars",ma);  
  
const handleInptutChange = (event,index) => {
  const {name,value} = event.target;
  console.log(event.target);
  const updateMarks = mars.map((item,i)=>i === index ? {...item,[name]:value}:item);
setMars(updateMarks);
};

const sumRowValues = (mar) => {
  //console.log(mar)
  return Object.values(mar).reduce((acc,curr) => {
    const value = parseFloat(curr);
    return isNaN(value) ? acc : acc + value;
  },0);
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Data Submitted")
}

  return (
    <div>
      <h1>Marks Entry:</h1>
      <form onSubmit={handleSubmit}>
            <table className="table table-border table-striped table-dark w-75 mx-auto">
                <thead className="thead-dark">
                    <tr> 
                    <th>Sl.No.</th>
                    <th>Student Name</th>
                    <th>English</th>
                    <th>Sanskrit</th>
                    <th>Maths-A</th>
                    <th>Maths-B</th>
                    <th>Physics</th>
                    <th>Chemistry</th>
                    <th>Total</th>
                    </tr>
                </thead>
             <tbody> 
                {ma.map((mar,index)=> (
                    <tr key={mar.id}>
                        <td>{index+1}</td>
                        <td>{mar.sname}</td>
                        <td><input type='text' size="4" name="s1" onClick={(e)=>handleInptutChange(e,mar.id)}  /></td>
                        <td><input type='text' size="4" name="s2" onClick={(e)=>handleInptutChange(e,mar.id)}  /></td>
                        <td><input type='text' size="4" name="s3" onClick={(e)=>handleInptutChange(e,mar.id)}  /></td>
                        <td><input type='text' size="4" name="s4" onClick={(e)=>handleInptutChange(e,mar.id)}  /></td>
                        <td><input type='text' size="4" name="s5" onClick={(e)=>handleInptutChange(e,mar.id)}  /></td>
                        <td><input type='text' size="4" name="s6" onClick={(e)=>handleInptutChange(e,mar.id)}  /></td>
                        <td>{sumRowValues(mar)}</td>
                    </tr> )) 
                }
                </tbody>
            </table>
            <button type='submit'>Submit</button>
            </form>
    </div>
  )
};

export default Marks
