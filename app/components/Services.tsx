import Link from "next/link"
import { GraduationCap, Users, BookOpen, CreditCard, ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Scholarship Management",
      description:
        "Comprehensive platform for managing scholarship applications, reviews, and approvals with multi-level verification workflows.",
      features: [
        "Multi-level verification",
        "Automated eligibility checks",
        "Document management",
        "Approval workflows",
      ],
    },
    {
      icon: Users,
      title: "HRM Solutions",
      description:
        "Complete human resource management system for leave applications, staff regularization, and internal job postings.",
      features: ["Leave management", "Staff regularization", "Job applications", "Approval workflows"],
    },
    {
      icon: BookOpen,
      title: "Library Management",
      description:
        "Digital library system enabling students to reserve, borrow, and track books remotely with inventory management.",
      features: ["Book reservations", "Inventory tracking", "Due date management", "Student records"],
    },
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description:
        "Secure payment infrastructure supporting cards, bank transfers, and invoices for businesses of all sizes.",
      features: ["Multiple payment methods", "Invoice generation", "Transaction monitoring", "API integration"],
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Software Solutions</h2>
          <p className="text-sm text-lg text-gray-600 max-w-3xl mx-auto">
            We build comprehensive software platforms that address real-world challenges across various industries and
            organizational needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-xl card-hover bg-white p-4 md:p-6 ">
              <div className="flex items-start space-x-3 md:space-x-4 mb-6">
                <div className="bg-blue-900  p-2 md:p-3 rounded-lg flex-shrink-0">
                  <service.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold  text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4 md:mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="">
          <button className="bg-[#1e3a8a] hover:opacity-80 py-2 md:py-3 rounded-lg px-4 text-white">
            View All Solutions

            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
