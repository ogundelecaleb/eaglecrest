import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CTA() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Eaglecrest can build the perfect software solution for your organization. Get started
            with a free consultation today.
          </p>

          <div className="flex flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary w-fit bg-white text-blue-900 hover:bg-blue-50">
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask For Demo
            </Link>
            <Link href="/services" className="btn-secondary w-fit border-white text-white hover:bg-white hover:text-blue-900">
              View Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
