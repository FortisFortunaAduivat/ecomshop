import styles from './style.module.scss'
import Ad from "./Ad";
import Top from "./Top";

export default function Header() {

    return <header className={styles.header}>
        <Ad/>
        <Top/>
    </header>

}

