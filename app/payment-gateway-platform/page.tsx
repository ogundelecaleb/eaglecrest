import { CreditCard, CheckCircle, ArrowRight, Shield, Zap, BarChart3, Globe } from "lucide-react"
import Link from "next/link"

export default function PaymentGatewayPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 p-4 rounded-lg w-fit mb-6">
                <CreditCard className="h-7 w-7 md:h-10 text-white" />
              </div>
         <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Payment Gateway Platform</h1>
                          <p className="text-sm md:text-xl text-blue-100 mb-8">
                Secure, reliable payment infrastructure that supports multiple payment methods and scales with your
                business growth.
              </p>
              <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                  Start Processing Payments
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Payment Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Card Payments (Visa, Mastercard)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Bank Transfers & Mobile Money</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Secure Transaction Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Real-time Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
                                   <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
Accept Payments Your Way</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform supports multiple payment methods to ensure your customers can pay however they prefer.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <CreditCard className="w-4 md:h-6 md:w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Card Payments</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Visa and Mastercard support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Debit and credit card processing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>3D Secure authentication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Recurring payment support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-4 w-4 md:h-6 md:w-6 text-green-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bank Transfers</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Direct bank account transfers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>USSD and mobile banking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Real-time transaction verification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Automated reconciliation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Solutions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Payment link generation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Invoice creation and management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>QR code payments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-3 w-3 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>API integration support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Advanced Security Features</h3>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Fraud Detection</h4>
                    <p className="text-gray-600 mb-3">Advanced AI-powered fraud detection and prevention systems.</p>
                    <ul className="space-y-1 text-sm text-gray-500">
                      <li>• Real-time transaction monitoring</li>
                      <li>• Machine learning fraud patterns</li>
                      <li>• Risk scoring algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">PCI DSS Compliance</h4>
                    <p className="text-gray-600 mb-3">Full PCI DSS Level 1 compliance for secure card data handling.</p>
                    <ul className="space-y-1 text-sm text-gray-500">
                      <li>• Encrypted data transmission</li>
                      <li>• Secure card data storage</li>
                      <li>• Regular security audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Business Intelligence</h3>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-green-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Analytics Dashboard</h4>
                    <p className="text-gray-600 mb-3">Comprehensive analytics and reporting for business insights.</p>
                    <ul className="space-y-1 text-sm text-gray-500">
                      <li>• Transaction volume tracking</li>
                      <li>• Revenue analytics</li>
                      <li>• Customer behavior insights</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">API Integration</h4>
                    <p className="text-gray-600 mb-3">
                      RESTful APIs for seamless integration with your existing systems.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-500">
                      <li>• Easy integration documentation</li>
                      <li>• Webhook notifications</li>
                      <li>• SDK support for popular languages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 p-12 rounded-xl">
            <h3 className="text-xl  md:text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Payment Gateway?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-900 p-2 md:p-4 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Bank-Level Security</h4>
                <p className="text-gray-600 text-sm">Advanced encryption and fraud protection for all transactions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-2 md:p-4 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Fast Processing</h4>
                <p className="text-gray-600 text-sm">Lightning-fast transaction processing and settlement</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-2 md:p-4 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Multiple Channels</h4>
                <p className="text-gray-600 text-sm">Support for various payment methods and channels</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-2 md:p-4 rounded-full w-fit mx-auto mb-4">
                  <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Business Insights</h4>
                <p className="text-gray-600 text-sm">Detailed analytics and reporting for informed decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Accept Payments?</h2>
          <p className="text-sm mdtext-lg text-blue-100 mb-4 md:mb-8 max-w-2xl mx-auto">
            Start processing payments securely and efficiently with our comprehensive payment gateway solution.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                Get Started Now
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
