import axios from 'axios'
import React, { useContext } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { InsuranceContext } from '../context/InsuranceContextFile'

function Admin() {
  let navigate = useNavigate()
  let {url} = useContext(InsuranceContext)
  function handleSubmit(e) {
    
    e.preventDefault()

   let data = {
    compony: e.target.compony.value,
    hospital: e.target.hospital.value,
    address: e.target.address.value,
    state: e.target.state.value,
    place: e.target.place.value,
    pincode: e.target.pincode.value
  };
    

    axios.post(`${url}/addInsurance`, data)
    .then(()=>{
      console.log("success, dictionary sent")
      navigate("/")
    })
    

  }
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <p>DashBoard</p>

        <div className="d-flex flex-column gap-2" style={{width: '200px'}}>
    <NavLink to="/admin" className="btn btn-outline-danger d-flex align-items-center">
      <span className="me-2">➕</span> Add Insurance
    </NavLink>

    <NavLink  to="/adminAboutData" className="btn btn-outline-secondary d-flex align-items-center text-decoration-none">
      <span className="me-2">🗂️</span> Add About-Data
    </NavLink>
  </div>

      </div>
      <div className="col-md-10">
            <div className='d-flex justify-content-center my-5'>
        <div className="card shadow-lg p-4 w-75">
    <h3 className="text-center mb-4">Insurance Form</h3>
    
    <form onSubmit={(e)=>handleSubmit(e)} method='post'>
      <div className="mb-3">
        <label for="company" className="form-label">Company Name</label>
        <input type="text" className="form-control" name="compony" placeholder="Enter insurance company" required />
      </div>

      <div className="mb-3">
        <label for="company" className="form-label">Hospital Name</label>
        <input type="text" className="form-control" name="hospital" placeholder="Enter insurance company" required />
      </div>

      <div className="mb-3">
        <label for="address" className="form-label">Address</label>
        <textarea className="form-control" name="address" rows="3" placeholder="Enter address" required></textarea>
      </div>

       <div className="mb-3">
        <label for="address" className="form-label">State</label>
        <textarea className="form-control" name="state" rows="3" placeholder="Enter address" required></textarea>
      </div>

      <div className="mb-3">
        <label for="date" className="form-label">City/Place</label>
        <input type="date" className="form-control" name='place' required />
      </div>

      <div className="mb-3">
        <label for="eid" className="form-label">Pincode</label>
        <input type="text" className="form-control" name="pincode" placeholder="Ensurance ID" required />
      </div>

      <button type='submit' className='btn btn-outline-dark'>Submit</button>
      </form>
    </div>
    </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Admin