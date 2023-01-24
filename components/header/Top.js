/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'
import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { useState } from 'react'
import UserMenu from './UserMenu'

export default function Top () {
  const [loggedIn, setLoggedIn] = useState(true)
  const [visible, setVisible] = useState(false)
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img
              src='/../../images/logoE.png'
              alt=''
            />
            <span>Europe - €</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help Center</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <span>Your Wishlist</span>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {loggedIn ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img
                    src='https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png'
                    alt='michael'
                  />
                  <span>13thGhost</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <VscAccount />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu loggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>
  )
}
