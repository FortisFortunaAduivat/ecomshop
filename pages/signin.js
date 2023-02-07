/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/signin.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { BiLeftArrowAlt } from 'react-icons/bi'
import Link from 'next/link'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import LoginInput from '../components/inputs/loginInput/'
import { useState } from 'react'
import CircledIconBtn from '../components/button/circledIconBtn'

// set the user information
const intialvalues = {
  login_email: '',
  login_password: ''
}

export default function signin ({ country }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // set user parameters
  const [user, setUser] = useState(intialvalues)
  const { login_email, login_password } = user
  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  console.log(user)
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required('Email address is required.')
      .email('Please enter a valid email address.'),
    login_password: Yup.string().required('Please enter a password')
  })
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

            {/*Reinitialize the values of the user after logged in */}
            <Formik
              enableReinitialize
              intialvalues={{ login_email, login_password }}
              validationSchema={loginValidation}
            >
              {form => (
                <Form>
                  <LoginInput
                    type='text'
                    name='login_email'
                    icon='email'
                    placeholder='Email Address'
                    onChange={handleChange}
                  />
                  <LoginInput
                    type='password'
                    name='login_password'
                    icon='password'
                    placeholder='Password'
                    onChange={handleChange}
                  />
                  <CircledIconBtn type='submit' text='Sing in' />
                  <div className={styles.forgot}>
                    <Link href="/forget">Forgot Password?</Link>
                  </div>
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
