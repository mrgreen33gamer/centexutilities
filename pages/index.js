import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from '../styles/Home.module.scss'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import { Carousel } from 'react-responsive-carousel';
import { FamilySlideData } from '../public/Home/SlideData/FamilySlideData'


function WelcomeContainer() {
  const settings = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.7, type: 'spring', stiffness: 30, damping: 10 } },
    hidden: { opacity: 0, y: -200}
  };
  const settingsText = {
    visible: { opacity: 1, transition: { delay: 2, type: 'spring', stiffness: 15, damping: 5 } },
    hidden: { opacity: 0}
  };
  return (
    <motion.div animate="visible" initial="hidden" variants={settings}>
      <motion.section animate="visible" initial="hidden" variants={settingsText}>
        <h1>Cen-Tex Utilities</h1>
        <h2>Building Texas</h2>
      </motion.section>
    </motion.div>
  );
}

function BusinessHoursContainer({mon, tue, wed, thur, fri, sat, sun}) {
  var currentWeekday = new Date().toLocaleDateString('en-us', {weekday: 'long'});

  return (
    <div>
      {currentWeekday === 'Monday' ? 
      <div style={{color: '#3662c9'}}> <h4 style={{textDecoration: 'underline'}}>Monday</h4> <h4>{mon}</h4> </div>
        :
      <div> <h4>Monday</h4> <h4>{mon}</h4> </div>
      }

      {currentWeekday === 'Tuesday' ? 
      <div style={{color: '#3662c9'}}> <h4 style={{textDecoration: 'underline'}}>Tuesday</h4> <h4>{tue}</h4> </div>
        :
      <div> <h4>Tuesday</h4> <h4>{tue}</h4> </div>
      }

      {currentWeekday === 'Wednesday' ? 
      <div style={{color: '#3662c9'}}> <h4 style={{textDecoration: 'underline'}}>Wednesday</h4> <h4>{wed}</h4> </div>
        :
      <div> <h4>Wednesday</h4> <h4>{wed}</h4> </div>
      }
      
      {currentWeekday === 'Thursday' ? 
      <div style={{color: '#3662c9'}}> <h4 style={{textDecoration: 'underline'}}>Thursday</h4> <h4>{thur}</h4> </div>
        :
      <div> <h4>Thursday</h4> <h4>{thur}</h4> </div>
      }

      {currentWeekday === 'Friday' ? 
      <div style={{color: '#3662c9'}}> <h4 style={{textDecoration: 'underline'}}>Friday</h4> <h4>{fri}</h4> </div>
        :
      <div> <h4>Friday</h4> <h4>{fri}</h4> </div>
      }

      {currentWeekday === 'Saturday' ? 
      <div style={{color: '#ce0300'}}> <h4 style={{textDecoration: 'underline'}}>Saturday</h4> <h4>{sat}</h4> </div>
        :
      <div> <h4>Saturday</h4> <h4>{sat}</h4> </div>
      }

      {currentWeekday === 'Sunday' ? 
      <div style={{color: '#ce0300'}}> <h4 style={{textDecoration: 'underline'}}>Sunday</h4> <h4>{sun}</h4> </div>
        :
      <div> <h4>Sunday</h4> <h4>{sun}</h4> </div>
      }
    </div>
  );
}

export default function Main() {

  return (
    <section>
      <Head>
        <title>Cen-Tex Utilities - Utility & Construction Contractor // Waco, Killeen, Temple, Belton, Austin, Dallas, Ft. Worth</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logoIcon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="Cen-Tex Utilities is a utility and construction contractor that offers site work, 
        excavation/mass Earth, custom trenching, underground utilities (water, sewer & storm drains), road boring, licensed fireline installation, 
        watermain hottaps, and concrete (engineered foudnation, parking, sidewalks, etc...), we service cities and towns like Waco, Temple, Killeen, Belton, Ft. Worth, Dallas, Hewitt, China Spring, San Antionio, and Houston!" />
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
      <main className={styles.main}>
          <div className={styles.topPicture}>
            <span style={{opacity: 0.6}}><Image objectFit='cover' layout="fill" src="/Home/backgroundCover.jpg" alt="" /></span>
            <div>
              <WelcomeContainer />
            </div>
          </div>

          <div className={styles.pageContent}>

            <div id={styles.next}>
              <div>
                <Carousel emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showArrows={true} showThumbs={false} showIndicators={false}  >
                {FamilySlideData.map((slide, index) => {
                  return (
                    <div key={index} >
                      <img src={slide.image} alt="" draggable={false} />
                    </div>
                  );
                })}
                </Carousel>
              </div>
              <div>
                <h1>Family Owned And Growing!</h1>
                <hr />
                <p>We're currently a small, family operated utility and construction company, based in China Spring, TX, and founded in 2002.
                  Cen-Tex Utilities is centrally located in Texas, performing jobs in major cities like Waco, Killeen, Temple, Belton, Austin, Dallas, and Ft. Worth!
                </p>
                <p>Owner, Billy Harrison, has 35 years of hard-earned experience in all phases of water, sanitary sewer, and storm sewer construction,
                  as well as installed hundreds of miles of water, sewer, and storm sewer lines all over the State of Texas, serving private rural Water Corporations to public municipalities and private commercial construction.
                  His experience and knowledge is built on three generations of Harrison's in the heavy equipment, mining, and construction industries.
                </p>
              </div>
            </div>

            <div id={styles.pictureDivider}>
              <div><Image src="/Projects/City of McGregor/1.JPG" layout='fill' objectFit='cover' alt="City of McGregor Construction and Utility Site" /></div>
              <div><Image src="/Projects/City of Poteet/1.JPG" layout='fill' objectFit='cover' alt="City of Poteet Construction and Utility Site" /></div>
              <div><Image src="/Projects/Copperas Cove ACC/3.JPG" layout='fill' objectFit='cover' alt="Copperas Cove ACC Construction and Utility Site" /></div>
              <div><Image src="/Projects/CSL Plasma Austin/1.PNG" layout='fill' objectFit='cover' alt="CSL Plasma Austin Construction and Utility Site" /></div>
              <div><Image src="/Projects/CSL Plasma Round Rock/1.JPG" layout='fill' objectFit='cover' alt="CSL Plasma Round Rock Construction and Utility Site" /></div>
            </div>

            <div id={styles.businessHours}>
              <div>
                <div>
                  <h1>Contract Quotes & Estimates</h1>
                  <hr />
                </div>
                <div>
                  <p>Contact us with your next project! We can help with consulting, planning, estimating and budgeting on hard bids and repairs!</p>
                  <div>
                    <a href="tel:2548557613"><FontAwesomeIcon icon={faPhone} color="#0048bb" size="lg" /><h1>(254)-855-7613</h1></a>
                  </div>
                  <div>
                    <motion.a whileHover={{ opacity: 0.7 }} whileTap={{ scale: 0.95 }} href="/services">Services</motion.a>
                    <motion.a whileHover={{ opacity: 0.7 }} whileTap={{ scale: 0.95 }} href="/projects">Projects</motion.a>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <h1>Business Hours</h1>
                  <hr />
                </div>

                  <BusinessHoursContainer
                  mon='7:00 AM - 6:00 PM'
                  tue='7:00 AM - 6:00 PM'
                  wed='7:00 AM - 6:00 PM'
                  thur='7:00 AM - 6:00 PM'
                  fri='7:00 AM - 6:00 PM'
                  sat='Closed'
                  sun='Closed'
                   />
              </div>

            </div>

          </div>

          </main>
      
      <Footer />
    </section>
  )
}
