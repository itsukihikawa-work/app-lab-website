import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Research from './components/Research'
import Publications from './components/Publications'
import Members from './components/Members'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Research />
      <Publications />
      <Members />
      <Contact />
    </div>
  )
}

export default App