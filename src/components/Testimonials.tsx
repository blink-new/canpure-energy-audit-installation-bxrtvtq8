import React, { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  Home,
  Zap,
  Award
} from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Homeowner",
    location: "Toronto, ON",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    quote: "The AI-powered energy audit was incredible. CanPure's system identified inefficiencies I never knew existed. Our monthly bills dropped by $340, and the smart home integration is seamless.",
    savings: "$340/month",
    improvement: "42% efficiency gain",
    system: "Smart Heat Pump + AI Controls"
  },
  {
    name: "Michael Rodriguez",
    role: "Property Manager",
    location: "Ottawa, ON",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5,
    quote: "Managing 12 properties, I needed efficiency at scale. CanPure's predictive maintenance system prevents issues before they happen. ROI was achieved in just 8 months.",
    savings: "$2,100/month",
    improvement: "38% cost reduction",
    system: "Multi-Property AI System"
  },
  {
    name: "Dr. Amanda Foster",
    role: "Research Scientist",
    location: "Hamilton, ON",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 5,
    quote: "As a scientist, I appreciate data-driven solutions. The real-time analytics dashboard shows exactly how my home performs. The carbon footprint reduction exceeded my expectations.",
    savings: "$285/month",
    improvement: "Carbon negative home",
    system: "Full Smart Home Suite"
  },
  {
    name: "James Thompson",
    role: "Tech Executive",
    location: "Mississauga, ON",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    quote: "The future of home energy is here. CanPure's ML algorithms continuously optimize my home's performance. Voice control, app integration, and guaranteed savings - it's everything I wanted.",
    savings: "$425/month",
    improvement: "45% efficiency boost",
    system: "AI-Driven Everything"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 border-glow">
            <Award className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            <span className="gradient-text">Proven</span> Results
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real homeowners sharing their energy transformation experiences. 
            <span className="text-green-400 font-semibold"> Measurable savings</span>, 
            advanced technology, and exceptional service.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="glass-card p-8 lg:p-12 rounded-3xl border-glow neon-glow mb-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Testimonial Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-16 w-16 ring-2 ring-green-400/30">
                  <AvatarImage src={currentTestimonial.avatar} />
                  <AvatarFallback className="bg-gradient-to-r from-green-500 to-cyan-500 text-white">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-xl font-bold text-white">{currentTestimonial.name}</h4>
                  <p className="text-gray-400">{currentTestimonial.role}</p>
                  <p className="text-green-400 text-sm">{currentTestimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-green-400/30 absolute -top-2 -left-2" />
                <blockquote className="text-lg lg:text-xl text-gray-300 leading-relaxed pl-6">
                  {currentTestimonial.quote}
                </blockquote>
              </div>

              <div className="flex items-center justify-between pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={prevTestimonial}
                  className="glass-button text-white border-white/20 hover:border-green-400/50"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === currentIndex 
                          ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={nextTestimonial}
                  className="glass-button text-white border-white/20 hover:border-green-400/50"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-xl border-glow text-center">
                <TrendingUp className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">{currentTestimonial.savings}</div>
                <div className="text-sm text-gray-400">Monthly Savings</div>
              </div>
              
              <div className="glass-card p-4 rounded-xl border-glow text-center">
                <Zap className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">{currentTestimonial.improvement}</div>
                <div className="text-sm text-gray-400">Performance Boost</div>
              </div>
              
              <div className="glass-card p-4 rounded-xl border-glow text-center">
                <Home className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-white text-center leading-tight">
                  {currentTestimonial.system}
                </div>
                <div className="text-xs text-gray-400 mt-1">System Installed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "4.9/5", label: "Average Rating", icon: Star, color: "yellow" },
            { value: "847", label: "Happy Clients", icon: Award, color: "green" },
            { value: "$2,400", label: "Avg. Monthly Savings", icon: TrendingUp, color: "cyan" },
            { value: "98.7%", label: "Satisfaction Rate", icon: Home, color: "purple" }
          ].map((stat, i) => (
            <Card key={i} className="glass-card p-6 text-center border-glow pulse-glow">
              <div className={`inline-flex p-3 rounded-xl mb-3 ${
                stat.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                stat.color === 'green' ? 'bg-green-500/20 text-green-400' :
                stat.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                'bg-purple-500/20 text-purple-400'
              }`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}