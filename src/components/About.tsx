import React from 'react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Users, 
  Award, 
  Zap, 
  Shield, 
  TrendingUp, 
  Target,
  Cpu,
  Globe,

  CheckCircle
} from 'lucide-react'

export function About() {
  const certifications = [
    { name: "Energy Star Certified", icon: Award, color: "green" },
    { name: "ISO 50001 Compliant", icon: Shield, color: "blue" },
    { name: "NATE Certified", icon: CheckCircle, color: "cyan" },
    { name: "Better Business Bureau", icon: Users, color: "purple" }
  ]

  const stats = [
    { icon: Users, value: "2,500+", label: "Smart Homes Transformed", color: "green" },
    { icon: Zap, value: "12.5 GWh", label: "Energy Saved Annually", color: "blue" },
    { icon: TrendingUp, value: "98.7%", label: "Client Satisfaction Rate", color: "cyan" },
    { icon: Globe, value: "5,200 T", label: "CO₂ Emissions Prevented", color: "emerald" }
  ]

  const values = [
    {
      icon: Cpu,
      title: "Innovation First",
      description: "Pioneering AI-driven energy solutions that learn and adapt to your lifestyle.",
      color: "green"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every installation is optimized using advanced analytics and performance modeling.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Guaranteed Results",
      description: "We stand behind our work with measurable performance guarantees and warranties.",
      color: "cyan"
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="container relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 border-glow">
            <Users className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">About CanPure Energy</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            <span className="gradient-text">Leading</span> Energy Innovation
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we've been at the forefront of energy technology, 
            combining cutting-edge AI with proven engineering to deliver 
            <span className="text-green-400 font-semibold"> unprecedented energy efficiency</span>.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card p-6 text-center border-glow pulse-glow">
              <div className={`inline-flex p-3 rounded-xl mb-3 ${
                stat.color === 'green' ? 'bg-green-500/20 text-green-400' :
                stat.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                stat.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                'bg-emerald-500/20 text-emerald-400'
              }`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl border-glow">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To revolutionize home energy systems through intelligent technology, 
                making sustainable living accessible, efficient, and profitable for every 
                Ontario homeowner.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-400">Technology Leadership</h4>
                <ul className="space-y-2">
                  {[
                    "First in Ontario to deploy AI-powered energy audits",
                    "Proprietary machine learning algorithms for optimization",
                    "Real-time IoT monitoring and predictive maintenance",
                    "Integration with smart grid and renewable energy systems"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-gray-300">
                      <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card p-6 border-glow hover:neon-glow transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    value.color === 'green' ? 'bg-green-500/20 text-green-400' :
                    value.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-cyan-500/20 text-cyan-400'
                  }`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="glass-card p-8 rounded-3xl border-glow text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Industry Certifications & Recognition</h3>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-4 rounded-xl border-glow">
                <div className={`inline-flex p-3 rounded-xl mb-3 ${
                  cert.color === 'green' ? 'bg-green-500/20 text-green-400' :
                  cert.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  cert.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  <cert.icon className="h-6 w-6" />
                </div>
                <div className="text-sm text-white font-medium">{cert.name}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Fully Licensed & Insured",
              "WSIB Compliant",
              "BBB A+ Rating",
              "Google 4.9★ Reviews",
              "HomeStars Verified"
            ].map((badge, i) => (
              <Badge key={i} className="glass-card border-green-500/30 text-green-400 px-3 py-1">
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="glass-card p-8 rounded-3xl border-glow mt-16">
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">Innovation Timeline</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2009", title: "Founded", desc: "Started as traditional energy audit company" },
              { year: "2018", title: "AI Integration", desc: "First to deploy machine learning in energy analysis" },
              { year: "2024", title: "Smart Grid Ready", desc: "Full integration with Ontario's smart grid infrastructure" }
            ].map((milestone, i) => (
              <div key={i} className="text-center relative">
                <div className="glass-card p-4 rounded-xl border-glow mb-4">
                  <div className="text-2xl font-bold gradient-text">{milestone.year}</div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                <p className="text-gray-300 text-sm">{milestone.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}