import { useEffect, useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from '../styles/Home.module.scss'

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClock, faFile } from '@fortawesome/free-solid-svg-icons'

import { Carousel } from 'react-responsive-carousel';
import { FamilySlideData } from '../public/Home/SlideData/FamilySlideData'

import { useRouter } from 'next/router'

export default function Main() {
  const router = useRouter();

  const [currentWeekday, setCurrentWeekday] = useState(new Date().toLocaleDateString('en-us', {weekday: 'long'}));

  useEffect(() => {
    setCurrentWeekday(new Date().toLocaleDateString('en-us', {weekday: 'long'}));
  }, [])

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

  return (
    <section>
      <Head>
        <title>Cen-Tex Utilities - Utility Construction Company // Waco, Killeen, Temple, Belton, Austin, Dallas, Ft. Worth</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logoIcon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="Cen-Tex Utilities is a utility construction company based in Waco, TX. Cen-Tex Utilities is known for providing site work, excavation,
        infrastructure/subdivisions, underground utilities (water, sewer, and storm drains), water/sewer line repair, underground firelines, utility locating, road boring, custom trenching, 
        concrete, asphalt, demolition, landscaping, erosion control, soil stabilization, TCEQ spec retention ponds, trench safety and shoring, and certified confined spaces." />
        <meta name="author" content="Scott Applications" />
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
                <p>We are a small family operated Utility Construction Company, specializing in underground solutions, based in China Spring, TX, and founded in 2002.
                  Cen-Tex Utilities is centrally located in Texas, servicing major cities like <b>Waco</b>, <b>Killeen</b>, <b>Temple</b>, <b>Belton</b>, <b>Austin</b>, <b>Dallas</b>, and <b>Ft. Worth</b>!
                </p>
                <p>Owner, Billy Harrison, has 35 years of hard-earned experience in all phases of water, sanitary sewer, storm sewer construction, as well as installed hundreds of water, sewer, and storm sewer lines all over the State of Texas, serving private rural Water Corperations and private commercial construction. His experience and knowledge is built on three generations of Harrison's in the heavy equipment, mining, and construction industries.
                </p>
                <span>
                  <b>Cen-Tex Utilities</b><br />
                  "The Underground Specialist"
                </span>
              </div>
            </div>

            <div id={styles.pictureDivider}>
              <div onClick={e => {e.preventDefault(); router.push('/Services')}}><span><Image src="/Projects/City of McGregor/1.JPG" layout='fill' objectFit='cover' alt="City of McGregor Construction and Utility Site" /></span><motion.h1 whileHover={{backgroundColor: 'rgba(153, 79, 0, 0.5)'}}><div style={{padding: '6px 12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px'}}>Excavation</div></motion.h1></div>
              <div onClick={e => {e.preventDefault(); router.push('/Services')}}><span><Image src="/Projects/City of Poteet/1.JPG" layout='fill' objectFit='cover' alt="City of Poteet Construction and Utility Site" /></span><motion.h1 whileHover={{backgroundColor: 'rgba(153, 79, 0, 0.5)'}}><div style={{padding: '6px 12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px'}}>Road Boaring</div></motion.h1></div>
              <div onClick={e => {e.preventDefault(); router.push('/Services')}}><span><Image src="/Projects/Copperas Cove ACC/3.JPG" layout='fill' objectFit='cover' alt="Copperas Cove ACC Construction and Utility Site" /></span><motion.h1 whileHover={{backgroundColor: 'rgba(153, 79, 0, 0.5)'}}><div style={{padding: '6px 12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px'}}>Trenching</div></motion.h1></div>
              <div onClick={e => {e.preventDefault(); router.push('/Services')}}><span><Image src="/Projects/CSL Plasma Austin/1.PNG" layout='fill' objectFit='cover' alt="CSL Plasma Austin Construction and Utility Site" /></span><motion.h1 whileHover={{backgroundColor: 'rgba(153, 79, 0, 0.5)'}}><div style={{padding: '6px 12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px'}}>Asphalt</div></motion.h1></div>
              <div onClick={e => {e.preventDefault(); router.push('/Services')}}><span><Image src="/Projects/CSL Plasma Round Rock/1.JPG" layout='fill' objectFit='cover' alt="CSL Plasma Round Rock Construction and Utility Site" /></span><motion.h1 whileHover={{backgroundColor: 'rgba(153, 79, 0, 0.5)'}}><div style={{padding: '6px 12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '5px'}}>Demolition</div></motion.h1></div>
            </div>

            <div id={styles.businessHours}>
              <div>
                <div>
                  <h1>Quotes & Estimates <FontAwesomeIcon icon={faFile} color="#0048bb" /></h1>
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
                  <h1>Business Hours <FontAwesomeIcon icon={faClock} color="#0048bb" /></h1>
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
