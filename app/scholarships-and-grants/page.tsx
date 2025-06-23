import { GraduationCap, CheckCircle, ArrowRight, Users, Shield, Clock, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ScholarshipsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 p-2 md:p-4  rounded-lg w-fit mb-6">
                <GraduationCap className="h-7 w-7 md:h-10  text-white" />
              </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Scholarships and Grants Management Platform</h1>
                          <p className="text-sm md:text-xl text-blue-100 mb-8">

                Transform your scholarship and grant processes with our comprehensive digital platform that handles
                everything from application to disbursement.
              </p>
              <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Platform Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Multi-stakeholder management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Secure document handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Automated workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Comprehensive analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Complete Scholarship Management Solution
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform streamlines the entire scholarship lifecycle, from initial application to final disbursement,
              ensuring transparency and efficiency at every step.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
              <div className="bg-blue-100 p-2 md:p-4 rounded-lg w-fit mb-4">
                <Users className="h-4 w-4 md:h-6 md:w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Portal</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span>• Intuitive application interface with step-by-step guidance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Profile management with academic records integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Real-time application status tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Document upload and verification system</span>
                </li>
              </ul>
            </div>

            <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-4 w-4 md:h-6 md:w-6 text-green-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Admin Dashboard</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span>• Multi-level verification and approval workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Automated eligibility validation against criteria</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Bulk processing and batch operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Comprehensive reporting and analytics dashboard</span>
                </li>
              </ul>
            </div>

            <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span>• Integration with BVN and NIN for identity verification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Automated notifications and email alerts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Complete audit trail for transparency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>• Governor-level approval workflow integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 p-12 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Platform?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">User-Friendly Interface</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Intuitive design that makes it easy for both applicants and administrators to navigate and use
                      effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Enhanced Security</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Integration with BVN and NIN systems provides additional layers of verification and fraud
                      prevention.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Complete Transparency</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Full audit trails and transparent approval processes ensure accountability at every level.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Comprehensive Reporting</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Robust analytics and monitoring dashboard provides insights for better decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Digitize Your Scholarship Program?</h2>
          <p className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading institutions that have transformed their scholarship management with our comprehensive
            platform.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                Schedule a Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </Link>
            <Link href="/services">
              <button  className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
