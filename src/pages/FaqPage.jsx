import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import Faq from '../components/Faq/Faq'

function FaqPage() {
  return (
    <>
        <CommonBanner title={"Frequently asked questions"} />
        <Faq />
    </>
  )
}

export default FaqPage