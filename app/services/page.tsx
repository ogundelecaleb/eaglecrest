import { GraduationCap, Users, BookOpen, CreditCard, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Scholarships and Grants Management Platform",
      description:
        "Comprehensive platform for managing scholarship applications, reviews, verification, and approval processes with multi-level workflows.",
      features: [
        "Student application portal with profile management",
        "Multi-level verification by different departments",
        "Automated eligibility validation",
        "Workflow from application to governor approval",
        "Document management and notifications",
        "Comprehensive reporting and analytics",
        "Audit logs for transparency",
      ],
      benefits: [
        "Streamlined scholarship distribution",
        "Reduced administrative overhead",
        "Transparent approval process",
        "Improved student experience",
      ],
    },
    {
      icon: Users,
      title: "Human Resource Management Platform",
      description:
        "Complete HRM solution for managing leave applications, staff regularization, job postings, and approval workflows in organizations.",
      features: [
        "Leave application and approval system",
        "Staff regularization processes",
        "Internal job posting and applications",
        "Automated eligibility checks",
        "Multi-level approval workflows",
        "Employee self-service portal",
        "Comprehensive HR analytics",
      ],
      benefits: [
        "Improved HR efficiency",
        "Automated workflow processes",
        "Better employee satisfaction",
        "Compliance with HR policies",
      ],
    },
    {
      icon: BookOpen,
      title: "Library Management Platform",
      description:
        "Digital library system enabling students to reserve, borrow, and track books remotely while providing librarians with comprehensive inventory management.",
      features: [
        "Online book search and reservation",
        "Remote borrowing and return tracking",
        "Inventory management system",
        "Due date notifications and alerts",
        "Student borrowing history",
        "Fine calculation and management",
        "Comprehensive reporting dashboard",
      ],
      benefits: [
        "Enhanced library accessibility",
        "Reduced manual processes",
        "Better resource utilization",
        "Improved student experience",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Platform",
      description:
        "Secure payment infrastructure supporting multiple payment methods including cards, bank transfers, and invoices for businesses of all sizes.",
      features: [
        "Multiple payment method support",
        "Secure transaction processing",
        "Invoice generation and management",
        "Payment link creation",
        "Merchant dashboard and analytics",
        "API integration capabilities",
        "Fraud detection and prevention",
      ],
      benefits: [
        "Secure payment processing",
        "Increased revenue opportunities",
        "Better customer experience",
        "Comprehensive transaction tracking",
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Software Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We specialize in building comprehensive software platforms that address real-world challenges across
            education, human resources, library management, and financial services.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="bg-blue-900 p-4 rounded-lg w-fit mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`bg-gray-50 p-8 rounded-xl ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Features</h3>
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can build the perfect software solution for your organization. Contact us today for a
            free consultation.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
