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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Software Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build comprehensive software platforms that address real-world challenges across various industries and
            organizational needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 card-hover">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
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
          <Link href="/services" className="btn-primary">
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
