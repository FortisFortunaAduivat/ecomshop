import { useField } from 'formik'
import { BiUser } from 'react-icons/bi'
import { IoKeyOutline } from 'react-icons/io5'
import { SiMinutemailer } from 'react-icons/si'
import styles from './styles.module.scss'

export default function LoginInput ({ icon, placeholder, ...props }) {
  // Pass the value in the field of the login related to input below
  const [field, meta] = useField(props)
  // create the icons of the input
  return (
    <div className={styles.input}>
      {icon == 'user' ? (
        <BiUser />
      ) : icon == 'email' ? (
        <SiMinutemailer />
      ) : icon == 'password' ? (
        <IoKeyOutline />
      ) : null}
      {/* Create the input section */}
      <input
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </div>
  )
}
