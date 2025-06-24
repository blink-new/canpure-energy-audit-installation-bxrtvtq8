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
  Zap,
  Calculator,

  Star,
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
    'AI Energy Audit',
    'Smart Heat Pump Installation', 
    'Home Automation System',
    'Insulation Upgrade',
    'Ventilation System',
    'Maintenance & Support',
    'Other/Consultation'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(416) 555-0123", "Toll-free: 1-800-CAN-PURE"],
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
      details: ["All of Ontario", "GTA, Ottawa, Hamilton"],
      color: "cyan"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-4PM"],
      color: "purple"
    }
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 relative">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-12 rounded-3xl border-glow neon-glow">
              <div className="inline-flex p-4 rounded-full bg-green-500/20 text-green-400 mb-6">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-4">Thank You!</h2>
              <p className="text-xl text-gray-300 mb-6">
                Your energy transformation request has been received. Our AI systems are already 
                analyzing your information for the best solutions.
              </p>
              <div className="glass-card p-4 rounded-xl border-glow mb-6">
                <p className="text-green-400 font-medium">⚡ Expected Response Time: Within 2 hours</p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0 px-6 py-3 rounded-xl font-semibold"
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 border-glow">
            <Zap className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-medium">Start Your Transformation</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            <span className="gradient-text">Get Started</span> Today
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your home with cutting-edge energy technology? 
            <span className="text-green-400 font-semibold"> Free consultation</span> with 
            AI-powered analysis and personalized recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-3xl border-glow">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="h-6 w-6 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Free Energy Assessment</h3>
                <Badge className="glass-card border-green-500/30 text-green-400 px-2 py-1">
                  AI-Powered
                </Badge>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full glass-card bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-400 focus:ring-green-400/20 focus:outline-none"
                    >
                      <option value="" className="bg-gray-800">Select a service</option>
                      {services.map((service, i) => (
                        <option key={i} value={service} className="bg-gray-800">{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="glass-card bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 resize-none"
                    placeholder="Tell us about your home, current energy challenges, and what you'd like to achieve..."
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl neon-glow transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        <span>Get Free AI Analysis</span>
                      </div>
                    )}
                  </Button>
                </div>

                <div className="glass-card p-4 rounded-xl border-glow">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div className="text-sm text-gray-300">
                      <strong className="text-green-400">Free Assessment Includes:</strong> 
                      AI-powered energy analysis, custom efficiency recommendations, 
                      rebate qualification check, and ROI projections.
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card p-6 border-glow hover:neon-glow transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    info.color === 'green' ? 'bg-green-500/20 text-green-400' :
                    info.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    info.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick Stats */}
            <div className="glass-card p-6 rounded-xl border-glow">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span>Why Choose CanPure?</span>
              </h4>
              <div className="space-y-3">
                {[
                  { metric: "2-Hour Response", desc: "Fastest in Ontario" },
                  { metric: "100% Satisfaction", desc: "Guaranteed results" },
                  { metric: "15+ Years", desc: "Industry experience" },
                  { metric: "AI-Powered", desc: "Cutting-edge tech" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-green-400">{stat.metric}</div>
                      <div className="text-xs text-gray-400">{stat.desc}</div>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="glass-card p-6 rounded-xl border-glow border-red-500/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Emergency Service</h4>
              </div>
              <p className="text-sm text-gray-300 mb-2">24/7 emergency support for existing clients</p>
              <p className="text-red-400 font-semibold">(416) 555-HELP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}