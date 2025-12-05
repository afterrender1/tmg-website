import AboutTmg from '@/components/AboutTmg'
import BuyHome from '@/components/BuyHome'
import BuyOurLatestArrivals from '@/components/BuyOurLatestArrivals'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Reviews from '@/components/Reviews'
import TmgBehindScenesVideo from '@/components/TmgBehindScenesVideo'
import TmgFinanceAndVan from '@/components/TmgFinanceAndVan'
import WorkingInPartnership from '@/components/WorkingInPartnership'
import React from 'react'

const page = () => {
  return (
    <>
    <BuyHome/>
    <BuyOurLatestArrivals/>
    <AboutTmg/>
    <TmgFinanceAndVan/>
    <TmgBehindScenesVideo/>
    <WorkingInPartnership/>
    <Reviews/>
    <ContactSection/>
    <Footer/>
    
    </>
  )
}

export default page