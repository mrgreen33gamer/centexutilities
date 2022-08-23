import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
    <div> <Image alt="" objectFit='contain' layout="fill" src="/Home/logoWidth.png" /> </div>
    <div>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/Services"><a>Services</a></Link>
        <Link href="/Projects"><a>Our Projects</a></Link>
        <Link href="/Contact"><a>Contact</a></Link>
      </nav>
    </div>
  </div>
  )
}
