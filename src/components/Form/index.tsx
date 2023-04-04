import { useState } from 'react'

import YourInfo from '../YourInfo'

import styles from './styles.module.scss'

const Form = () => {
  const handleChildState = (_activeStep: any) => {
    setActiveStep(_activeStep)
  }

  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.leftSide}>
          <div className={styles.stepsContainer}>
            <div className={styles.step} onClick={() => setActiveStep(1)}>
              <div className={activeStep == 1 ? styles.numberActived : styles.number}>
                1
              </div>

              <div className={styles.details}>
                <div className={styles.stepCount}>
                  STEP 1
                </div>

                <div className={styles.yourInfo}>
                  YOUR INFO
                </div>
              </div>
            </div>

            <div className={styles.step} onClick={() => setActiveStep(2)}>
              <div className={activeStep == 2 ? styles.numberActived : styles.number}>
                2
              </div>

              <div className={styles.details}>
                <div className={styles.stepCount}>
                  STEP 2
                </div>

                <div className={styles.yourInfo}>
                  SELECT PLAN
                </div>
              </div>
            </div>

            <div className={styles.step} onClick={() => setActiveStep(3)}>
              <div className={activeStep == 3 ? styles.numberActived : styles.number}>
                3
              </div>

              <div className={styles.details}>
                <div className={styles.stepCount}>
                  STEP 3
                </div>

                <div className={styles.yourInfo}>
                  ADD-ONS
                </div>
              </div>
            </div>

            <div className={styles.step} onClick={() => setActiveStep(4)}>
              <div className={activeStep == 4 ? styles.numberActived : styles.number}>
                4
              </div>

              <div className={styles.details}>
                <div className={styles.stepCount}>
                  STEP 4
                </div>

                <div className={styles.yourInfo}>
                  SUMMARY
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          {activeStep == 1 ?
            <>
              <YourInfo parentState={activeStep} callback={handleChildState} />
            </>
          : null}
        </div>
      </div>
    </div>
  )
}

export default Form