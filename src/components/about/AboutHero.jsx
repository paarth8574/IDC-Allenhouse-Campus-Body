import Reveal from "../ui/Reveal"
import { RiTargetFill, RiSpaceShip2Line, RiShieldStarFill } from "@remixicon/react";

export default function AboutHero() {

  const pillars = [
    {
      icon: RiTargetFill,
      iconColor: "text-red-500",
      title: "Data Driven Vision",
      titleColor: "text-green-600",
      underline: "bg-green-600",
      desc: "Building a strong data community where students learn, explore, and innovate using modern data technologies."
    },
    {
      icon: RiSpaceShip2Line,
      iconColor: "text-blue-500",
      title: "Future Ready Skills",
      titleColor: "text-blue-500",
      underline: "bg-blue-500",
      desc: "Helping students develop practical skills in Data Analytics, AI, and real-world problem solving."
    },
    {
      icon: RiShieldStarFill,
      iconColor: "text-yellow-500",
      title: "Community First",
      titleColor: "text-yellow-500",
      underline: "bg-yellow-500",
      desc: "Creating a collaborative environment where students, mentors, and professionals grow together."
    }
  ]

  return (
    <section className="bg-[#f5f6f8] pt-28 pb-24 px-6 relative overflow-hidden">

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        {/* Top Left Circle */}
        <div className="absolute top-20 left-16 w-24 h-24 
                        border-2 border-[#9374DC]/40 
                        rounded-full animate-float" />

        {/* Mid Left Small Circle */}
        <div className="absolute top-1/2 left-1/4 w-14 h-14 
                        border border-yellow-400/40 
                        rounded-full animate-float-slow" />

        {/* Mid Right Square */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 
                        border-2 border-blue-400/40 
                        rounded-lg rotate-12 animate-float" />

        {/* Bottom Right Square */}
        <div className="absolute bottom-24 right-20 w-28 h-28 
                        border-2 border-green-300/40 
                        rounded-xl rotate-6 animate-float-slow" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <Reveal>
          <h1 className="text-6xl font-extrabold tracking-tight text-black">
            ABOUT <span className="text-[#9374DC]">US</span>
          </h1>
        </Reveal>

        {/* Green underline */}
        <Reveal delay={0.2}>
          <div className="w-24 h-1 bg-[#9374DC] mx-auto mt-5 mb-10 rounded-full" />
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.3}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-5 leading-relaxed">
            A student-driven data community at Allenhouse focused on
learning Data Analytics, AI, and modern technologies together.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-5 leading-relaxed">
            <i>Built by Data Folks, for Data Folks.</i>
          </p>
        </Reveal>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-12 mt-8">

          {pillars.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal key={index} delay={index * 0.2}>
                <div
  className="group bg-transparent rounded-xl p-14
             transition-all duration-300 ease-out
             hover:bg-white hover:scale-[1.03] hover:-translate-y-2
             hover:shadow-2xl cursor-pointer
             min-h-[320px] flex flex-col justify-center"
>

                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <Icon
                      size={72}
                      className={`${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-semibold mb-4 ${item.titleColor}
                                transition-all duration-300 group-hover:tracking-wide`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Small underline */}
                  <div
                    className={`w-14 h-1 ${item.underline} mx-auto mt-8 rounded-full
                                transition-all duration-300 group-hover:w-20`}
                  />

                </div>
              </Reveal>
            )
          })}

        </div>

      </div>
    </section>
  )
}