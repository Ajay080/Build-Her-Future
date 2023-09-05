import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Blogs = () => {

  const [backendData, setBackendData]=useState([{}])
  const [jobs, setJobs] = useState([]);
  const [movie, setMovie] = useState([]);
  
  const getData=async()=>{
    const response=await axios.get("http://localhost:8000/api");
    setBackendData(response.data);
  }

  const fetchMovie = async () => {
    try {
      const response = await axios.get('http://localhost:8000/movies');
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const fetchJobs = async () => {
    fetch("https://www.linkedin.com/voyager/api/graphql?variables=(start:0,origin:SWITCH_SEARCH_VERTICAL,query:(keywords:software%20engineer,flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:resultType,value:List(PEOPLE))),includeFiltersInResponse:false))&&queryId=voyagerSearchDashClusters.a789a8e572711844816fa31872de1e2f", {
      "headers": {
        "accept": "application/vnd.linkedin.normalized+json+2.1",
        "accept-language": "en-US,en;q=0.9",
        "csrf-token": "ajax:7685046803791350453",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-li-lang": "en_US",
        "x-li-page-instance": "urn:li:page:d_flagship3_search_srp_people;AdCA/+fYQESHpaWMGE3eog==",
        "x-li-track": "{\"clientVersion\":\"1.12.9848\",\"mpVersion\":\"1.12.9848\",\"osName\":\"web\",\"timezoneOffset\":5.5,\"timezone\":\"Asia/Calcutta\",\"deviceFormFactor\":\"DESKTOP\",\"mpName\":\"voyager-web\",\"displayDensity\":1,\"displayWidth\":1920,\"displayHeight\":1080}",
        "x-restli-protocol-version": "2.0.0",
        "cookie": "bcookie=\"v=2&d78ddb84-db1c-49d2-8ebf-1c06ad6ef9da\"; li_sugr=f3ad73a2-48c8-4475-9725-1ae8d1461f48; bscookie=\"v=1&20210403133423cc5c24e2-cf3e-4c11-828e-778b8087b148AQEh0IQHwFacRGHIZ7FCxli1aE8CYACV\"; li_rm=AQEoRSXDBKFhoQAAAYKq6f_QLsb5wFCjX92d8wjoIsYG0VZ5oSnA_dIpeCYXYImP77P2Tw_sR4Zu1iR9LPK8PT4egh-Rzk6lwN7TEiWmqx6gH6JzBLO8uEUb; liap=true; JSESSIONID=\"ajax:7685046803791350453\"; li_theme=light; li_theme_set=app; mbox=session#3cb2d3628edb4dada771ddb4e376a256#1677579342|PC#3cb2d3628edb4dada771ddb4e376a256.31_0#1693129482; gpv_pn=business.linkedin.com%2Fen-in%2Ftalent-solutions%2Fpost-jobs%2Fjobs-features; s_tslv=1677577485818; s_ips=1038; s_tp=4993; timezone=Asia/Calcutta; _guid=e49cbe2c-74fb-4dd6-934b-d03fa0a12b55; aam_uuid=63302853993572141810224944185748971649; li_at=AQEDATJw9qEFgij9AAABhD9HYYoAAAGJkV0MwU0AYoI1Kqq8zWSHCmg26OqdnB0PM5AdixNgoUG8mfXhgrSOt7lX8BKoNjallyU4UkbTLaGLzvcokVNNO1ylF7Bw_e9j9zYu_WfE2s1HJRMxwl18abgw; AnalyticsSyncHistory=AQL-mBuVPriOxAAAAYmED8pLuyPQK-j_EAvjNsTkuu9a3694COUONG7FGIS6LiZoJ2n-yCLAgH7iHN0Rkh50PQ; lms_ads=AQGJC9aFPRke1wAAAYmED812rSxwFvAuY4hsMd_FJ0xl-5JK9B3RpyWK4vwfHSHxLTJl3TeLN6UMyefL_7kEQx1kCNdDp9AQ; lms_analytics=AQGJC9aFPRke1wAAAYmED812rSxwFvAuY4hsMd_FJ0xl-5JK9B3RpyWK4vwfHSHxLTJl3TeLN6UMyefL_7kEQx1kCNdDp9AQ; lang=v=2&lang=en-us; UserMatchHistory=AQK6xFBlrbuhhAAAAYmQ56rqKCNvxPe-SBWmjfnz7npPyY6FjhHBf755bCwcNdTA2UAAoZGD4C11P-rM0hK7WHpvy6RpXKWFc2w2Qe12silHel5CcgAa8MUwtjLmiPOyy4xd4ukfs5CuXzYe6iHjYyRAONs9HH1FEN_F6LhanJG1a_iv-k3XQG8vYdOnHdxPBPOs3xRqDmoTKx6d_9Y7PwygBt96oLDDDhMCV6r8e7p4Hly59oLChUgaLBbKGiy0WDTMg-Np2hj1qgNUXnyrDPX8k61DWKWkhAXLy0C6iXtBv11qDbTD0Qvh4rAwkosW5Vrvgu5SUuzHzr3omJQMPa71HNFxaQI; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19565%7CMCMID%7C62753770800407997900274726961143190346%7CMCAAMLH-1690958053%7C12%7CMCAAMB-1690958053%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1690360453s%7CNONE%7CMCCIDH%7C1718792499%7CvVersion%7C5.1.1; lidc=\"b=VB69:s=V:r=V:a=V:p=V:g=4067:u=514:x=1:i=1690353254:t=1690355480:v=2:sig=AQEr8a_gxmBGxQiymP3xaRctZR4AaY_W\"",
        "Referer": "https://www.linkedin.com/search/results/all/?keywords=software%20engineer&origin=HISTORY&sid=PEt",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });
    try {
      const response = await axios.get('http://localhost:8000/women-jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    // getData();
    fetchJobs();
    // fetchMovie();
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