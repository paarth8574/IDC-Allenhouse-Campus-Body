import Reveal from "../ui/Reveal"

export default function ContactHeroSection() {

  const stats = [
    { number: "300+", label: "Active Members", icon: "👥" },
    { number: "2+", label: "Events Hosted", icon: "⚡" },
    { number: "250+", label: "Students Empowered", icon: "🏅" },
    { number: "24/7", label: "Community Support", icon: "🛡️" }
  ]

  return (

    <section className="relative bg-[#f5f6f8] pt-28 pb-24 px-6 overflow-hidden min-h-screen flex items-center">

      {/* FLOATING ELEMENT TOP LEFT */}
      <div
        className="absolute top-24 left-6
        w-40 h-40
        border border-green-500/20
        rounded-full
        animate-float-slow"
      />

      {/* FLOATING ELEMENT BOTTOM RIGHT */}
      <div
        className="absolute bottom-16 right-10
        w-32 h-32
        border border-green-500/20
        rounded-full
        animate-float"
      />

      <div className="max-w-7xl mx-auto text-center w-full">

        {/* BADGE */}
        <Reveal>
          <span
            className="inline-flex items-center gap-2
            border border-[#9374DC]/50
            text-[#9374DC]
            px-5 py-2
            rounded-full
            text-sm font-medium"
          >
            ✨ GET IN TOUCH
          </span>
        </Reveal>


        {/* TITLE */}
        <Reveal delay={0.1}>
          <h1 className="text-6xl md:text-8xl font-extrabold mt-6">
            LET'S <span className="text-[#9374DC]">CONNECT</span>
          </h1>
        </Reveal>


        {/* DESCRIPTION */}
        <Reveal delay={0.2}>
          <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your tech journey? We're here to help you every
            step of the way. Reach out and let's build something amazing
            together.
          </p>
        </Reveal>


        {/* STATS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 mt-24 max-w-6xl mx-auto">

          {stats.map((item, index) => (

            <Reveal key={index} delay={index * 0.1}>

              <div className="flex flex-col items-center text-center">

                <div
                  className="w-16 h-16 mb-6
                  bg-[#9374DC]/10
                  text-[#9374DC]
                  flex items-center justify-center
                  rounded-xl text-2xl 
                  animate-float-mini"
                >
                  {item.icon}
                </div>

                <h3 className="text-4xl md:text-5xl font-bold">
                  {item.number}
                </h3>

                <p className="text-gray-500 mt-2 text-lg font-semibold">
                  {item.label}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}