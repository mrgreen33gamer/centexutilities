import { useState, useEffect, useRef } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Header.module.scss'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

  const [menuState, setMenuState] = useState(false)

  const menuAnimation = {
    hidden: {x: -250},
    visible: {x: 0, transition: {duration: 1, ease: 'easeInOut'}},
    back: {x: -250, transition: {duration: 0.2, ease: 'easeInOut'}}
  }

  const mobileNavigation = useRef()
  const hamburgerMenuSection = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      var btnCode;
      if ('object' === typeof e) {
        btnCode = e.button;
        switch (btnCode) {
          case 0:
            if (menuState && mobileNavigation.current && !mobileNavigation.current.contains(e.target)) {
              if (menuState && hamburgerMenuSection.current && !hamburgerMenuSection.current.contains(e.target)) {
                setMenuState(!menuState)
              }
            }
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menuState]);

  useEffect(() => {
    const detectResizeMobile = () => {
      if(menuState === true) {
        if(window.innerWidth > 800) {
          setMenuState(!menuState)
        }
      }
    }

    window.addEventListener('resize', detectResizeMobile)
    return () => {
      window.removeEventListener("resize", detectResizeMobile);
    };
  }, [menuState])

  return (
    <section className={styles.header}>
        <div>
          <Image layout='fill' objectFit='contain' draggable={false} alt="Cen-Tex Utilities Logo" src="/Home/logoWidth.png" />
        </div>
        <div>
          <Link href="/"><motion.a whileHover={{ color: '#fff' }}>Home</motion.a></Link>
          <Link href="/Services"><motion.a whileHover={{ color: '#fff' }}>Services</motion.a></Link>
          <Link href="/Projects"><motion.a whileHover={{ color: '#fff' }}>Projects</motion.a></Link>
          <Link href="/Contact"><motion.a whileHover={{ color: '#fff' }}>Contact</motion.a></Link>
        </div>
        <div ref={hamburgerMenuSection}>
          {
            menuState === false ? <FontAwesomeIcon onClick={() => {setMenuState(!menuState)}} style={{width: '25px', height: '25px', cursor: 'pointer'}} icon={faBars} color="black" /> : <FontAwesomeIcon onClick={() => {setMenuState(!menuState)}} style={{width: '25px', height: '25px', cursor: 'pointer'}} icon={faBarsStaggered} size="2x" color="black" />
          }
            <motion.div ref={mobileNavigation} variants={menuAnimation} initial='hidden' animate={menuState === true ? 'visible' : 'back'}>
              <nav>
                <Link href="/"><motion.a whileHover={{ color: '#fff' }}>Home</motion.a></Link>
                <Link href="/Services"><motion.a whileHover={{ color: '#fff' }}>Services</motion.a></Link>
                <Link href="/Projects"><motion.a whileHover={{ color: '#fff' }}>Projects</motion.a></Link>
                <Link href="/Contact"><motion.a whileHover={{ color: '#fff' }}>Contact</motion.a></Link>
              </nav>
            </motion.div>
        </div>
    </section>
  )
}
