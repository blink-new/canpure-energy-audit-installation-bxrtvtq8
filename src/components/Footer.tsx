import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Zap, 
  Clock,
  ExternalLink
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Energy Audits', href: '#services' },
    { name: 'Heat Pump Installation', href: '#services' },
    { name: 'Insulation Services', href: '#services' },
    { name: 'Smart Home Systems', href: '#services' },
    { name: 'Maintenance Plans', href: '#services' },
    { name: 'About Us', href: '#about' }
  ]

  const serviceAreas = [
    'Toronto & GTA',
    'Ottawa Region',
    'Hamilton & Area',
    'London',
    'Kitchener-Waterloo',
    'Windsor & Essex'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">CanPure Energy</h3>
                <p className="text-green-400 text-sm font-medium">Professional Energy Solutions</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Ontario's trusted energy efficiency experts. Helping homeowners reduce costs, 
              improve comfort, and increase property values since 2009.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">BBB A+ Rating</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Energy Star Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3 text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-800 p-3 rounded-lg">
              <p className="text-xs text-green-400 font-medium">
                + All surrounding areas in Ontario
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">(416) 555-0123</p>
                  <p className="text-gray-400 text-xs">Emergency: (416) 555-HELP</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-white font-medium">info@canpure.energy</p>
                  <p className="text-gray-400 text-xs">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-sm">Business Hours</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
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
                <a href="#" className="hover:text-green-400 transition-colors">Sitemap</a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Proudly serving Ontario</span>
              <ExternalLink className="h-3 w-3" />
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
              CanPure Energy is a registered trademark. Energy savings and efficiency improvements are estimates 
              based on historical data and may vary by property. All work performed by licensed technicians. 
              Rebates subject to government program availability and eligibility requirements. 
              Financing options available with approved credit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}