import { Inter, Open_Sans } from 'next/font/google'
import HeroSection from './components/HeroSection'
import NavBar from './components/Navbar'
import InfoBar from './components/InfoBar'
import Plans from './components/Plans'
import Gallery from './components/Gallery'
import Footer from './components/Footer'


const openSans = Open_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${openSans.variable}`}>
      <HeroSection/>
      <InfoBar/>
      <h2 className='text-white flex text-center align-middle justify-center text-2xl  lg:text-4xl py-20' style={{letterSpacing:'5px'}}>
        Plans and Prices
      </h2>
      <Plans/>
      <h2 className='text-white flex text-center align-middle justify-center text-2xl  lg:text-4xl py-20' style={{letterSpacing:'5px'}}>
        Watch Us in action
      </h2>
      <Gallery/>
      <h2 className='text-white flex text-center align-middle justify-center text-2xl  lg:text-4xl py-20' style={{letterSpacing:'5px'}}>
        BMI Calculator
      </h2>
      <Footer/>
    </div>
  )
}
