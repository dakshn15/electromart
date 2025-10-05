import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import TermsCondition from '../components/TermsCondition/TermsCondition'

function TermsPage() {
  return (
    <>
        <CommonBanner title={"terms & condition"} />
        <TermsCondition />
    </>
  )
}

export default TermsPage