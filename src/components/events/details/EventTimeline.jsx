import { useEffect, useRef } from "react"
import gsap from "gsap"
import Reveal from "../../ui/Reveal"

export default function EventTimeline() {

  const progressRef = useRef(null)
  const beamRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {

    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / rect.height, 0),
        1
      )

      // 🔥 SMOOTH LINE FILL
      gsap.to(progressRef.current, {
        height: `${progress * 100}%`,
        duration: 0.4,
        ease: "power3.out"
      })

      // 🔥 LIGHT BEAM MOVE
      gsap.to(beamRef.current, {
        top: `${progress * 100}%`,
        duration: 0.4,
        ease: "power3.out"
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const timeline = [
    {
      title: "Registration Phase",
      time: "Before Event",
      desc: "Participants registered in teams and submitted their problem statements."
    },
    {
      title: "Opening Ceremony",
      time: "Day 1 - 10:00 AM",
      desc: "Kick-off with briefing, rules, and introduction to the hackathon."
    },
    {
      title: "Development Phase",
      time: "Day 1 - 12:00 PM",
      desc: "Teams started building their solutions and worked continuously for 24 hours."
    },
    {
      title: "Submission & Judging",
      time: "Day 2 - 10:00 AM",
      desc: "Final project submissions followed by evaluation from judges."
    },
    {
      title: "Winners Announcement",
      time: "Day 2 - 12:00 PM",
      desc: "Top teams were awarded and recognized for their innovation."
    }
  ]

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#f5f6f8] overflow-hidden">

      {/* FLOATING */}
      <div className="hidden md:block absolute top-20 left-10 w-10 h-10 border border-purple-300/40 rounded-xl rotate-12 animate-float" />
      <div className="hidden md:block absolute bottom-20 right-16 w-12 h-12 border border-green-300/40 rounded-full animate-float-slow" />

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <Reveal>
          <h2 className="text-3xl md:text-7xl font-extrabold text-center">
            Event <span className="text-purple-600">Timeline</span>
          </h2>
        </Reveal>

        {/* SUBTITLE */}
        <Reveal delay={0.1}>
          <p className="text-center font-bold mt-4 text-gray-600 text-lg">
            A complete journey of the hackathon experience
          </p>
        </Reveal>

        {/* TIMELINE */}
        <div ref={containerRef} className="relative mt-16">

          {/* BASE LINE */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[3px] bg-gray-200 rounded-full overflow-hidden">

            {/* 🔥 PROGRESS LINE */}
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"
              style={{ height: "0%" }}
            />

            {/* 🔥 LIGHT BEAM */}
            <div
              ref={beamRef}
              className="
                absolute left-1/2 -translate-x-1/2
                w-6 h-6 rounded-full
                bg-white blur-md opacity-90
                shadow-[0_0_30px_rgba(139,92,246,0.9)]
              "
              style={{ top: "0%" }}
            />

          </div>

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <Reveal key={index} delay={index * 0.1}>

                <div className={`
                  group relative flex flex-col md:flex-row items-start md:items-center
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}>

                  {/* CARD */}
                  <div className="w-full md:w-1/2 px-6 md:px-10">

                    <div className="
                      relative bg-white rounded-2xl p-6 md:p-8
                      border border-gray-200
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      transition-all duration-300
                      hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)]
                      hover:-translate-y-2
                    ">

                      {/* GLOW */}
                      <div className="
                        absolute inset-0 rounded-2xl
                        bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10
                        opacity-0 group-hover:opacity-100
                        transition duration-500
                      " />

                      <div className="relative z-10">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="text-sm text-purple-600 mt-2 font-medium">
                          {item.time}
                        </p>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* DOT */}
                  <div className="
                    absolute left-4 md:left-1/2 md:-translate-x-1/2
                    w-5 h-5 rounded-full
                    bg-gradient-to-r from-purple-500 to-blue-500
                    border-4 border-white
                    shadow-[0_0_20px_rgba(139,92,246,0.8)]
                  " />

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}