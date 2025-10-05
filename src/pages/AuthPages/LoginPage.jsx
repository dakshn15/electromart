import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import Login from '../../components/Auth/Login'

function LoginPage() {
  return (
    <>
        <CommonBanner title={"Login"} />
        <Login />
    </>
  )
}

export default LoginPage