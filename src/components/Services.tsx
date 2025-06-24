import React from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Search,
  Thermometer, 
  Zap,
  Home,
  Wind,
  Settings,
  CheckCircle,
  ArrowRight,
  DollarSign
} from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Search,
      title: 'Comprehensive Energy Audit',
      description: 'Complete assessment of your home\'s energy performance with thermal imaging and blower door testing.',
      features: [
        'Thermal imaging analysis',
        'Blower door pressure testing',
        'Detailed efficiency report',
        'Rebate qualification assessment'
      ],
      price: 'Starting at $299',
      popular: true
    },
    {
      icon: Thermometer,
      title: 'Heat Pump Installation',
      description: 'Modern, efficient heating and cooling systems that can reduce energy costs by up to 50%.',
      features: [
        'High-efficiency heat pumps',
        'Smart thermostat integration',
        'Professional installation',
        'Warranty & maintenance'
      ],
      price: 'From $8,000',
      popular: false
    },
    {
      icon: Home,
      title: 'Insulation Upgrade',
      description: 'Advanced insulation solutions to improve comfort and reduce energy waste year-round.',
      features: [
        'Attic & wall insulation',
        'Air sealing services',
        'Moisture barrier installation',
        'Ventilation optimization'
      ],
      price: 'Starting at $2,500',
      popular: false
    },
    {
      icon: Wind,
      title: 'Ventilation Systems',
      description: 'Energy recovery ventilation systems that maintain air quality while minimizing energy loss.',
      features: [
        'HRV/ERV installation',
        'Ductwork optimization',
        'Air quality monitoring',
        'Filter maintenance programs'
      ],
      price: 'From $3,500',
      popular: false
    },
    {
      icon: Zap,
      title: 'Smart Home Integration',
      description: 'Connect and optimize your home systems with intelligent automation and monitoring.',
      features: [
        'Smart thermostats',
        'Energy monitoring systems',
        'Automated controls',
        'Mobile app integration'
      ],
      price: 'Starting at $1,200',
      popular: false
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing service plans to keep your systems running at peak efficiency.',
      features: [
        'Annual system tune-ups',
        'Priority service calls',
        'Performance monitoring',
        'Extended warranties'
      ],
      price: 'From $199/year',
      popular: false
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Complete Energy Solutions for Your Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial assessment to ongoing maintenance, we provide comprehensive 
            energy services designed to maximize your home's efficiency and comfort.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`p-8 card-shadow hover:card-shadow-lg transition-all duration-300 relative ${
              service.popular ? 'ring-2 ring-green-500' : ''
            }`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-green-600 text-white">
                  Most Popular
                </Badge>
              )}
              
              <div className="mb-6">
                <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                  </div>
                </div>
                
                <Button 
                  className={service.popular ? 'btn-primary w-full group' : 'btn-secondary w-full group'}
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Professional Process
            </h3>
            <p className="text-lg text-gray-600">
              Simple, transparent steps from consultation to completion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Free assessment of your energy needs and goals'
              },
              {
                step: '02',
                title: 'Detailed Analysis',
                description: 'Comprehensive audit with advanced diagnostic tools'
              },
              {
                step: '03',
                title: 'Custom Proposal',
                description: 'Tailored solutions with clear pricing and timelines'
              },
              {
                step: '04',
                title: 'Professional Installation',
                description: 'Expert installation with warranty and support'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white font-bold rounded-full mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Saving Energy?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how much you can save 
            with professional energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-4">
              Schedule Free Audit
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
              Call (416) 555-0123
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}