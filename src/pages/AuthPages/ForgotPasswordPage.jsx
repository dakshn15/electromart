import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import ForgotPassword from '../../components/Auth/ForgotPassword'

function ForgotPasswordPage() {
  return (
    <>
        <CommonBanner title={"Forgot Password"} />
        <ForgotPassword />
    </>
  )
}

export default ForgotPasswordPage