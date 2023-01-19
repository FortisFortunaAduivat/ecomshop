/* eslint-disable @next/next/no-img-element */

import styles from "./styles.module.scss";


export default function UserMenu({loggedIn}) {
    return <div className={styles.menu}>
        <h4> Welcome to EcomShop</h4>
        {loggedIn ?(

        <div className={styles.flex}>
           <img src= "https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="" className={styles.menu__img}/>
       
        <div className={styles.col}>
<span>Welcome back</span>
<h3>13Ghost</h3>
<span>Sign out</span>


        </div>
        </div>
        ):( 
     <div className={styles.flex}>
        <button className={styles.btn_primary}>Register</button>
        <button className={styles.btn_outlined}>Login</button>
     </div>
        )}
    </div>
}