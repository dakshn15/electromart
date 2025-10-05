import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import Register from '../../components/Auth/Register'

function RegisterPage() {
  return (
    <>
        <CommonBanner title={"register"} />
        <Register />
    </>
  )
}

export default RegisterPage