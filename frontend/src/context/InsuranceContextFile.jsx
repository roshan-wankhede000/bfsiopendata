import React, { createContext } from 'react'

export const InsuranceContext = createContext()

function InsuranceContextFile({children}) {

    // let url="http://localhost:8000"
    let url="https://complance-digest.onrender.com"

  return (
<InsuranceContext.Provider value={{ url }}>
  {children}
</InsuranceContext.Provider>
  )
}

export default InsuranceContextFile