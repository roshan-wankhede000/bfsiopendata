import axios from 'axios'
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { InsuranceContext } from '../context/InsuranceContextFile'

function AdminAboutData() {
  let navigate = useNavigate()
  let {url} = useContext(InsuranceContext)

  function handleSubmit(e) {
    console.log("button click");
    
    e.preventDefault()

    let data = new FormData(e.target)

    axios.post(`${url}/adminAboutData`,data,{
      headers: {"Content-Type": "multipart/form-data"}
    }).then(()=>{
      console.log("Dictionary Sent Successfully!");
      navigate("/")
    })
    .catch((err) => {
      console.log(err.response);
    });
  }

  return (
    <>
    <div className="container-fluid my-5">
            <div className="row">
        <div className="col-md-2">
          <p>DashBoard</p>
          <div className="d-flex flex-column gap-2" style={{ width: '200px' }}>
            <NavLink to="/admin" className="btn btn-outline-danger d-flex align-items-center">
              <span className="me-2">➕</span> Add Insurance
            </NavLink>

            <NavLink to="/adminAboutData" className="btn btn-outline-secondary d-flex align-items-center text-decoration-none">
              <span className="me-2">🗂️</span> Add About-Data
            </NavLink>
          </div>
        </div>
        <div className="col-md-10">
          <form onSubmit={(e)=>handleSubmit(e)} method='post' encType='multipart/form-data'>
        <div className="mb-3">
          <label for="description" className="form-label">Description</label>
          <input className="form-control" name='desc' id="description" rows="3" placeholder="Enter file description..." />
        </div>

        {/* <div className="mb-3">
          <label for="csvFile" className="form-label">Upload CSV File</label>
          <input className="form-control" type="file" name='csvfile' id="csvFile" accept=".csv" />
        </div> */}

        <div className="mb-3">
          <label for="csvFileLink" className="form-label">Upload CSV File Link</label>
          <input className="form-control" type="text" name='csvfilelink' id="csvFileLink" />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminAboutData