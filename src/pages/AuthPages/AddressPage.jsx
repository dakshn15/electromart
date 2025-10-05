import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import Address from '../../components/Auth/Address'

function AddressPage() {
  return (
    <>
        <CommonBanner title={"Address"} />
        <Address />
    </>
  )
}

export default AddressPage