import React from 'react'

import '../tailwind.output.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

/**
 * The main component for the website.
 *
 * @return {*}
 */
function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-evenly text-base font-black">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
