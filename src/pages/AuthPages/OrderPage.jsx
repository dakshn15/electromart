import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import Order from '../../components/Auth/Order'

function OrderPage() {
  return (
    <>
        <CommonBanner title={"your orders"} />
        <Order />
    </>
  )
}

export default OrderPage