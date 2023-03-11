import React from 'react'
import Calculator from './Calculator'
import Checklist from './Checklist'



const Tools = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          Calculator
          <Calculator/>
      
        </div>
        <div className='col-lg-6'>
          Checklist
          <Checklist/>

        </div>
      </div>
      
    </div>
  )
}

export default Tools
