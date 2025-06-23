import { Users, CheckCircle, ArrowRight, UserCheck, FileText, Calendar, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function HRMPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 p-2 md:p-4  rounded-lg w-fit mb-6">
                <Users className="h-7 w-7 md:h-10 text-white" />
              </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Human Resource Management Platform</h1>
                          <p className="text-sm md:text-xl text-blue-100 mb-8">
                Streamline your HR processes with our comprehensive platform designed for companies, government
                agencies, and MDAs.
              </p>
              <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                  Transform Your HR Today
                  <ArrowRight className="w-4 md:h-5 md:w-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Complete HR Solution</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Leave Management System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <UserCheck className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Staff Regularization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Job Posting & Applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>HR Analytics Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
                       <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
Complete HR Management Solution</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From recruitment to retirement, our platform handles every aspect of human resource management with
              efficiency and precision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4 md:space-y-8">
              <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
                <div className="bg-blue-100 p-2 md:p-4  rounded-lg w-fit mb-4">
                  <Calendar className="w-4 md:h-6 md:w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leave Management System</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span>• Online leave application with calendar integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Multi-level approval workflows</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Automated leave balance calculations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Holiday and weekend management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border">
                <div className="bg-green-100 p-2 md:p-4  rounded-lg w-fit mb-4">
                  <UserCheck className="w-4 md:h-6 md:w-6 text-green-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Staff Regularization</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span>• Contract to permanent staff conversion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Automated eligibility verification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Document management and verification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Approval workflow management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 md:space-y-8">
              <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
                <div className="bg-purple-100 p-2 md:p-4  rounded-lg w-fit mb-4">
                  <FileText className="w-4 md:h-6 md:w-6 text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recruitment Management</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span>• Internal job posting and applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Candidate screening and evaluation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Interview scheduling and management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Onboarding process automation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
                <div className="bg-orange-100 p-2 md:p-4  rounded-lg w-fit mb-4">
                  <BarChart3 className="w-4 md:h-6 md:w-6 text-orange-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Employee Self-Service</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span>• Personal information management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Payslip and tax document access</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Performance appraisal system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span>• Training and development tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 p-12 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Transform Your HR Operations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-900 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Improved Efficiency</h4>
                <p className="text-gray-600 text-sm">Automate routine HR tasks and focus on strategic initiatives</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-4 rounded-full w-fit mx-auto mb-4">
                  <FileText className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Digital Transformation</h4>
                <p className="text-gray-600 text-sm">Move from paper-based to fully digital HR processes</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-4 rounded-full w-fit mx-auto mb-4">
                  <UserCheck className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">User-Friendly</h4>
                <p className="text-gray-600 text-sm">Intuitive interface that requires minimal training</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-4 rounded-full w-fit mx-auto mb-4">
                  <BarChart3 className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Complete Solution</h4>
                <p className="text-gray-600 text-sm">End-to-end HR management from hiring to retirement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Modernize Your HR Department?</h2>
 <p className="text-sm mdtext-lg text-blue-100 mb-4 md:mb-8 max-w-2xl mx-auto">            Join organizations that have streamlined their HR operations with our comprehensive platform.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                Request a Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </Link>
            <Link href="/services">
              <button  className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                Explore Other Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
