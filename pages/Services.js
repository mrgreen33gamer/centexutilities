import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from '../styles/Services.module.scss'

import { Carousel } from 'react-responsive-carousel'
import { LocServicingSLD } from '../components/Slider/LocServicingSLD'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPersonDigging } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  return (
    <section>
      <Head>
        <title>Cen-Tex Utilities - Utility Services</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logoIcon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="Cen-Tex Utilities is a utility construction based in Waco, TX. Cen-Tex Utilities is known for providing site work, excavation,
        infrastructure/subdivisions, underground utilities (water, sewer, and storm drains), water/sewer line repair, underground firelines, utility locating, road boring, custom trenching, 
        concrete, asphalt, demolition, landscaping, erosion control, soil stabilization, TCEQ spec retention ponds, trench safety and shoring, and certified confined spaces." />
        <meta name="author" content="Scott Applications" />
        <link rel="apple-touch-icon" href="/logoIconApple.png" />
      </Head>
      <Header />

      <div className={styles.infoServices}>
        <div>
          <div>
            <h1>Cen-Tex Services <FontAwesomeIcon icon={faPersonDigging} /></h1>
            <p>We offer a wide range of underground utility and construction services to Central Texas!
              We service small to large sized towns and cities like <b>Waco</b>, <b>Temple</b>, <b>Killeen</b>, <b>Belton</b>, <b>Ft. Worth</b>, <b>Dallas</b>, <b>Hewitt</b>, <b>China Spring</b> and many more!
              Below is a general list of services we offer here at Cen-Tex Utilities.
              </p>
          </div>
          <div>
            <ul>
              <li>Complete TurnKey</li>
              <li>Site Work</li>
              <li>Site Prep / Dirt Work</li>
              <li>Concrete</li>
              <li>Landscaping, Erosion control/soil stabilization</li>
              <li>Underground Utilities (Water, Sewer and Storm Drain)</li>
              <li>Excavation</li>
              <li>Infrastructure/Subdivisions</li>
              <li><b>24hr/7day</b> EMERGENCY Water/Sewer line repair</li>
              <li>Underground Fireline (We are licensed SCR REM-U)</li>
              <li>Utility Locating</li>
              <li>Road Boring (Conventional, Dry Boring and Directional)</li>
              <li>Custom Trenching</li>
              <li>Concrete (Engineered foundation, Concrete parking/curbs, Sidewalks)</li>
              <li>Asphalt</li>
              <li>Demolition</li>
              
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
