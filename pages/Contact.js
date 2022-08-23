import { useState } from "react"
import { useRouter } from "next/router"

import Head from 'next/head'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import styles from '../styles/Contact.module.scss'

import emailjs from '@emailjs/browser'

export default function Contact() {

  const [submitDiv, setSubmitDiv] = useState(false)
  const router = useRouter();
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_ewcykgl', 'template_ilwuhz6', e.target, 'lAjx79-Q0_FqiwSlt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setTimeout(() => {
        router.push('/')
      }, 6000);
    e.target.reset()
    setSubmitDiv(!submitDiv)
  }

  return (
    <section>
      <Head>
        <title>Cen-Tex Utilities - Contact Us</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/logoIcon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="If you need any construction or utility services, please shoot us a message! Cen-Tex Utilities will respond as soon as possible!" />
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
      <Header headerText="Contact Us"/>
      <div id={styles.overallWrapper}>
      <div className={styles.formContainer}>
        <div style={{ display: (submitDiv ? 'none' : 'flex') }}>
          <div>
            <h1>Contact Form</h1>
            <p>Feel free to fill out this form below for any inquiries or questions</p>
          </div>
          <div>
            <form onSubmit={sendEmail}>
              <label htmlFor="getFullName">First & Last Name <span style={{color: '#ff0037'}}>*</span></label>
              <input id="getFullName" type="text" name="getFullName" placeholder="John Doe" required></input>

              <label htmlFor="getEmail">Email <span style={{color: '#ff0037'}}>*</span></label>
              <input id="getEmail" type="text" name="getEmail" placeholder="johndoe@gmail.com" required></input>

              <label htmlFor="getPhone">Phone <span style={{color: '#ff0037'}}>*</span></label>
              <input id="getPhone" type="tel" name="getPhone" placeholder="254-775-8855" required></input>

              <label htmlFor="getMessage">Message <span style={{color: '#ff0037'}}>*</span></label>
              <textarea id="getMessage" name="getMessage" placeholder="Message here..." required></textarea>

              <button type="submit" onClick={() => {window.location.href = "#messageSubmitted"}}>Send Message</button>
              
            </form>
          </div>

        </div>
        <div id={styles.messageSubmitted} style={{ display: (submitDiv ? 'flex' : 'none') }}>
          <h1>Thank you for contacting us!</h1>
          <h4>Please give us 24-48 business hours to respond to your message</h4>
          <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className={styles.checkmarkcircle} cx="26" cy="26" r="25" fill="none"/><path className={styles.checkmarkcheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
        </div>
      </div>
    </div>

    <Footer />
    </section>
    
  )
}
