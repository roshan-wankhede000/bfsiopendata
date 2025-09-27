import React from 'react'

function Login() {
  return (
    <>
       <div className="container my-5">
        <div className="w-100 d-flex justify-content-center">
    <div class="card shadow-lg p-4 w-50">
    <h3 class="text-center mb-4">Login</h3>
    
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" required />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password" required />
      </div>

      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="remember" />
          <label class="form-check-label" for="remember">Remember me</label>
        </div>
        <a href="#" class="text-decoration-none">Forgot password?</a>
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
    </div>
        </div>
       </div>
    </>
  )
}

export default Login