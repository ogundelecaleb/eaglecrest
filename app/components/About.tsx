import { Shield, Users, Zap, Award } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Regulation Compliant",
      description:
        "All our software solutions comply with industry standards and regulations, ensuring your business stays compliant.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of experienced developers and engineers bring years of expertise to every project.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "We use the latest technologies and frameworks to build scalable, efficient, and modern solutions.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance processes ensure bug-free, reliable software delivery.",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Why Choose Eagle Crest?</h2>
          <p className="text-sm text-lg text-gray-600 max-w-3xl mx-auto">
            We are a leading software development company that specializes in building real-world solutions that solve
            complex problems for both individuals and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg card-hover">
              <div className="bg-blue-900 p-2  rounded-lg w-fit mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
