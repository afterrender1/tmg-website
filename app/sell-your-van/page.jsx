import Footer from '@/components/Footer'
import Reviews from '@/components/Reviews'
import SellYourVan from '@/components/SellYourVan'
import WorkingInPartnership from '@/components/WorkingInPartnership'
import React from 'react'

const page = () => {
  return (
    <div>

<SellYourVan/>
<WorkingInPartnership/>
<Reviews/>
<div className='mt-30'>

  
<Footer/>
</div>


    </div>
  )
}

export default page