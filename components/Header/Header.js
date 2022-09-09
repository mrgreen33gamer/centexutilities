import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Header.module.scss'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className={styles.header}>
    <div> <Image alt="" objectFit='contain' layout="fill" src="/Home/logoWidth.png" /> </div>
    <div>
      <nav>
        <Link href="/"><motion.a whileHover={{backgroundColor: "#920200"}}>Home</motion.a></Link>
        <Link href="/Services"><motion.a whileHover={{backgroundColor: "#920200"}}>Services</motion.a></Link>
        <Link href="/Projects"><motion.a whileHover={{backgroundColor: "#920200"}}>Our Projects</motion.a></Link>
        <Link href="/Contact"><motion.a whileHover={{backgroundColor: "#920200"}}>Contact</motion.a></Link>
      </nav>
    </div>
  </div>
  )
}
