import React from 'react'
import Hero from '../components/Hero'
import Ourservices from '../components/Ourservices'
import Heroabout from '../components/Heroabout'
import Whychoose from '../components/Whychoose'
import Clients from '../components/Clients'
import OurTools from '../components/ourtools'
//import Gallery from '../components2/Gallery'
//import WorkshopsDrives from '../components2/gallery2.jsx'
// import NewsletterSection from '../components2/Newsletter.jsx'
const Home = () => {
    return (
      <>
        <Hero />
        <Heroabout />
        <Ourservices />
        <OurTools/>
        {/* <Gallery/> */}
        {/* <WorkshopsDrives/> */}
        {/* <NewsletterSection/> */}
            <Whychoose />
            <Clients/>
      </>
    );
}

export default Home