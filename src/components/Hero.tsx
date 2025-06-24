import React from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Shield
} from 'lucide-react'

export function Hero() {
  const stats = [
    { value: '2,500+', label: 'Homes Optimized', icon: Users },
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '35%', label: 'Average Savings', icon: TrendingUp },
    { value: '100%', label: 'Satisfaction Rate', icon: CheckCircle }
  ]

  const certifications = [
    'Energy Star Certified',
    'Licensed & Insured',
    'BBB A+ Rating'
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  <Shield className="h-3 w-3 mr-1" />
                  Trusted in Ontario
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Home's 
                <span className="text-gradient block">Energy Efficiency</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional energy audits and smart system installations that reduce costs, 
                improve comfort, and increase your home's value. Serving Ontario homeowners 
                with proven expertise since 2009.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">{cert}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group text-lg px-8 py-4">
                Get Free Energy Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                Call (416) 555-0123
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>No obligation estimate</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center card-shadow hover:card-shadow-lg transition-shadow">
                <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From detailed energy audits to complete system installations, 
              we provide end-to-end solutions tailored to your home's unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Energy Audit',
                description: 'Comprehensive home energy assessment with detailed recommendations',
                features: ['Thermal imaging', 'Blower door test', 'Detailed report']
              },
              {
                title: 'System Installation',
                description: 'Professional installation of energy-efficient heating and cooling systems',
                features: ['Heat pumps', 'Smart thermostats', 'Insulation upgrades']
              },
              {
                title: 'Ongoing Support',
                description: 'Maintenance and monitoring to ensure optimal performance',
                features: ['Annual tune-ups', 'System monitoring', '24/7 support']
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 card-shadow hover:card-shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}