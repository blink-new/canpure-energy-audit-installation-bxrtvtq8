import React, { useState } from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah & Mike Thompson',
      location: 'Toronto, ON',
      rating: 5,
      text: 'CanPure Energy transformed our 1950s home with a comprehensive energy audit and heat pump installation. Our heating bills dropped by 40% and the house is so much more comfortable. The team was professional, punctual, and explained everything clearly.',
      service: 'Energy Audit + Heat Pump Installation',
      savings: '40% reduction in heating costs'
    },
    {
      name: 'David Chen',
      location: 'Ottawa, ON',
      rating: 5,
      text: 'I was skeptical about the potential savings, but the energy audit revealed so many inefficiencies I hadn\'t noticed. After the insulation upgrade and air sealing, our monthly energy bills are nearly cut in half. Excellent work and great value.',
      service: 'Complete Home Energy Retrofit',
      savings: '45% reduction in energy bills'
    },
    {
      name: 'Jennifer & Paul Rodriguez',
      location: 'Hamilton, ON',
      rating: 5,
      text: 'The smart home integration they installed has been incredible. We can monitor and control our energy usage from anywhere, and the automated systems have made our home so much more efficient. Customer service is outstanding.',
      service: 'Smart Home Energy System',
      savings: '30% improved efficiency'
    },
    {
      name: 'Robert & Linda Wilson',
      location: 'London, ON',
      rating: 5,
      text: 'We\'ve used CanPure for both our primary residence and rental property. They consistently deliver high-quality work on time and on budget. The ongoing maintenance program gives us peace of mind that our systems are always running optimally.',
      service: 'Multi-Property Energy Solutions',
      savings: 'Long-term reliability & savings'
    },
    {
      name: 'Ahmed Hassan',
      location: 'Mississauga, ON',
      rating: 5,
      text: 'As a new homeowner, I wanted to ensure my house was as energy-efficient as possible. CanPure\'s comprehensive approach identified multiple improvement opportunities, and their financing options made it affordable to do everything at once.',
      service: 'New Homeowner Energy Package',
      savings: '35% energy cost reduction'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mb-4">
            Customer Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real homeowners who have transformed their energy efficiency 
            with CanPure Energy's professional services.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-12 card-shadow-lg relative">
            <div className="absolute top-6 left-6">
              <Quote className="h-8 w-8 text-green-200" />
            </div>
            
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                "{currentTestimonial.text}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 text-lg">
                  {currentTestimonial.name}
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{currentTestimonial.location}</span>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {currentTestimonial.service}
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {currentTestimonial.savings}
                </Badge>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="p-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="p-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="p-6 card-shadow hover:card-shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </blockquote>
              
              <div className="space-y-1">
                <div className="font-medium text-gray-900 text-sm">
                  {testimonial.name}
                </div>
                <div className="flex items-center space-x-1 text-gray-600 text-xs">
                  <MapPin className="h-3 w-3" />
                  <span>{testimonial.location}</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                  {testimonial.savings}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { metric: '2,500+', label: 'Happy Customers' },
            { metric: '100%', label: 'Satisfaction Rate' },
            { metric: '4.9/5', label: 'Average Rating' },
            { metric: '15+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.metric}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Satisfied Customers
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same exceptional service and results that have made 
            thousands of Ontario homeowners happy with their energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-4">
              Get Your Free Quote
            </Button>
            <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
              Read More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}