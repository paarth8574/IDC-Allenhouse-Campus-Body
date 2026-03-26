import Reveal from "../ui/Reveal"
import { RiGraduationCapFill, RiBriefcaseFill, RiSparklingFill } from "@remixicon/react"

export default function AboutHighlights() {

  const items = [
    {
      icon: RiGraduationCapFill,
      title: "50+",
      subtitle: "Years Experience",
      color: "text-green-600",
      underline: "bg-green-600"
    },
    {
      icon: RiBriefcaseFill,
      title: "Expert",
      subtitle: "Industry Knowledge",
      color: "text-blue-500",
      underline: "bg-blue-500"
    },
    {
      icon: RiSparklingFill,
      title: "Visionary",
      subtitle: "Leadership",
      color: "text-yellow-500",
      underline: "bg-yellow-500"
    }
  ]

  return (
    <section className="relative py-24 px-6 bg-[#f5f6f8]">

      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg py-16 px-8">

        <Reveal>
          <h2 className="text-3xl font-semibold text-center mb-14">
            Guided by Experienced Mentors
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal key={index} delay={index * 0.2}>
                <div className="group transition-all duration-300 hover:-translate-y-2">

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon size={44} className="text-black" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold ${item.color} mb-2`}>
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-600 mb-4">
                    {item.subtitle}
                  </p>

                  {/* Underline */}
                  <div className={`w-12 h-1 ${item.underline} mx-auto rounded-full`} />

                </div>
              </Reveal>
            )
          })}

        </div>

      </div>

    </section>
  )
}