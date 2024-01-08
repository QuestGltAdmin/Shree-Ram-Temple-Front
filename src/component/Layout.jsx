import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <div className="">
      <Header />
      {props.children}
      <Footer />
    </div> 
    </>
  )
}

export default Layout
