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
        <title>Cen-Tex Utilities - Utility Projects</title>
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

      <div className={styles.projContainer}>

        <div>
          <div>
            <Carousel emulateTouch={true} width="100%" stopOnHover={true} dynamicHeight={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false} showThumbs={false} showIndicators={false}  >
              {Data_CSL_Plasma_Austin.map((slide, index) => {
                return (
                  <div key={index} >
                    <img src={slide.image} alt="" draggable={false} />
                  </div>
                );
              })}
            </Carousel>
          </div>
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
                    <img src={slide.image} alt="" draggable={false} />
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
                    <img src={slide.image} alt="" draggable={false} />
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
                    <img src={slide.image} alt="" draggable={false} />
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
                    <img src={slide.image} alt="" draggable={false} />
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
                    <img src={slide.image} alt="" draggable={false} />
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
