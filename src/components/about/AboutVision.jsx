import Reveal from "../ui/Reveal"
import {
  RiRadarFill,
  RiFlashlightFill,
  RiTeamFill,
  RiLightbulbFill,
  RiPlantFill
} from "@remixicon/react"

export default function AboutVision() {

  return (
    <section className="relative bg-[#f5f6f8] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">

        <div className="absolute top-10 sm:top-16 left-4 sm:left-12 
                        w-12 h-12 sm:w-20 sm:h-20 
                        border border-green-400/40 rounded-full animate-float" />

        <div className="absolute bottom-10 sm:bottom-20 right-6 sm:right-20 
                        w-16 h-16 sm:w-28 sm:h-28 
                        border border-blue-400/40 rounded-lg rotate-12 animate-float-slow" />

        <div className="absolute top-1/3 right-6 sm:right-1/4 
                        w-10 h-10 sm:w-16 sm:h-16 
                        border border-yellow-400/40 rounded-full animate-float" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}
        <Reveal>
          <div className="group bg-white rounded-2xl shadow-mentor 
                          p-6 sm:p-8 md:p-10
                          transition-all duration-500
                          hover:scale-[1.03] hover:shadow-mentor-hover">

            <div className="flex justify-center mb-4 sm:mb-6">
              <RiRadarFill size={50} className="sm:hidden" />
              <RiRadarFill size={65} className="hidden sm:block md:hidden" />
              <RiRadarFill size={70} className="hidden md:block" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8 md:mb-10">
              Community Roadmap
            </h3>

            <div className="space-y-3 sm:space-y-4 md:space-y-5">

              {["Workshop Series", "Hackathon Launch", "Industry Connect"].map((item, index) => (
                <div
                  key={index}
                  className="group/item flex items-center gap-3 sm:gap-4 
                             bg-gray-100 rounded-xl 
                             px-4 sm:px-6 py-3 sm:py-4
                             text-sm sm:text-base
                             transition-all duration-300
                             hover:scale-[1.03] hover:border-2 hover:border-blue-500 hover:bg-white hover:shadow-md"
                >
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-slow-pulse" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}

            </div>

          </div>
        </Reveal>

        {/* ================= RIGHT SIDE ================= */}
        <div>

          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-slow-pulse" />
              OUR <span className="text-blue-500">VISION</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10 md:mb-12">
              Our vision is to create a strong ecosystem of data enthusiasts
at Allenhouse, empowering students with modern data skills,
innovation, and collaborative learning.
            </p>
          </Reveal>

          {/* Strategic Card */}
          <Reveal delay={0.2}>
            <div className="group bg-white rounded-2xl shadow-mentor 
                            p-6 sm:p-8
                            transition-all duration-500
                            hover:scale-[1.03] hover:shadow-mentor-hover">

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8">
                Strategic Objectives
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                {[
                  {
                    icon: RiFlashlightFill,
                    title: "Skill Development",
                    desc: "Comprehensive technical training programs",
                    color: "text-yellow-500"
                  },
                  {
                    icon: RiTeamFill,
                    title: "Industry Connect",
                    desc: "Partnerships with tech companies",
                    color: "text-orange-500"
                  },
                  {
                    icon: RiLightbulbFill,
                    title: "Innovation Culture",
                    desc: "Foster creative problem-solving",
                    color: "text-yellow-400"
                  },
                  {
                    icon: RiPlantFill,
                    title: "Community Growth",
                    desc: "Expand student participation",
                    color: "text-green-500"
                  }
                ].map((obj, index) => {
                  const Icon = obj.icon
                  return (
                    <div
                      key={index}
                      className="group/card bg-gray-100 rounded-xl 
                                 p-4 sm:p-5 md:p-6
                                 transition-all duration-300
                                 hover:scale-[1.05] hover:bg-white hover:shadow-md"
                    >
                      <Icon
                        size={24}
                        className={`mb-2 sm:mb-3 ${obj.color}
                                   transition-all duration-300
                                   group-hover/card:-translate-x-2`}
                      />
                      <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                        {obj.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {obj.desc}
                      </p>
                    </div>
                  )
                })}

              </div>

            </div>
          </Reveal>

        </div>

      </div>

    </section>
  )
}