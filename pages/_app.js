import '../styles/globals.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/customSlider.scss"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
