import { BookOpen, CheckCircle, ArrowRight, Search, Calendar, Bell, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function LibraryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 p-2 md:p-4 rounded-lg w-fit mb-6">
                <BookOpen className="h-7 w-7 md:h-10 md:w-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Library Management Platform</h1>
              <p className="text-sm md:text-xl text-blue-100 mb-8">
                Revolutionize your library operations with our digital platform that enables remote book management and
                enhances student experience.
              </p>
              <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                  Digitize Your Library
                  <ArrowRight className="h-4 w-4 md:h-6 md:w-6 ml-2" />
                </button>
              </Link>
            </div>
            <div className="bg-white/10 p-4 md:p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Modern Library Features</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Search className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Online Book Search & Reservation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Remote Borrowing System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bell className="hh-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Automated Notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-blue-200" />
                  <span>Inventory Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Complete Digital Library Solution</h2>
            <p className="text-base md:text-lg  text-gray-600 max-w-3xl mx-auto">
              Transform your traditional library into a modern, accessible digital platform that serves students and
              librarians efficiently.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Student Features</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Search className="h-4 w-4 md:h-6 md:w-6 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Online Book Search</h4>
                      <p className="text-gray-600 mb-3">
                        Advanced search functionality with filters by author, subject, ISBN, and availability status.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>• Real-time availability checking</li>
                        <li>• Advanced filtering options</li>
                        <li>• Book recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Calendar className="h-4 w-4 md:h-6 md:w-6 text-green-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Remote Reservation & Borrowing</h4>
                      <p className="text-gray-600 mb-3">
                        Reserve books online and track borrowing history from anywhere on campus.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>• Online reservation system</li>
                        <li>• Borrowing history tracking</li>
                        <li>• Renewal requests</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Bell className="h-4 w-4 md:h-6 md:w-6 text-purple-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Smart Notifications</h4>
                      <p className="text-gray-600 mb-3">
                        Automated alerts for due dates, available reservations, and library updates.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>• Due date reminders</li>
                        <li>• Reservation notifications</li>
                        <li>• Fine alerts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Librarian Tools</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-orange-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Inventory Management</h4>
                      <p className="text-gray-600 mb-3">
                        Comprehensive system for managing book catalog, acquisitions, and maintenance.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>• Real-time inventory tracking</li>
                        <li>• Automated cataloging</li>
                        <li>• Acquisition management</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-red-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Circulation Management</h4>
                      <p className="text-gray-600 mb-3">
                        Streamlined check-in/check-out processes with automated fine calculations.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>• Quick check-in/out</li>
                        <li>• Automated fine calculation</li>
                        <li>• Overdue management</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-teal-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Analytics Dashboard</h4>
                      <p className="text-gray-600 mb-3">
                        Comprehensive reporting on library usage, popular books, and student engagement.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-500">
                        <li>• Usage statistics</li>
                        <li>• Popular books tracking</li>
                        <li>• Student engagement metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 p-12 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Benefits for Your Institution</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-900 p-2 md:p-4 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Enhanced Accessibility</h4>
                <p className="text-gray-600 text-sm">
                  Students can access library services 24/7 from anywhere on campus
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-4 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Reduced Manual Work</h4>
                <p className="text-gray-600 text-sm">Automate routine tasks and focus on student support</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-4 rounded-full w-fit mx-auto mb-4">
                  <BarChart3 className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Better Resource Utilization</h4>
                <p className="text-gray-600 text-sm">Optimize book usage and identify popular resources</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 p-4 rounded-full w-fit mx-auto mb-4">
                  <Bell className="h-4 w-4 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Improved Experience</h4>
                <p className="text-gray-600 text-sm">Enhanced user experience for both students and staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Modernize Your Library?</h2>
          <p className="text-sm mdtext-lg text-blue-100 mb-4 md:mb-8 max-w-2xl mx-auto">
            Transform your library into a digital hub that serves your academic community better.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                Get Started Today
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
