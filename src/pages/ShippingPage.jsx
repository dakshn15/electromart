import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import ShippingReturn from '../components/ShippingReturn/ShippingReturn'

function ShippingPage() {
  return (
    <>
        <CommonBanner title={"shipping return"} />
        <ShippingReturn />
    </>
  )
}

export default ShippingPage