import styles from '../styles/signin.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { BiLeftArrowAlt } from 'react-icons/bi'
import Link from 'next/link'
import { Form, Formik } from 'formik'
import LoginInput from '../components/inputs/loginInput/'

export default function signin ({ country }) {
  return (
    <>
      <Header country='flag' />

      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Welcome to Ecomshop
              <Link href=''>Click here</Link>
            </span>
          </div>

          {/* create sign in-up form with Formik */}
          <div className={styles.login__form}>
            <h1>Sign In</h1>
            <p>Get access to the best Ecommerce service</p>
            <Formik>
              {form => (
                <Form>
                  <LoginInput icon='email' placeholder='Email Address' />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country='France' />
    </>
  )
}
