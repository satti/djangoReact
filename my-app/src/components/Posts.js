import React, { useContext} from 'react'
const Posts = ({students,currentPage}) => {
  return (
    <div>
      <h1>Students Data</h1>
            <table className="table table-border table-striped table-dark w-75 mx-auto">
                <thead className="thead-dark">
                    <tr> 
                    <th>Sl.No.</th>
                    <th>Student Name</th>
                    <th>Father Name</th>
                    <th>Address</th>
                    </tr>
                </thead>
             <tbody> 
                {students.map((student,index)=> (
                    <tr key={index}>
                        <td>{currentPage+index+1}</td>
                        <td>{student.sname}</td>
                        <td>{student.fname}</td>
                        <td>{student.address}</td>
                    </tr> )) 
                }
                </tbody>
            </table>
    </div>
  )
}

export default Posts
