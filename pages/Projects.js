import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from '../styles/Projects.module.scss'

import Slider from '../components/Slider/ImageSlider'

import { Carousel } from 'react-responsive-carousel'

import { PoteetTXData } from '/public/Projects/City of Poteet/PoteetTXData'
import { Data_CSL_Plasma_Austin } from '/public/Projects/CSL Plasma Austin/Data_CSL_Plasma_Austin'
import { Data_CSL_Plasma_RR } from '/public/Projects/CSL Plasma Round Rock/Data_CSL_Plasma_RR'
import { IKOManuPlant } from '/public/Projects/IKO Manufacturing Plant/IKOManuPlant'
import { CopperasCoveACC } from '/public/Projects/Copperas Cove ACC/CopperasCoveACC'
import { McGregorTXData } from '/public/Projects/City of McGregor/McGregorTXData'


export default function Projects() {
  return (
    <section>
      <Head>
        <title>Cen-Tex Utilities - Construction & Utility Projects</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/logoIcon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="Cen-Tex Utilities has performed many utility jobs over the years. These are some of Cen-Tex Utilities notable utility and constructions jobs!" />
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

      <div className={styles.projContainer}>

        <div>
          <Carousel  emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false} showIndicators={false}  >
            {Data_CSL_Plasma_Austin.map((slide, index) => {
              return (
                <div key={index} >
                  <img style={{maxHeight: '400px'}} src={slide.image} alt="" draggable={false} />
                </div>
              );
            })}
          </Carousel>
          <div>
            <div>
              <h1>CSL Plasma</h1>
              <h2>Austin<span style={{fontWeight: '400'}}>,</span> TX</h2>
            </div>

            <div><p>8" Fire Line, 2- 8" DDCV, Fire Hydrant Building Rise, 18" Storm Drain, 3'x3' Grate Inlets, Sanitary Sewer & Retention Pond.</p></div>
          </div>
        </div>

        <div>
          <div>
            <Carousel emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false} showIndicators={false}  >
              {Data_CSL_Plasma_RR.map((slide, index) => {
                return (
                  <div key={index} >
                    <img style={{maxHeight: '400px'}} src={slide.image} alt="" draggable={false} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <div>
              <h1>CSL Plasma</h1>
              <h2>Round Rock<span style={{fontWeight: '400'}}>,</span> TX</h2>
            </div>

            <div><p>2" Commercial Water Meter with 2" Domestic Water Line, 4" Sanitary Sewer with connection to existing Manhole.</p></div>
          </div>
        </div>

        <div>
          <div>
          <Carousel emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false} showIndicators={false}  >
              {PoteetTXData.map((slide, index) => {
                return (
                  <div key={index} >
                    <img style={{maxHeight: '400px'}} src={slide.image} alt="" draggable={false} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <div>
              <h1 style={{fontSize: '1.5rem', fontWeight: 'lighter', paddingBottom: '10px'}}>Poteet Water Systems</h1>
              <h2>Poteet<span style={{fontWeight: '400'}}>,</span> TX</h2>
            </div>
            <div><p>City of Poteet Water System Improvements.</p></div>
          </div>
        </div>

        <div>
          <div>
          <Carousel emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false} showIndicators={false}  >
              {IKOManuPlant.map((slide, index) => {
                return (
                  <div key={index} >
                    <img style={{maxHeight: '400px'}} src={slide.image} alt="" draggable={false} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <div>
              <h1 style={{fontSize: '1.4rem', fontWeight: 'lighter', paddingBottom: '10px'}}>IKO Manufacturing Plant</h1>
              <h2>Hillsboro<span style={{fontWeight: '400'}}>,</span> TX</h2>
            </div>

            <div><p>IKO Manufacturing Plant infrastructure extension. Curb & drainage ditches. Water line, fire hydrants, sanitary sewer with manholes, and property line stub out. Storm Sewer with S.E.T Grading & Shaping existing ditches on Old Dallas HWY.</p></div>
          </div>
        </div>

        <div>
          <div>
          <Carousel emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false} showIndicators={false}  >
              {CopperasCoveACC.map((slide, index) => {
                return (
                  <div key={index} >
                    <img style={{maxHeight: '400px'}} src={slide.image} alt="" draggable={false} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <div>
              <h1 style={{fontSize: '1.1rem', fontWeight: 'lighter', paddingBottom: '10px'}}>City of Copperas Cove, Animal Control Center</h1>
              <h2>Copperas Cove<span style={{fontWeight: '400'}}>,</span> TX</h2>
            </div>

            <div><p>4" Domestic Water Line, 10" Road bore for water line on Indian Trail Road, 6" Fire Line with Fire Hydrants, 6" Sanitary Sewer with Manholes, 48" Storm Sewer with 10x10 Grate Inlets, 10x10 Junction Box, & 20' Wing Wall</p></div>
          </div>
        </div>

        <div>
          <div>
          <Carousel emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showArrows={true} showThumbs={false} showIndicators={false}  >
              {McGregorTXData.map((slide, index) => {
                return (
                  <div key={index} >
                    <img style={{maxHeight: '400px'}} src={slide.image} alt="" draggable={false} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <div>
              <h1 style={{fontSize: '1.1rem', fontWeight: 'lighter', paddingBottom: '10px'}}>Sanitary Sewer Manhole Rehab</h1>
              <h2>McGregor<span style={{fontWeight: '400'}}>,</span> TX</h2>
            </div>

            <div><p>City of McGregor sanitary sewer manhole rehab. Replace 52 manhole ring & covers with new water tight R&C's. Manhole Rehab with 1" Grout, Rebuid Benches & Inverts, Epoxy coating. Replaced 10 Manholes wiht Precast & FRP's, sewer bypass pumping and asphalt replacement.</p></div>
          </div>
        </div>

      </div>
      
      <Footer />
    </section>
  )
}
