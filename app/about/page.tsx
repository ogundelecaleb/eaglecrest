import { Shield, Target, Eye, Users, Award, Zap } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our business dealings.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners to understand and solve their unique challenges.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to create cutting-edge solutions.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">About Eagle Crest</h1>
          <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto">
            We are a leading software development company dedicated to building real-world solutions that solve complex
            problems for individuals and organizations across various industries.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="bg-blue-900 p-3 rounded-lg w-fit mb-4">
                <Eye className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-basse md:text-lg">
                To be the leading software development company that transforms how organizations operate by providing
                innovative, reliable, and regulation-compliant software solutions that drive efficiency and growth
                across all sectors.
              </p>
            </div>

           <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="bg-blue-900 p-3 rounded-lg w-fit mb-4">
                <Target className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-basse md:text-lg">
                To develop high-quality, scalable software solutions that address real-world challenges in education,
                human resources, library management, and financial services while maintaining the highest standards of
                security and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
             <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we interact with our clients, partners, and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                <div className="bg-blue-900 p-3 rounded-lg w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Why Organizations Trust Eagle Crest</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Proven Expertise</h3>
              <p className="text-gray-600 mb-4">
                With years of experience in software development, we have successfully delivered complex solutions
                across multiple industries including education, healthcare, and finance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 100+ successful projects</li>
                <li>• 50+ satisfied clients</li>
                <li>• 98% project success rate</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 mb-4">
                We follow rigorous testing and quality assurance processes to ensure that every software solution we
                deliver is bug-free, secure, and performs optimally.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Comprehensive testing protocols</li>
                <li>• Security-first development</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                Our relationship doesn't end at delivery. We provide comprehensive support and maintenance services to
                ensure your software continues to serve your needs effectively.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 24/7 technical support</li>
                <li>• Regular updates and maintenance</li>
                <li>• Training and documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
