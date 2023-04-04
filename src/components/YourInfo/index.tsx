import { useState } from 'react'

import styles from './styles.module.scss'

interface State {
  callback: any,
  parentState: number,
}

const YourInfo = ({callback, parentState = 1}:State) => {
  const [activeStep, setActiveStep] = useState(parentState)
  console.log(activeStep)

  const handleClick = () => {
    setActiveStep(activeStep + 1)
    const data = activeStep
    callback(data)
    console.log(activeStep)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          Personal Info
        </div>


        <div className={styles.info}>
          Please provide your name, email address, and phone number.
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.label}>
            Name
          </div>

          <div className={styles.input}>
            <input type='text' placeholder='e.g. Stephen King'  className={styles.inputHTML} />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.label}>
            Email Address
          </div>

          <div className={styles.input}>
            <input type='text' placeholder='e.g. stephenking@lorem.com' className={styles.inputHTML} />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.label}>
            Phone Number
          </div>

          <div className={styles.input}>
            <input type='text' placeholder='e.g. +1 234 567 890' className={styles.inputHTML} />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={handleClick}>
            Next Step
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourInfo