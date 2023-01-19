/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import {MdSecurity} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs";
import {VscAccount} from "react-icons/vsc";
import {RiArrowDropDownFill} from "react-icons/ri";
import {useState} from "react";
import UserMenu from "./UserMenu";
import Link from "next/link";

export default function Top() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className={styles.top}>

            <div className={styles.top__container}>
                <ul className={styles.top__list}>
                    <li className={styles.li}>
                        <img
                            src="https://european-union.europa.eu/themes/contrib/oe_theme/dist/eu/images/logo/standard-version/positive/logo-eu--en.svg"
                            alt="europe"/>
                        <span>
                    Europe - Eur
                </span>
                    </li>
                    <li className={styles.li}>
                        <MdSecurity/>
                        <span>Buyer Protection</span>
                    </li>
                    <li className={styles.li}>
                        <span>Customer Service</span>
                    </li>
                    <li className={styles.li}>
                 <span>
                 Help Center
                 </span>
                    </li>
                    <li className={styles.li}>
                        <BsSuitHeart/>
                        <span>Your Wishlist</span>
                    </li>
                    <li className={styles.li}>
                    {loggedIn ?
                        <li className={styles.li}>
                            <div className={styles.flex}>
                                <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="michael"/>
                                <span>Michael</span>
                                <RiArrowDropDownFill/>
                            </div>
                        </li>
                        :
                        <li className={styles.li}>
                            <div className={styles.flex}>
                                <VscAccount/>
                                <span>Account</span>
                                <RiArrowDropDownFill/>
                            </div>
                        </li>
                    }
                    <UserMenu loggedIn={loggedIn}/>
                    </li>
                </ul>
                <ul>
                <li className={styles.li}><Link href="/profile">Account</Link></li>
                <li className={styles.li}><Link href="/profile/orders">Orders</Link></li>
                <li className={styles.li}><Link href="/profile/messages">Messages</Link></li>
                <li className={styles.li}><Link href="/profile/address">Address</Link></li>
                <li className={styles.li}><Link href="/profile/whishlist">Whishlist</Link></li>
                </ul>
            </div>
        </div>

    )
}


