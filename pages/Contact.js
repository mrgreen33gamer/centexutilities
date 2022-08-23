import React, {useState} from "react"
import { useRouter } from "next/router"

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
