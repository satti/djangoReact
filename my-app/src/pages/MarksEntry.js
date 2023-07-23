import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Marks from '../components/Marks';
const MarksEntry = () => {
const [markss,setMarks] = useState([]);
    useEffect(()=> {
        getStudents();
    },[])

    let getStudents = async () => {
        let response = await axios.get('http://localhost:3537/api');
        //console.log(response.data)
        setMarks(response.data)
    }

  return (
    <div>
      <Marks marks={markss}/>
    </div>
  )
}

export default MarksEntry
