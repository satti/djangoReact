import React,{useEffect, useState} from "react";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import axios from "axios";


const StudentListPage = () => {
    const [students, setStudents] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    useEffect(()=> {
        getStudents()
    },[])

    let getStudents = async () => {
        let response = await axios.get('http://localhost:3537/api')
        console.log(response.data)
        setStudents(response.data)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = students.slice(indexOfFirstPost,indexOfLastPost)
    

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return(
        <div>
            
            <div className="container"> 
            <>
            <Posts 
            students={currentPosts}
            currentPage = {indexOfFirstPost} 
            />
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts ={students.length}
            paginate={paginate}
            />
            </>
        </div>
        </div>
    )
}

export default StudentListPage