import React from 'react'
import logo from "../assets/logo.png"

const Footer =() => {
  return (
    <footer className='border-t border-gray-200 bg-[#FCFCFE]'>
         <div className=' mx-auto grid max-w-7xl grid-cols-1 gap-9  px-6 py-12 md:grid-cols-5 md:px-12'>
          <div >
            <img src={logo}
            alt='OpenRouter'
            className='h-5 w-auto'/>

            <p className='text-muted py-3'>
              © 2026 OpenRouter, Inc
            </p>
          </div>

          <div>
            <h2 className='font-medium text-[14px] text-[#03080A]  '>Products</h2>
            <div className='mt-4 flex flex-col gap-3 text-sm text-gray-500 '>
              <a href="" className='transition hover:text-blue-900'>Chat</a>
              <a href="">Rankings</a>
            </div>
          </div>

          <div>
            playground
          </div>

          <div>
            Docs
          </div>

          <div>
            Pricing
          </div>

         </div>
    </footer>
  )
}

export default Footer;