import React from 'react'

function Frame() {
  return (
    <div className="container py-5 border">
      
      {/* Responsive Iframe using Bootstrap ratio */}
      <div className="ratio ratio-16x9">
        <iframe
          src="https://lookerstudio.google.com/embed/reporting/b311387f-204c-489a-879d-5f8594c5019e/page/RA7LF"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          title="Google Looker Studio Report"
        ></iframe>
      </div>
    </div>
  )
}

export default Frame
