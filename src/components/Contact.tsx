import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Calculator,
  Award
} from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const services = [
    'Energy Audit',
    'Heat Pump Installation', 
    'Insulation Upgrade',
    'Ventilation System',
    'Smart Home Integration',
    'Maintenance & Support',
    'Other/Consultation'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(416) 555-0123", "Emergency: (416) 555-HELP"],
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@canpure.energy", "support@canpure.energy"],
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: ["All of Ontario", "GTA, Ottawa, Hamilton & More"],
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-4PM, Sun: Emergency"],
      color: "orange"
    }
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding gradient-bg">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12 card-shadow-lg">
              <div className="inline-flex p-4 bg-green-100 rounded-full text-green-600 mb-6">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-xl text-gray-600 mb-6">
                Your energy consultation request has been received. Our team will review 
                your information and contact you within 2 business hours.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">⚡ Next Steps: Phone consultation within 2 hours</p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Submit Another Request
              </Button>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mb-4">
            Get Started Today
          </Badge>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Improve Your Home's 
            <span className="text-gradient block">Energy Efficiency?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how much you can save 
            with professional energy solutions. No obligation, just expert advice.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 card-shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="h-6 w-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Free Energy Assessment</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, i) => (
                        <option key={i} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full resize-none"
                    placeholder="Tell us about your home, current energy challenges, and what you'd like to achieve..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-4 group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      <span>Get Free Consultation</span>
                    </div>
                  )}
                </Button>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-green-800">
                      <strong>Free Assessment Includes:</strong> 
                      {' '}Comprehensive energy analysis, personalized recommendations, 
                      rebate qualification review, and estimated savings projections.
                    </div>
                  </div>
                </div>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 card-shadow hover:card-shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    info.color === 'green' ? 'bg-green-100 text-green-600' :
                    info.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    info.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Why Choose Us */}
            <Card className="p-6 card-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span>Why Choose CanPure?</span>
              </h4>
              <div className="space-y-3">
                {[
                  { metric: "2-Hour Response", desc: "Fastest in Ontario" },
                  { metric: "100% Satisfaction", desc: "Guaranteed results" },
                  { metric: "15+ Years Experience", desc: "Proven expertise" },
                  { metric: "Licensed & Insured", desc: "Full protection" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-green-600">{stat.metric}</div>
                      <div className="text-xs text-gray-500">{stat.desc}</div>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 card-shadow border border-red-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-red-100 text-red-600">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Emergency Service</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">24/7 emergency support for existing clients</p>
              <p className="text-red-600 font-semibold">(416) 555-HELP</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}