import React, { useState } from 'react';
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { motion } from 'framer-motion'

import styles from '../../styles/Slider.module.scss'

export default function ImageSlider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className={styles.slider}>

      <motion.div className={styles.leftArrowDiv} size="2x" color="black" onClick={prevSlide} whileHover={{opacity: 0.8}} whileTap={{opacity: 0.8}}>
        <div className={styles.leftArrow}><FontAwesomeIcon icon={faChevronLeft} color='white' size="5x" /></div>
      </motion.div>
      <motion.div className={styles.rightArrowDiv} size="2x" color="black" onClick={nextSlide} whileHover={{opacity: 0.8}} whileTap={{opacity: 0.8}}>
        <div className={styles.rightArrow}><FontAwesomeIcon icon={faChevronRight} color='white' size="5x" /></div>
      </motion.div>

    {slides.map((slide, index) => {
      return (
        <div className={styles[index === current ? 'slideActive' : 'slide']} key={index} onClick={nextSlide}>
          {index === current && (<Image objectFit='cover' layout="fill" src={slide.image} alt="" priority /> )}
          {slide.title != null && <h1>{slide.title}</h1> }
          
        </div>
      );
    })}
  </section>
  );
}