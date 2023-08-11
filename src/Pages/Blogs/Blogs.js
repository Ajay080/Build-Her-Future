import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Blogs = () => {

  const [backendData, setBackendData]=useState([{}])
  const [jobs, setJobs] = useState([]);
  const [movie, setMovie] = useState([]);
  
  const getData=async()=>{
    const response=await axios.get("http://localhost:5000/api");
    setBackendData(response.data);
  }

  const fetchMovie = async () => {
    try {
      const response = await axios.get('http://localhost:5000/movies');
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(()=>{
    getData();
    // fetchJobs();
    fetchMovie();
  },[]);
//   useEffect(()=>{
//     fetch("http://localhost:5000/api").then(
//         response=>response.json()
//     ).then(
//         data => {
//             // JSON.parse(JSON.stringify(data))
//             setBackendData(data)
//             // console.log(data)
//         }
//     )
//   },[])
  return (
    <div>
        <section>
        <button>create</button>
        {(typeof backendData.users==='undefined')?(
            <p>Loading....</p>
        ):(
            backendData.users.map((user, i)=>(
                <p key={i}>{user}</p>
            ))
        )} 
        </section>
        <section>
            <h1>Women Job Vacancies</h1>
            <div>
                <div>{jobs.jobTitle}</div>
                {jobs.map((job, index) => (
                <div key={index}>
                    <h3>{job.jobTitle}</h3>
                    <p>Company: {job.company}</p>
                    <p>Location: {job.location}</p>
                    <p>Experience: {job.experience}</p>
                    <p>Skills: {job.skills}</p>
                    <hr />
                </div>
                ))}
            </div>           
        </section>
        <section>
            <h1>Movie sec</h1>
            <div>
                <div>{movie.jobTitle}</div>
                {movie.map((film, index) => (
                <div key={index}>
                    <h3>title: {film.jobTitle}</h3>
                    <p>Company: {film.company}</p>
                    {/* <p>Location: {job.location}</p>
                    <p>Experience: {job.experience}</p>
                    <p>Skills: {job.skills}</p> */}
                    <hr />
                </div>
                ))}
            </div>           
        </section>
    </div>
  )
}

export default Blogs