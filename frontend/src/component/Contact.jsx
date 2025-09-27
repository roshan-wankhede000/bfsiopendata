import React from 'react'

function Contact() {
  return (
    <>
      <section class="py-5">
    <div class="container">
      <div class="row g-4">

        <div class="col-md-6">
          <h2 class="mb-4">Get in Touch</h2>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your full name" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" class="form-control" id="subject" placeholder="Enter subject" />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="5" placeholder="Write your message here"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div class="col-md-6">
          <h2 class="mb-4">Contact Information</h2>
          <ul class="list-unstyled">
            <li class="mb-3"><strong>📍 Address:</strong> 123 Finance Street, Mumbai, India</li>
            <li class="mb-3"><strong>📞 Phone:</strong> +91 98765 43210</li>
            <li class="mb-3"><strong>✉️ Email:</strong> support@financeco.com</li>
            <li class="mb-3"><strong>⏰ Working Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM</li>
          </ul>

          <div class="mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.385573927173!2d72.8777!3d19.07598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6308d9c12f3%3A0x2e8f8a0a6ff8c9db!2sMumbai%20City!5e0!3m2!1sen!2sin!4v1671874317497!5m2!1sen!2sin" 
              width="100%" height="250" style={{border:0}} allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>

      </div>
    </div>
  </section>
    </>
  )
}

export default Contact