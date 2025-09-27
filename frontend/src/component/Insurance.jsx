import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { InsuranceContext } from '../context/InsuranceContextFile'

function Insurance() {
  const [ensurance, setEnsurance] = useState([])
  const [search, setSearch] = useState("")

  let {url} = useContext(InsuranceContext)

  async function getAllInsurance() {
    console.log(url);
    
    try {
      let response = await axios.get(`${url}/getInsurance`)
      setEnsurance(response.data.data) 
    } catch (err) {
      console.error("Error fetching products:", err)
    }
  }

  useEffect(() => {
    getAllInsurance()
  }, [])

  const filteredEnsurance = ensurance.filter(item =>
    Object.values(item).some(value =>
      (value || "").toString().toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <div className="container mt-4">

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search insurance..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">Company Name</th>
            <th scope="col">Hospital</th>
            <th scope="col">Address</th>
            <th scope="col">State</th>
            <th scope="col">City/Place</th>
            <th scope="col">Pincode</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnsurance.map((data, index) => (
            <tr key={data._id || index}>
              <th scope="row">{index + 1}</th>
              <td>{data.compony || "-"}</td>
              <td>{data.hospital || "-"}</td>
              <td>{data.address || "-"}</td>
              <td>{data.state || "-"}</td>
              <td>{data.place || "-"}</td>
              <td>{data.pincode || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Insurance
