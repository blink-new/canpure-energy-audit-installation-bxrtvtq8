import React from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react'

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Expertise',
      description: 'Over 15 years of experience in energy efficiency and home optimization solutions.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Dedicated to delivering exceptional service and long-term customer satisfaction.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Staying ahead with the latest energy technologies and industry best practices.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Certified professionals using premium materials and proven installation methods.'
    }
  ]

  const achievements = [
    { number: '2,500+', label: 'Homes Served' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '35%', label: 'Average Energy Savings' }
  ]

  const certifications = [
    'Energy Star Certified Partner',
    'NATE Certified Technicians',
    'Licensed & Insured in Ontario',
    'Better Business Bureau A+ Rating',
    'Manufacturer Certified Installers'
  ]

  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                About CanPure Energy
              </Badge>
              
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Ontario's Trusted Energy 
                <span className="text-gradient block">Efficiency Experts</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 2009, CanPure Energy has been helping Ontario homeowners reduce energy costs, 
                improve comfort, and increase property values through professional energy audits and 
                system installations. Our certified team combines years of experience with cutting-edge 
                technology to deliver results you can count on.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{achievement.number}</div>
                  <div className="text-sm font-medium text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Service Areas</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Proudly serving homeowners across Ontario including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>• Greater Toronto Area</div>
                <div>• Ottawa Region</div>
                <div>• Hamilton & Surrounding</div>
                <div>• London & Area</div>
                <div>• Kitchener-Waterloo</div>
                <div>• Windsor & Essex</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center card-shadow">
                  <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                    <value.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <Card className="p-6 card-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Certifications & Credentials</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h3>
            <p className="text-lg text-gray-600">
              Building trust and expertise in energy efficiency since 2009
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                year: '2009',
                title: 'Company Founded',
                description: 'Started with a mission to help Ontario families reduce energy costs'
              },
              {
                year: '2012',
                title: 'Team Expansion',
                description: 'Grew to serve the entire GTA with certified energy auditors'
              },
              {
                year: '2016',
                title: 'Technology Integration',
                description: 'Adopted advanced diagnostic tools and smart home solutions'
              },
              {
                year: '2024',
                title: 'Industry Leadership',
                description: 'Recognized as Ontario\'s premier energy efficiency company'
              }
            ].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white font-bold rounded-full mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 card-shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Experience the CanPure Difference
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied homeowners who have transformed their energy efficiency 
              with our professional solutions and exceptional service.
            </p>
            <Button className="btn-primary text-lg px-8 py-4 group">
              Start Your Energy Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}