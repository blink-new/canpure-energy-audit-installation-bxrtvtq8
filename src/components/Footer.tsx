import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Zap, 
  Shield, 
  Award,
  ExternalLink,
  Heart
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    'AI Energy Audits',
    'Smart Heat Pumps',
    'Home Automation',
    'Insulation Systems',
    'Ventilation Solutions',
    'Maintenance Plans'
  ]

  const serviceAreas = [
    'Toronto',
    'Ottawa',
    'Hamilton',
    'London',
    'Kitchener',
    'Windsor'
  ]

  const certifications = [
    'Energy Star Certified',
    'ISO 50001 Compliant',
    'NATE Certified',
    'BBB A+ Rating'
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      <div className="container relative z-10 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl blur-sm opacity-75"></div>
                <div className="relative bg-gradient-to-r from-green-500 to-cyan-500 p-3 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">CanPure Energy</h3>
                <p className="text-green-400 text-sm font-medium">Advanced Energy Solutions</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Leading Ontario in AI-powered energy optimization. 
              Transforming homes with cutting-edge technology and 
              sustainable solutions since 2009.
            </p>

            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-sm text-gray-300">Fully Licensed & Insured</span>
            </div>

            <div className="flex items-center space-x-3">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-300">BBB A+ Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-green-400/30 pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-green-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-cyan-400/30 pb-2">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <div className="text-gray-400 text-sm flex items-center space-x-2">
                    <MapPin className="h-3 w-3 text-cyan-400" />
                    <span>{area}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="glass-card p-3 rounded-xl border-glow">
              <p className="text-xs text-green-400 font-medium">
                + All surrounding areas in Ontario
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-b border-purple-400/30 pb-2">
              Get In Touch
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-white font-medium">(416) 555-0123</p>
                  <p className="text-gray-400 text-xs">24/7 Emergency: (416) 555-HELP</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-white font-medium">info@canpure.energy</p>
                  <p className="text-gray-400 text-xs">Response within 2 hours</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl border-glow">
              <h5 className="text-sm font-semibold text-white mb-2">Business Hours</h5>
              <div className="space-y-1 text-xs text-gray-300">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="glass-card p-6 rounded-2xl border-glow mb-8">
          <h4 className="text-lg font-bold text-white mb-4 text-center">
            Industry Certifications & Compliance
          </h4>
          <div className="grid md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center space-x-2 glass-card px-3 py-2 rounded-lg border-glow">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} CanPure Energy. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in Ontario</span>
              <ExternalLink className="h-3 w-3 ml-2" />
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              CanPure Energy is a registered trademark. All product names, logos, and brands are property of their respective owners. 
              Energy savings and efficiency improvements are estimates based on historical data and may vary by property. 
              Rebates subject to government program availability and eligibility requirements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}