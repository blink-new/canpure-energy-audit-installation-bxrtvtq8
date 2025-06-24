import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Cyber grid background */}
        <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none"></div>
        
        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl floating-element" style={{animationDelay: '4s'}}></div>
        </div>

        <Header />
        <Routes>
          <Route path="/" element={
            <main className="relative z-10">
              <Hero />
              <Services />
              <About />
              <Testimonials />
              <Contact />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App