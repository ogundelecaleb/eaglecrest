import { CheckCircle, Clock, Shield, Headphones } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description:
        "Over 100 successful projects delivered across various industries with 98% client satisfaction rate.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines and consistently deliver projects on time without compromising quality.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "All our solutions are built with security as a priority, ensuring data protection and regulatory compliance.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Comprehensive support and maintenance services to ensure your software runs smoothly at all times.",
    },
  ]

  return (
    <section className="section-padding bg-blue-900 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-6">Why Businesses Trust Eagle Crest</h2>
            <p className="text-base md:text-lg text-blue-100 mb-8">
              We have built a reputation for delivering high-quality software solutions that not only meet but exceed
              our clients' expectations. Our commitment to excellence drives everything we do.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-700 p-2 rounded-lg flex-shrink-0">
                    <reason.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-2">{reason.title}</h3>
                    <p className="text-blue-100 text-sm md:text-base">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-lg md:text-xl font-bold mb-6">Our Impact on Society</h3>
            <div className="space-y-6">
              <div>
                <h4 className=" text-base font-semibold mb-2">Educational Advancement</h4>
                <p className="text-blue-100 text-sm md:text-base">
                  Our scholarship management systems have helped distribute over $10M in educational funding efficiently
                  and transparently.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Organizational Efficiency</h4>
                <p className="text-blue-100 text-sm md:text-base">
                  HRM solutions have streamlined operations for 50+ organizations, reducing administrative overhead by
                  40%.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Digital Transformation</h4>
                <p className="text-blue-100 text-sm md:text-base">
                  Our library and payment systems have digitized processes, making services more accessible to thousands
                  of users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
