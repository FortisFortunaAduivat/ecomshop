import { useField } from 'formik'
import { BiUser } from 'react-icons/bi'
import { IoKeyOutline } from 'react-icons/io5'
import { SiMinutemailer } from 'react-icons/si'
import { ErrorMessage} from "formik";
import styles from './styles.module.scss'

export default function LoginInput ({ icon, placeholder, ...props }) {
  // Pass the value in the field of the login related to input below
  const [field, meta] = useField(props)
  // create the icons of the input
  return (

    // meta.touched will create an alert when wrong data or no data are enter
    <div
      className={`${styles.input} ${
        meta.touched && meta.error ? styles.error : ""
      }`}
    >
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
       {meta.touched && meta.error && (
        <div className={styles.error__popup}>
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  )
}
