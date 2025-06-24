import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Menu, X, Zap, Phone, Shield, Star } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-card backdrop-blur-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl blur-sm neon-glow"></div>
              <div className="relative bg-gradient-to-r from-green-500 to-cyan-500 p-3 rounded-xl">
                <Zap className="h-7 w-7 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold gradient-text tracking-tight">CanPure Energy</span>
              <div className="flex items-center space-x-1 text-xs text-green-400">
                <Shield className="h-3 w-3" />
                <span>Certified Professional</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300 glass-card px-4 py-2">
              <Phone className="h-4 w-4 text-green-400" />
              <span className="font-medium">(416) 555-0123</span>
            </div>
            
            <div className="flex items-center space-x-1 text-xs text-yellow-400">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            
            <Button className="relative bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0 px-6 py-3 rounded-xl font-semibold transition-all duration-300 neon-glow">
              Free Energy Scan
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden glass-button p-3 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden glass-card mt-4 mb-4 p-6 rounded-2xl">
            <nav className="flex flex-col space-y-6">
              {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-white font-medium transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="font-medium">(416) 555-0123</span>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0 py-3 rounded-xl font-semibold">
                  Free Energy Scan
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}