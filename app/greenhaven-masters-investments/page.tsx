import { LeafIcon, CheckCircle, ArrowRight, Droplets, TreePine, BarChart3, Tractor, MapPin, Wrench } from "lucide-react"
import Link from "next/link"
import FarmImages from "../components/Review"

export default function GreenhavenPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 p-4 rounded-lg w-fit mb-6">
                <LeafIcon className="h-7 w-7 text-white" />
              </div>
               <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Greenhaven Masters Investments Limited</h1>
                          <p className="text-sm md:text-xl text-blue-100 mb-8">
                Established in 2015, we are a registered agricultural company operating a fully mechanized 50-hectare
                oil palm plantation in Ogun State, Nigeria.
              </p>
              <div className="flex text-sm md:text-base items-center space-x-2 text-blue-100 mb-8">
                <MapPin className="h-5 w-5" />
                <span>Located at Imashayi Village, Ogun State</span>
              </div>
              <Link href="/contact">
                <button className="py-2 md:py-3  bg-white text-blue-900 hover:bg-blue-50 rounded-lg flex justify-center gap-1 items-center px-2">
                  Learn About Our Operations
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="bg-white/10 p-4 md:p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Farm Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TreePine className="h-4 w-4 md:h-6 md:w-6 text-green-200" />
                  <span>50 Hectares Fully Cultivated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <LeafIcon className="h-4 w-4 md:h-6 md:w-6 text-green-200" />
                  <span>7,000 Fruiting Oil Palm Trees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Tractor className="h-4 w-4 md:h-6 md:w-6 text-green-200" />
                  <span>Fully Mechanized Operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="h-4 w-4 md:h-6 md:w-6 text-green-200" />
                  <span>180ft Borehole & Irrigation System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Accessibility */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
                               <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
Strategic Location</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our farm is strategically located at Imashayi Village with excellent accessibility to major industrial and
              urban centers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <MapPin className="h-4 w-4 md:h-6 md:w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prime Location</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Located at Imashayi Village, Ogun State</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>10-15 minutes from Dangote Factory at Ibese</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>On Abeokuta-Ilaro highway corridor</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Easy access to major markets and processing facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <TreePine className="h-4 w-4 md:h-6 md:w-6 text-green-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Land Allocation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>50 hectares allocated by Ogun State Government</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>All 50 hectares cleared and under cultivation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Registered agricultural company since 2015</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Expansion plans to 200 hectares</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Infrastructure */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
Modern Agricultural Infrastructure</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our farm is fully mechanized with state-of-the-art equipment and infrastructure to ensure optimal
              productivity and efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <Tractor className="h-4 w-4 md:h-6 md:w-6 text-orange-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Farm Mechanization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>1 Tractor for heavy-duty operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Harrow for soil preparation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Plough for land cultivation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Ridger for proper drainage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Slasher for vegetation management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Wrench className="h-4 w-4 md:h-6 md:w-6 text-green-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specialized Equipment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>5 Weeders for maintenance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Boom sprayer for efficient application</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Hand-held motorized sprayers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Complete mechanization coverage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white md:p-8 p-4 rounded-xl shadow-lg border">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Droplets className="h-4 w-4 md:h-6 md:w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Water Infrastructure</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>180-foot deep borehole</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Submersible and surface pumps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Drip irrigation lines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Run flat pipes covering 6 hectares</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Production Statistics */}
          <div className="bg-green-50 p-12 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Production Status</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl  md:text3xl font-bold text-gray-900 mb-2">11,000</div>
                <h4 className="font-bold text-gray-900 mb-1">Trees Planted</h4>
                <p className="text-gray-600 text-sm">Oil palm seedlings established</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <LeafIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl  md:text3xl font-bold text-green-600 mb-2">7,000</div>
                <h4 className="font-bold text-gray-900 mb-1">Surviving Trees</h4>
                <p className="text-gray-600 text-sm">Currently fruiting and productive</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl  md:text3xl font-bold text-blue-600 mb-2">63%</div>
                <h4 className="font-bold text-gray-900 mb-1">Survival Rate</h4>
                <p className="text-gray-600 text-sm">Excellent plantation success</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl  md:text3xlfont-bold text-blue-600 mb-2">6</div>
                <h4 className="font-bold text-gray-900 mb-1">Hectares Irrigated</h4>
                <p className="text-gray-600 text-sm">Modern irrigation coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Expansion Plans */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
                                   <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
Future Expansion & Diversification</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our long-term vision includes significant expansion and the development of an integrated agro-processing
              ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <TreePine className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Farm Expansion</h3>
                <p className="text-gray-600 mb-4">
                  Our long-term plan includes expanding our operations from the current 50 hectares to 200 hectares,
                  quadrupling our production capacity.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Expansion to 200 hectares total</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Additional oil palm plantations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Enhanced mechanization infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                  <Wrench className="h-8 w-8 text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Processing Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Development of integrated agro-processing and storage facilities to add value to our agricultural
                  products.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Oil palm mill establishment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cassava processing facility</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Vegetable sorting and packaging</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <LeafIcon className="h-8 w-8 text-green-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Agriculture</h3>
                <p className="text-gray-600 mb-4">
                  Creating a comprehensive agricultural ecosystem that maximizes resource utilization and minimizes
                  waste.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Multi-crop cultivation system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Sustainable farming practices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Waste-to-resource conversion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mini-Ranch Development</h3>
                <p className="text-gray-600 mb-4">
                  Establishing a mini-ranch that utilizes agricultural waste as animal feed, creating a circular economy
                  model.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Livestock integration with crop farming</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Agro-waste utilization as animal feed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Organic fertilizer production from animal waste</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <FarmImages/>

          {/* Timeline */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Timeline</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-900 mb-2">Phase 1</div>
                <h4 className="font-bold text-gray-900 mb-2">Current Operations</h4>
                <p className="text-gray-600 text-sm">50 hectares fully operational with 7,000 fruiting trees</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-900 mb-2">Phase 2</div>
                <h4 className="font-bold text-gray-900 mb-2">Processing Integration</h4>
                <p className="text-gray-600 text-sm">Establish processing facilities and storage infrastructure</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-900 mb-2">Phase 3</div>
                <h4 className="font-bold text-gray-900 mb-2">Full Expansion</h4>
                <p className="text-gray-600 text-sm">200 hectares with integrated mini-ranch operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom text-center">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Partner with Sustainable Agriculture</h2>
 <p className="text-sm mdtext-lg text-blue-100 mb-4 md:mb-8 max-w-2xl mx-auto">            Learn more about our agricultural initiatives, investment opportunities, and partnership possibilities in
            sustainable oil palm cultivation and integrated farming.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Link href="/contact">
                            <button className="py-2 md:py-3  bg-white  text-green-600 hover:bg-green-50 rounded-lg flex justify-center gap-1 items-center px-2">

                Contact Us Today
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
