import Reveal from "../ui/Reveal"
import {
  RiBriefcaseFill,
  RiRocketFill,
  RiGlobalFill,
  RiTrophyFill,
  RiTeamFill,
  RiLightbulbFill
} from "@remixicon/react"

export default function AboutImpact() {

  const impactData = [
    {
      icon: RiBriefcaseFill,
      title: "Career Readiness",
      color: "bg-green-500",
      points: [
        "Enhanced technical interview skills",
        "Industry-standard project experience",
        "Professional networking opportunities",
        "Resume and portfolio development"
      ]
    },
    {
      icon: RiRocketFill,
      title: "Skill Advancement",
      color: "bg-blue-500",
      points: [
        "Practical programming expertise",
        "Latest technology stack exposure",
        "Team collaboration experience",
        "Problem-solving capabilities"
      ]
    },
    {
      icon: RiGlobalFill,
      title: "Industry Exposure",
      color: "bg-yellow-500",
      points: [
        "Guest sessions from industry experts",
        "Real-world project opportunities",
        "Internship guidance and support",
        "Professional community building"
      ]
    },
    {
      icon: RiTrophyFill,
      title: "Competitive Excellence",
      color: "bg-green-500",
      points: [
        "Hackathon participation experience",
        "Coding competition preparation",
        "Open source contribution guidance",
        "Technical presentation skills"
      ]
    },
    {
      icon: RiTeamFill,
      title: "Network Building",
      color: "bg-blue-500",
      points: [
        "Peer learning communities",
        "Alumni network access",
        "Faculty mentorship relationships",
        "Industry professional connections"
      ]
    },
    {
      icon: RiLightbulbFill,
      title: "Innovation Mindset",
      color: "bg-yellow-500",
      points: [
        "Creative solution development",
        "Project ideation and execution",
        "Research-oriented approach",
        "Entrepreneurial thinking"
      ]
    }
  ]

  return (
    <section className="relative bg-[#f5f6f8] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 sm:top-16 left-4 sm:left-10 
                        w-12 h-12 sm:w-20 sm:h-20 
                        border border-green-400/40 rounded-full animate-float" />

        <div className="absolute bottom-10 sm:bottom-20 right-6 sm:right-20 
                        w-16 h-16 sm:w-28 sm:h-28 
                        border border-blue-400/40 rounded-lg rotate-12 animate-float-slow" />

        <div className="absolute top-1/3 right-6 sm:right-1/4 
                        w-10 h-10 sm:w-16 sm:h-16 
                        border border-yellow-400/40 rounded-full animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            EXPECTED <span className="text-[#9374DC]">IMPACT</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-[#9374DC] mx-auto mt-4 mb-6 rounded-full" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            Transforming the learning experience through practical technology education
          </p>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {impactData.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-2xl 
                                p-6 sm:p-7 md:p-8 
                                shadow-mentor
                                transition-all duration-500
                                hover:scale-[1.04] hover:shadow-mentor-hover">

                  {/* Icon */}
                  <div className="mb-4 sm:mb-6 text-left">

                    <Icon
                      size={40}
                      className="sm:hidden ml-1 transition-all duration-500
                                 group-hover:scale-110
                                 group-hover:-translate-x-2
                                 group-hover:-translate-y-2
                                 group-hover:-rotate-6"
                    />

                    <Icon
                      size={60}
                      className="hidden sm:block ml-2 transition-all duration-500
                                 group-hover:scale-110
                                 group-hover:-translate-x-3
                                 group-hover:-translate-y-3
                                 group-hover:-rotate-6"
                    />

                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-left">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <div className="space-y-3 sm:space-y-4 text-left">

                    {item.points.map((point, i) => (
                      <div
                        key={i}
                        className="group/bullet flex items-start gap-2 sm:gap-3
                                   transition-all duration-300
                                   hover:translate-x-2 hover:scale-[1.02]"
                      >
                        <span
                          className={`w-2 h-2 sm:w-3 sm:h-3 mt-2 rounded-full ${item.color}
                                      transition-all duration-300
                                      group-hover/bullet:scale-125`}
                        />
                        <p className="text-xs sm:text-sm text-gray-700">
                          {point}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>
              </Reveal>
            )
          })}

        </div>

      </div>
    </section>
  )
}