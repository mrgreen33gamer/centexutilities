import Image from 'next/image'

import styles from '../../styles/Footer.module.scss'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <section className={styles.footerWrapper}>
    <div className={styles.footer}>

      <div>
        <div>
          <div><FontAwesomeIcon className={styles.icon} icon={faLocationDot} size="2x" color="whitesmoke"/><div><h1>China Spring, TX</h1></div></div>
          <div style={{cursor: 'pointer'}} onClick={() => window.location.href = 'tel:254-855-7613'}><FontAwesomeIcon className={styles.icon} icon={faPhone} size="2x" color="whitesmoke"/><h1 style={{textDecoration: 'none'}}>(254)-855-7613</h1></div>
          <div style={{cursor: 'pointer'}} onClick={() => window.location.href = 'mailto:centexutilities@yahoo.com'}><FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="2x" color="whitesmoke"/><h1>centexutilities@yahoo.com</h1></div>
        </div>
      </div>
      <div>
        <Image width={300} height={150} layout="fixed" alt="" src="/Footer/oshaLogo.png" />
      </div>
      <div> 
        <div>
          <motion.a href="https://www.facebook.com/centexutilities/" whileHover={{ opacity: 0.7 }}><Image width={300} height={70} layout="fixed" alt="" src="/Footer/facebookLogo.png" /></motion.a>
        </div>
      </div>

    </div>

    <div className={styles.scottapps}>
      <a href="https://www.scottapplications.com">
        <div>
          <h1>Developed By</h1>
        </div>
        <div>
          <motion.img src="/Footer/outsideLogo.png" alt="" animate={{rotate: 360}} transition={{duration: 10, repeat: Infinity, ease: [0, 0, 0, 0]}} />
          <img alt="" src="/Footer/insideLogo.png" />
        </div>
        <div>
          <h1>Scott Applications</h1>
        </div>
      </a>
    </div>
  </section>
  )
}
