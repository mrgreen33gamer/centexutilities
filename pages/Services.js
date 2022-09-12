import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from '../styles/Services.module.scss'

import { Carousel } from 'react-responsive-carousel'
import { LocServicingSLD } from '../components/Slider/LocServicingSLD'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPeopleArrows, faHelmetSafety } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  return (
    <section>
      <Head>
        <title>Cen-Tex Utilities - Construction & Utility Services</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/logoIcon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="Looking for a construction or utility contractor? Let Cen-Tex Utilities take care of your next job! Take a moment to browse our services on this page." />
        <meta name="author" content="Scott Applications" />
        <meta name="keywords" content="Texas Utilities Contractor, Utilities Contractor, Waco Utilities Contractor, Killeen Utilities Contractor, Temple Utilities Contractor, Belton Utilities Contractor, Austin Utilities Contractor, Dallas Utilities Contractor, Ft. Worth Utilities Contractor, Hewitt Utilities Contractor, Woodway Utlities, Bellmead Utiltiies, China Spring Utilities Contractor, Robinson Utilities Contractor, Lorena Utilities Contractor, Valley Mills Utilities Contractor, Rock Springs Utilities Contractor, 
        Waco Underground Utilities Contractor, Waco Water & Sewer Utilities Contractor, Waco Underground Firelines Utilities Contractor, Waco Excavation Utilities Contractor, Waco Trenching Utilities Contractor, Waco Site Work Utilities Contractor, Waco Road Boaring Utilities Contractor, 
        Temple Underground Utilities Contractor, Temple Water & Sewer Utilities Contractor, Temple Underground Firelines Utilities Contractor, Temple Excavation Utilities Contractor, Temple Trenching Utilities Contractor, Temple Site Work Utilities Contractor, Temple Road Boaring Utilities Contractor
        Killeen Underground Utilities Contractor, Killeen Water & Sewer Utilities Contractor, Killeen Underground Firelines Utilities Contractor, Killeen Excavation Utilities Contractor, Killeen Trenching Utilities Contractor, Killeen Site Work Utilities Contractor, Killeen Road Boaring Utilities Contractor
        Belton Underground Utilities Contractor, Belton Water & Sewer Utilities Contractor, Belton Underground Firelines Utilities Contractor, Belton Excavation Utilities Contractor, Belton Trenching Utilities Contractor, Belton Site Work Utilities Contractor, Belton Road Boaring Utilities Contractor
        Ft. Worth Underground Utilities Contractor, Ft. Worth Water & Sewer Utilities Contractor, Ft. Worth Underground Firelines Utilities Contractor, Ft. Worth Excavation Utilities Contractor, Ft. Worth Trenching Utilities Contractor, Ft. Worth Site Work Utilities Contractor, Ft. Worth Road Boaring Utilities Contractor
        Dallas Underground Utilities Contractor, Dallas Water & Sewer Utilities Contractor, Dallas Underground Firelines Utilities Contractor, Dallas Excavation Utilities Contractor, Dallas Trenching Utilities Contractor, Dallas Site Work Utilities Contractor, Dallas Road Boaring Utilities Contractor
        Hewitt Underground Utilities Contractor, Hewitt Water & Sewer Utilities Contractor, Hewitt Underground Firelines Utilities Contractor, Hewitt Excavation Utilities Contractor, Hewitt Trenching Utilities Contractor, Hewitt Site Work Utilities Contractor, Hewitt Road Boaring Utilities Contractor, 
        China Spring Underground Utilities Contractor, China Spring Water & Sewer Utilities Contractor, China Spring Underground Firelines Utilities Contractor, China Spring Excavation Utilities Contractor, China Spring Trenching Utilities Contractor, China Spring Site Work Utilities Contractor, China Spring Road Boaring Utilities Contractor" />
        <link rel="apple-touch-icon" href="/logoIconApple.png" />
      </Head>
      <Header />

      <div className={styles.infoServices}>
        <div>
          <div>
            <h1>Cen-Tex Services <FontAwesomeIcon icon={faHelmetSafety} /></h1>
            <p>We offers a wide range of utility and construction contracting services to the vast majority of Central Texas!
              We have serviced small to large sized towns and cities like <b>Waco</b>, <b>Temple</b>, <b>Killeen</b>, <b>Belton</b>, <b>Ft. Worth</b>, <b>Dallas</b>, <b>Hewitt</b>, <b>China Spring</b>, and many more!
              Below is a general list of services we offer here at Cen-Tex Utilities.
              </p>
          </div>
          <div>
            <ul>
              <li>Site Work</li>
              <li>Excavation</li>
              <li>Infrastructure/Subdivisions</li>
              <li>Underground Utilities (Water, Sewer and Storm Drain)</li>
              <li><b>24hr/7day</b> EMERGENCY Water/Sewer line repair</li>
              <li>Underground Fireline (We are licensed SCR REM-U)</li>
              <li>Utility Locating</li>
              <li>Road Boring (Conventional, Dry Boring and Directional)</li>
              <li>Custom Trenching</li>
              <li>Concrete (Engineered foundation, Concrete parking/curbs, Sidewalks)</li>
              <li>Asphalt</li>
              <li>Demolition</li>
              <li>Landscaping, Erosion control/soil stabilization</li>
              <li>TCEQ Spec Retention Ponds</li>
              <li><b>OSHA</b> Certified Trench Safety and Shoring</li>
              <li><b>OSHA</b> Certified Confined Spaces</li>
            </ul>
          </div>
          <div>
            <Carousel emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showArrows={true} showThumbs={false} showIndicators={false}  >
              {LocServicingSLD.map((slide, index) => {
                return (
                  <div key={index} >
                    <img src={slide.image} alt="" draggable={false} />
                    <p className="legend">{slide.title}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

      </div>
      
      <Footer />
    </section>
  )
}
