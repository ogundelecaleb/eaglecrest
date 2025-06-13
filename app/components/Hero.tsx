"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, CheckCircle } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen pt-22 md:pt-22 lg:pt-24 flex items-center gradient-bg overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-white space-y-8 ${isVisible ? "slide-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-200">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Trusted by 100+ Organizations</span>
              </div>
              <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                Building
                <span className="block text-blue-300">Software Solutions</span>
                That Transform Business
              </h1>
              <p className="text-sm md:text-base text-blue-100 text-justify lg:max-w-[80%]">
                Eagle Crest specializes in developing real-world software solutions that solve complex problems for
                individuals and organizations. From HRM systems to payment gateways, we deliver quality software that
                complies with regulations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary bg-white text-blue-900 hover:bg-blue-50">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/about" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700">
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-blue-200">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className={`relative ${isVisible ? "fade-in" : "opacity-0"} py-8`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl float">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-gray-">Quality Assured</h3>
                    <p className="text-sm md:text-base text-gray-600">Regulation Compliant</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm md:text-base text-gray-600">Project Success Rate</span>
                    <span className="font-bold text-green-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-base md:text-xl font-bold">24/7</div>
                <div className="text-xs md:text-sm">Support</div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg float"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-base md:text-xl font-bold">100%</div>
                <div className="text-xs md:text-sm">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
