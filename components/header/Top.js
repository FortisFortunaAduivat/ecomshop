import styles from "./style.module.scss";
import {MdSecurity} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs";
import {VscAccount} from "react-icons/vsc";
import {RiArrowDropDownFill} from "react-icons/ri";

export default function Top() {
    return (
        <div className={styles.top}>

            <div className={styles.top__container}>
                <ul className={styles.top__list}>
                    <li>
                        <img
                            src="https://european-union.europa.eu/themes/contrib/oe_theme/dist/eu/images/logo/standard-version/positive/logo-eu--en.svg"
                            alt=""/>
                        <span>
                    Europe - Eur
                </span>
                    </li>
                    <li>
                        <MdSecurity/>
                        <span>Buyer Protection</span>
                    </li>
                    <li>
                        <span>Customer Service</span>
                    </li>
                    <li>
                 <span>
                 Help Center
                 </span>
                    </li>
                    <li>
                        <BsSuitHeart/>
                        <span>Your Wishlist</span>
                    </li>
                    <li>
                        <div className={styles.flex}>
                            <VscAccount/>
                            <span>Account</span>
                            <RiArrowDropDownFill/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}


