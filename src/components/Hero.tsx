import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  MapPin, 
  TrendingUp, 
  Shield, 
  Zap,
  Award,
  BarChart3,
  Users
} from 'lucide-react'

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger counter animations
          const counters = entry.target.querySelectorAll('[data-count]')
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-count') || '0')
            let current = 0
            const increment = target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              counter.textContent = Math.floor(current).toLocaleString()
            }, 40)
          })
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Hero Content */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="glass-card px-4 py-2 border-glow">
                  <div className="flex items-center space-x-2 text-green-400">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">Serving All of Ontario</span>
                  </div>
                </div>
                <div className="glass-card px-4 py-2">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">ISO Certified</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Next-Gen</span>
                <br />
                <span className="gradient-text neon-text">Energy Solutions</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Advanced AI-powered energy audits and smart system installations. 
                <span className="text-green-400 font-semibold"> Transform your home</span> into 
                an intelligent, efficient living space.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="relative bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl neon-glow transition-all duration-300 group">
                <span>Start Energy Transformation</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="glass-button text-white border-white/20 px-8 py-6 text-lg font-semibold rounded-xl hover:border-green-400/50">
                View Technology
              </Button>
            </div>

            {/* Stats Section */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Users, value: 2500, suffix: '+', label: 'Homes Optimized' },
                { icon: TrendingUp, value: 35, suffix: '%', label: 'Avg. Energy Reduction' },
                { icon: BarChart3, value: 4800, suffix: '+', label: 'kWh Saved Daily' },
                { icon: Shield, value: 15, suffix: ' Yrs', label: 'Industry Experience' }
              ].map((stat, index) => (
                <Card key={index} className="glass-card p-4 text-center border-glow pulse-glow">
                  <stat.icon className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    <span data-count={stat.value}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-300 font-medium">4.9/5 (847 reviews)</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Fully Insured & Bonded</span>
              </div>
            </div>
          </div>

          {/* Right side - Interactive Dashboard */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl border-glow">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Energy Efficiency Dashboard</h3>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Data</span>
                </div>
              </div>

              {/* Energy Metrics */}
              <div className="space-y-6">
                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300">Current Efficiency</span>
                    <span className="text-2xl font-bold gradient-text">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-cyan-500 h-3 rounded-full w-[87%] neon-glow"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl text-center">
                    <Zap className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">2.4 kW</div>
                    <div className="text-xs text-gray-400">Current Usage</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl text-center">
                    <TrendingUp className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">$247</div>
                    <div className="text-xs text-gray-400">Monthly Savings</div>
                  </div>
                </div>

                {/* Smart Recommendations */}
                <div className="glass-card p-4 rounded-xl">
                  <h4 className="text-sm font-semibold text-white mb-3">AI Recommendations</h4>
                  <div className="space-y-2">
                    {[
                      'Upgrade to smart thermostat (+12% efficiency)',
                      'Install heat pump system (+25% savings)',
                      'Add attic insulation (+8% efficiency)'
                    ].map((rec, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating indicators */}
            <div className="absolute -top-4 -left-4 glass-card p-3 rounded-xl border-glow floating-element">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white font-medium">Real-time Monitoring</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-xl border-glow floating-element" style={{animationDelay: '2s'}}>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-cyan-400" />
                <span className="text-sm text-white font-medium">Energy Star Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}