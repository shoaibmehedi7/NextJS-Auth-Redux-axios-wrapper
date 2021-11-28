import Link from "next/link"
import styles from "./footer.module.css"
import packageJSON from "../package.json"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="">Demo Footer Item</a>
        </li>
        <li className={styles.navItem}>
          <a href="">Demo Footer Item</a>
        </li>
        <li className={styles.navItem}>
          <a href="">Demo Footer Item</a>
        </li>
        <li className={styles.navItem}>
          <Link href="">
            <a>Demo Footer Item</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
