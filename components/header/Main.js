/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'
import Link from 'next/link'
import { RiSearch2Line } from 'react-icons/ri'
import { FaOpencart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function Main () {
  const { cart } = useSelector(state => ({ ...state }))
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href='/' legacyBehavior>
          <a className={styles.logo}>
            <img src='../../../logo.png' alt='' />
          </a>
        </Link>
        <div className={styles.search}>
          <input type='text' placeholder='Search for...' />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
          <Link href='/cart' legacyBehavior>
            <a className={styles.cart}>
              <FaOpencart />
              <span>{cart.length}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
