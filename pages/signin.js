/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/signin.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import { BiLeftArrowAlt } from 'react-icons/bi'
import Link from 'next/link'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import axios from "axios";
import Router from "next/router";
import LoginInput from '../components/inputs/loginInput/'
import { useState } from 'react'
import CircledIconBtn from '../components/button/circledIconBtn'
import { getProviders, signIn } from 'next-auth/react'

// set the user information
const intialvalues = {
  login_email: '',
  login_password: '',
  name: '',
  email: '',
  password: '',
  conf_password: ''
}

export default function signin ({ country, providers }) {
  console.log(providers)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // set user parameters
  const [user, setUser] = useState(intialvalues)
  const { login_email, login_password, name, email, password, conf_password } =
    user
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
  const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's your name ?")
      .min(2, 'First name must be between 2 and 16 characters.')
      .max(16, 'First name must be between 2 and 16 characters.')
      .matches(
        /^[aA-zZ ?<>/,.|\+-_!@#$%^&*() 0123456789]^/,
        'Numbers and special characters such as ?<>/,.|+-_!@#$%^&*() are missing.'
      ),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email('Enter a valid email address.'),
    password: Yup.string()
      .required(
        'Numbers and special characters such as ?<>/,.|+-_!@#$%^&*() are missing.'
      )
      .min(6, 'Password must be atleast 6 characters.')
      .max(36, "Password can't be more than 36 characters"),
    conf_password: Yup.string()
      .required('Confirm your password.')
      .oneOf([Yup.ref('password')], 'Passwords must match.')
  })
  const signUpHandler = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post('/api/auth/signup', {
        name,
        email,
        password
      })
      setUser({ ...user, error: '', success: data.message })
      setLoading(false)
      setTimeout(async () => {
        let options = {
          redirect: false,
          email: email,
          password: password
        }
        const res = await signIn('credentials', options)
        Router.push('/')
      }, 2000)
    } catch (error) {
      setLoading(false)
      setUser({ ...user, success: '', error: error.response.data.message })
    }
  }
  const signInHandler = async () => {
    setLoading(true)
    let options = {
      redirect: false,
      email: login_email,
      password: login_password
    }
    const res = await signIn('credentials', options)
    setUser({ ...user, success: '', error: '' })
    setLoading(false)
    if (res?.error) {
      setLoading(false)
      setUser({ ...user, login_error: res?.error })
    } else {
      return Router.push(callbackUrl || '/')
    }
  }
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
                    <Link href='/forget'>Forgot Password?</Link>
                  </div>
                </Form>
              )}
            </Formik>

            <div className={styles.login__socials}>
              <div className={styles.login__socials_wrap}>
                {/* social buttons */}
                <span className={styles.or}>Or continue with</span>
                {/* mapping the providers */}
                {providers.map(provider => (
                  // eslint-disable-next-line react/jsx-key
                  <div key={provider.name}>
                    <button
                      className={styles.social__btn}
                      onClick={() => signIn(provider.id)}
                    >
                      <img src={`../../icons/${provider.name}.png`} alt='' />
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>
              Get access to one of the best Eshopping services in the world.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                conf_password
              }}
              validationSchema={registerValidation}
              onSubmit={() => {
                signUpHandler()
              }}
            >
              {form => (
                <Form>
                  <LoginInput
                    type='text'
                    name='name'
                    icon='user'
                    placeholder='Full Name'
                    onChange={handleChange}
                  />
                  <LoginInput
                    type='text'
                    name='email'
                    icon='email'
                    placeholder='Email Address'
                    onChange={handleChange}
                  />
                  <LoginInput
                    type='password'
                    name='password'
                    icon='password'
                    placeholder='Password'
                    onChange={handleChange}
                  />
                  <LoginInput
                    type='password'
                    name='conf_password'
                    icon='password'
                    placeholder='Re-Type Password'
                    onChange={handleChange}
                  />
                  <CircledIconBtn type='submit' text='Sign up' />
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

// create the link get access to all provider to social media
export async function getServerSideProps () {
  // change the variable to an array
  const providers = Object.values(await getProviders())
  console.log(providers)
  return {
    props: { providers }
  }
}
