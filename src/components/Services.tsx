import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { 
  Search, 
  Thermometer, 
  Lightbulb, 
  Wind, 
  Shield,
  ArrowRight,
  DollarSign,
  Cpu,
  Zap,
  Activity,
  BarChart3,
  Award
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: "AI Energy Audits",
    description: "Advanced machine learning algorithms analyze your home's energy patterns with unprecedented precision.",
    features: ["Thermal AI Imaging", "IoT Sensor Network", "Predictive Analytics", "Carbon Footprint Analysis"],
    price: "From $500",
    badge: "Most Advanced",
    savings: "Up to 40% efficiency gain",
    color: "green",
    tech: "AI-Powered"
  },
  {
    icon: Thermometer,
    title: "Smart Heat Pumps",
    description: "Next-generation heat pump systems with intelligent climate control and adaptive learning.",
    features: ["Variable Speed Technology", "Smart Grid Integration", "Geothermal Options", "Remote Monitoring"],
    price: "From $4,500",
    badge: "Up to $7,100 Rebate",
    savings: "$3,200 annual savings",
    color: "blue",
    tech: "Smart Technology"
  },
  {
    icon: Cpu,
    title: "Smart Insulation Systems",
    description: "Engineered insulation solutions with integrated sensors for optimal thermal performance.",
    features: ["Phase-Change Materials", "Vapor Barrier Tech", "Thermal Bridging Solutions", "Air Sealing Systems"],
    price: "From $1,800",
    badge: "Quick ROI",
    savings: "25% heat loss reduction",
    color: "purple",
    tech: "Nano-Materials"
  },
  {
    icon: Wind,
    title: "Intelligent Ventilation",
    description: "Smart ventilation systems with air quality monitoring and automated climate control.",
    features: ["AI Air Quality Control", "Energy Recovery Systems", "Smart Filtration", "Mobile App Control"],
    price: "From $2,800",
    badge: "Health + Efficiency",
    savings: "35% energy reduction",
    color: "cyan",
    tech: "IoT Connected"
  },
  {
    icon: Lightbulb,
    title: "Home Automation Hub",
    description: "Comprehensive smart home integration for maximum energy efficiency and convenience.",
    features: ["Unified Control System", "Learning Algorithms", "Energy Optimization", "Voice Integration"],
    price: "From $1,200",
    badge: "Future-Ready",
    savings: "20% total home savings",
    color: "orange",
    tech: "ML-Driven"
  },
  {
    icon: Activity,
    title: "Predictive Maintenance",
    description: "Proactive system monitoring with AI-driven maintenance scheduling and optimization.",
    features: ["Predictive Analytics", "Remote Diagnostics", "Automated Scheduling", "Performance Optimization"],
    price: "From $200/year",
    badge: "Always Optimized",
    savings: "Prevent 90% of issues",
    color: "emerald",
    tech: "Predictive AI"
  }
]

export function Services() {
  const [selectedService, setSelectedService] = useState(0)

  return (
    <section id="services" className="py-24 relative">
      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 border-glow">
            <Zap className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-medium">Advanced Solutions</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            <span className="gradient-text">Revolutionary</span> Energy Systems
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of home energy with our cutting-edge technology stack. 
            AI-driven solutions that learn, adapt, and optimize your home's performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative group glass-card border-glow transition-all duration-500 cursor-pointer ${
                selectedService === index ? 'neon-glow scale-105' : 'hover:border-green-400/30'
              }`}
              onClick={() => setSelectedService(index)}
            >
              {service.badge && (
                <div className="absolute -top-3 left-6 z-10">
                  <Badge className={`
                    ${service.color === 'green' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                    ${service.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}
                    ${service.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : ''}
                    ${service.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : ''}
                    ${service.color === 'orange' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : ''}
                    ${service.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : ''}
                    px-3 py-1 font-medium glass-card
                  `}>
                    {service.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4">
                  <div className={`
                    inline-flex p-4 rounded-2xl mx-auto transition-all duration-300
                    ${service.color === 'green' ? 'bg-green-500/20 text-green-400' : ''}
                    ${service.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : ''}
                    ${service.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : ''}
                    ${service.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' : ''}
                    ${service.color === 'orange' ? 'bg-orange-500/20 text-orange-400' : ''}
                    ${service.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                    group-hover:scale-110
                  `}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <span className="text-xs font-medium text-gray-400 bg-gray-800/80 px-2 py-1 rounded-full">
                      {service.tech}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-300 text-center leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm">
                      <div className={`h-2 w-2 rounded-full ${
                        service.color === 'green' ? 'bg-green-400' : 
                        service.color === 'blue' ? 'bg-blue-400' : 
                        service.color === 'purple' ? 'bg-purple-400' : 
                        service.color === 'cyan' ? 'bg-cyan-400' : 
                        service.color === 'orange' ? 'bg-orange-400' : 
                        'bg-emerald-400'
                      }`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 font-semibold text-white">
                      <DollarSign className="h-4 w-4 text-green-400" />
                      <span>{service.price}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      {service.savings}
                    </div>
                  </div>
                  
                  <Button className={`w-full border-0 transition-all duration-300 ${
                    service.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' : 
                    service.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' : 
                    service.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' : 
                    service.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700' : 
                    service.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' : 
                    'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
                  } text-white font-semibold rounded-xl group`}>
                    <span>Explore Technology</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="glass-card p-8 rounded-3xl border-glow text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <BarChart3 className="h-8 w-8 text-green-400" />
            <h3 className="text-2xl font-bold gradient-text">Performance Guaranteed</h3>
          </div>
          
          <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
            Our advanced monitoring systems track performance in real-time. 
            <span className="text-green-400 font-semibold"> 100% satisfaction guarantee</span> with 
            measurable energy savings or your money back.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { value: '99.2%', label: 'System Uptime', icon: Shield },
              { value: '24/7', label: 'AI Monitoring', icon: Activity },
              { value: '15 Yrs', label: 'Warranty Coverage', icon: Award }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-xl">
                <stat.icon className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl neon-glow">
            Schedule Advanced Assessment
          </Button>
        </div>
      </div>
    </section>
  )
}