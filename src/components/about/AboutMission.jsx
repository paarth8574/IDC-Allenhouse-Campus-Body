import Reveal from "../ui/Reveal"
import { RiTargetFill } from "@remixicon/react"

export default function MissionSection() {

  const focusAreas = [
    "Data Analytics",
    "Data Visualization",
    "AI & Machine Learning",
    "Workshops & Seminars"
  ]

  const bulletPoints = [
    "Create a learning ecosystem focused on data analytics and emerging technologies",
    "Bridge the gap between academic knowledge and real-world data applications",
    "Encourage collaboration, innovation, and problem-solving through data projects",
    "Build a strong community of data enthusiasts, learners, and future analysts"
  ]

  return (
    <section className="relative bg-[#f5f6f8] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">

      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        <div className="absolute top-10 sm:top-16 left-4 sm:left-12 
                        w-12 h-12 sm:w-24 sm:h-24 
                        border border-green-400/40 rounded-full animate-float" />

        <div className="absolute top-1/3 right-6 sm:right-1/4 
                        w-10 h-10 sm:w-16 sm:h-16 
                        border border-blue-400/40 rounded-lg rotate-12 animate-float-slow" />

        <div className="absolute bottom-10 sm:bottom-20 right-6 sm:right-16 
                        w-16 h-16 sm:w-28 sm:h-28 
                        border border-green-300/40 rounded-full animate-float" />

        <div className="absolute bottom-20 sm:bottom-32 left-6 sm:left-1/4 
                        w-12 h-12 sm:w-20 sm:h-20 
                        border border-yellow-400/40 rounded-lg rotate-6 animate-float-slow" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <Reveal>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#9374DC] rounded-full" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                OUR <span className="text-[#9374DC]">MISSION</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-10">
              To empower students with practical data skills by providing
hands-on learning, collaborative projects, and exposure to
modern data technologies.
            </p>
          </Reveal>

          <div className="space-y-4 sm:space-y-6">

            {bulletPoints.map((point, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group flex items-start gap-3 sm:gap-4 cursor-pointer transition-all duration-300">

                  {/* Green Circle */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#9374DC] rounded-full flex items-center justify-center mt-1 transition-all duration-300 group-hover:scale-110">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 transition-all duration-300 group-hover:translate-x-2">
                    {point}
                  </p>

                </div>
              </Reveal>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <Reveal delay={0.2}>
          <div className="group bg-white rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg
                          transition-all duration-300
                          hover:scale-[1.02] hover:shadow-2xl">

            <div className="flex justify-center mb-4 sm:mb-6">
              <RiTargetFill 
                size={60} 
                className="sm:hidden text-red-500" 
              />
              <RiTargetFill 
                size={75} 
                className="hidden sm:block md:hidden text-red-500" 
              />
              <RiTargetFill 
                size={90} 
                className="hidden md:block text-red-500" 
              />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8 md:mb-10">
              Our Core Focus Areas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              {focusAreas.map((item, index) => (
                <div
                  key={index}
                  className="group bg-[#f2f3f5] rounded-xl p-4 sm:p-5 md:p-6 text-center
                             border-2 border-transparent
                             transition-all duration-300
                             hover:scale-[1.03]
                             hover:border-[#9374DC]
                             hover:bg-white hover:shadow-md"
                >
                  <p className="text-sm sm:text-base text-[#9374DC] font-semibold">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}