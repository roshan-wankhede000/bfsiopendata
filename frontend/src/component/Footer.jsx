import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer class="bg-dark text-light mt-auto py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <h5>About Us</h5>
          <p class="small">
            We provide reliable insurance data, analysis, and insights to help you make informed decisions.
          </p>
        </div>

        <div class="col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><Link to="/" class="text-decoration-none text-light">Home</Link></li>
            <li><Link to="/about" class="text-decoration-none text-light">About</Link></li>
            {/* <li><Link to="/ensurance" class="text-decoration-none text-light">All Insurance</Link></li> */}
            <li><Link to="/aboutData" class="text-decoration-none text-light">Data</Link></li>
          </ul>
        </div>

        <div class="col-md-4 mb-3">
          <h5>Contact</h5>
          <p class="small mb-1">📍 Mumbai, India</p>
          {/* <p class="small mb-1">📞 +91 98765 43210</p> */}
          <p class="small">✉️ bfsiopendata@gmail.com</p>
        </div>
      </div>

      <hr class="border-light" />

      <div class="text-center">
        <p class="mb-0 small">© 2025 Insurance Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer