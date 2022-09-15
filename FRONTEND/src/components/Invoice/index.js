import React from 'react'
import { StepperContext } from '../../contexts/stepperContext'
import Invoice from './Invoice'


const index = () => {
  return (
    <div>
        <StepperContext.Consumer >
            <Invoice/>
        </StepperContext.Consumer></div>
  )
}

export default index