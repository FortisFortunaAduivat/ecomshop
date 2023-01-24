/* eslint-disable react/jsx-key */
import styles from './styles.module.scss'
import { IoLocationSharp } from 'react-icons/io5'
import Link from 'next/link'

export default function Copyright ({ country }) {
  return (
    <div className={styles.footer__copyright}>
      <section>©2022 Ecomshop All Rights Resereved.</section>
      <section>
        <ul>
          {data.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> France
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
const data = [
  {
    name: 'Privacy Center',
    link: ''
  },
  {
    name: 'Privacy & Cookie Policy',
    link: ''
  },
  {
    name: 'Manage Cookies',
    link: ''
  },
  {
    name: 'Terms & Conditions',
    link: ''
  },
  {
    name: 'Copyright Notice',
    link: ''
  }
]
