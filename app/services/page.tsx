import {
  GraduationCap,
  Users,
  BookOpen,
  CreditCard,
  CheckCircle,
  ArrowRight,
  LeafIcon,
  ArrowRightToLine,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Scholarships and Grants Management Platform",
      link:"/scholarships-and-grants",
      description:
        "Fully digitalised platform from application to disbursement of all scholarships, grants and awards",
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
        "Easy to use interfaces for both applicants and admin",
        "Can be linked to BVN and/or NIN for additional verification",
        "Transparent approval process",
        "Robust reporting and monitoring dashboard",
      ],
    },

    {
      icon: Users,
      title: "Human Resource Management Platform",
      link:"/human-resource-management",

      description:
        "Complete HRM solution for managing leave applications, staff regularization, job postings, and approval workflows in companies, government and MDA’s.",
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
        "Fully digital platform",
        "Easy to use intuitive features",
        "Can handle processes from job applications to staff onboarding to leave management to appraisals",
      ],
    },
    {
      icon: BookOpen,
      title: "Library Management Platform",
      link:"/library-management-platform",
      description:
        "Digital library system enabling students to reserve, borrow, and track books remotely while providing librarians with comprehensive inventory management.",
      features: [
        "Enhanced library accessibility",
        "Reduced manual processes",
        "Better resource utilization",
        "Improved student experience",
      ],
      benefits: [
        "Online book search and reservation",
        "Remote borrowing and return tracking",
        "Inventory management system",
        "Due date notifications and alerts",
        "Student borrowing history",
        "Fine calculation and management",
        "Comprehensive reporting dashboard",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Platform",
      link:"/payment-gateway-platform",
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
     {
      icon: LeafIcon,
      title: "Greenhaven masters investments",
      link:"/greenhaven-masters-investments",

      description:
        "Greenhaven masters investments limited registered in 2015 is an agric company and an allotte of 50 hectares of agric farmland from Ogun State Government. This farm is an oil palms plantation",
      features: [
        "Cleared and brought under cultivation all 50 hectares",
        " Irrigation equipment (drip lines, run flat pipes etc) for 6 hectares",
        "Planted 11,000 oil palms with 7,000 surviving and already fruiting",
      ],
      benefits: [
        // "Secure payment processing",
        // "Increased revenue opportunities",
        // "Better customer experience",
        // "Comprehensive transaction tracking",
      ],
    },
  ];




  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Our Software Solutions
          </h1>
          <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto">
            We specialize in building comprehensive software platforms that
            address real-world challenges across education, human resources,
            library management, and financial services.
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
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="bg-blue-900 mb-2  p-2 md:p-3 rounded-lg flex-shrink-0 w-fit">
                    <service.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base md:text-lg font-bold  text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
                        Platform Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service?.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service?.link}  className="text-white text-sm flex items-center gap-1 mt-3 p-2 bg-blue-900 rounded-md hover:shadow w-fit ">See More <ArrowRight  className="h-4"/></Link>
                  </div>
                </div>

                <div
                  className={`bg-gray-50 p-4 md:p-8 rounded-xl ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-6">
                   Key Benefits
                  </h3>
                  <div className="space-y-2 md:space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can build the perfect software solution for
            your organization. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="py-2 w-fit mx-auto md:py-3  bg-blue-900 text-white hover:bg-blue-400 rounded-lg flex justify-center gap-1 items-center px-2"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
