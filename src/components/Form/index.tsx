import styles from './styles.module.scss'

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.leftSide}>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.number}>
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

            <div className={styles.step}>
              <div className={styles.number}>
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

            <div className={styles.step}>
              <div className={styles.number}>
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

            <div className={styles.step}>
              <div className={styles.number}>
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

        </div>
      </div>
    </div>
  )
}

export default Form