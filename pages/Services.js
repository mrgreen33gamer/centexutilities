import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from '../styles/Services.module.scss'

import Slider from '../components/Slider/ImageSlider'

import { LocServicingSLD } from '../components/Slider/LocServicingSLD'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  return (
    <section>
      <Header />

      <div className={styles.infoServices}>
        <div>
          <h1>Cen-Tex Services</h1>
          <p>We offers a wide range of utility and construction contracting services to the vast majority of Central Texas! We have serviced small to large sized towns and cities like <b>Waco</b>, <b>Temple</b>, <b>Killeen</b>, <b>Belton</b>, <b>Ft. Worth</b>, <b>Dallas</b>, <b>Hewitt</b>, <b>China Spring</b>, and many more!</p>
          <p>
            Click below to see a few of our completed projects.   
          </p>
          <motion.a whileHover={{ opacity: 0.7 }} whileTap={{ scale: 0.95 }} href="/projects">Project Portfolio <FontAwesomeIcon icon={faChevronRight} /> </motion.a>
        </div>

        <div>
          <h1>Cen-Tex Solutions</h1>
          <ul>
            <li>Site Work</li>
            <li>Excavation</li>
            <li>Infrastructure/Subdivisions</li>
            <li>Underground Utilities (Water, Sewer and Storm Drain)</li>
            <li><span style={{fontWeight: '500'}}>24hr/7day</span> EMERGENCY Water/Sewer line repair</li>
            <li>Underground Fireline (We are licensed SCR REM-U)</li>
            <li>Utility Locating</li>
            <li>Road Boring (Conventional, Dry Boring and Directional)</li>
            <li>Custom Trenching</li>
            <li>Concrete (Engineered foundation, Concrete parking/curbs, Sidewalks)</li>
            <li>Asphalt</li>
            <li>Demolition</li>
            <li>Landscaping, Erosion control/soil stabilization</li>
            <li>TCEQ Spec Retention Ponds</li>
            <li><span style={{fontWeight: '700'}}>OSHA</span> Certified Trench Safety and Shoring</li>
            <li><span style={{fontWeight: '700'}}>OSHA</span> Certified Confined Spaces</li>
          </ul>
        </div>

        <div>
          <div><h1>Servicing These Areas</h1></div>
          <div>
            <Slider slides={LocServicingSLD} data={LocServicingSLD}/>
          </div>
          
        </div>

      </div>
      
      <Footer />
    </section>
  )
}
