import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'

function PrivacyPage() {
  return (
    <>
        <CommonBanner title={"privacy policy"} />
        <PrivacyPolicy />
    </>
  )
}

export default PrivacyPage