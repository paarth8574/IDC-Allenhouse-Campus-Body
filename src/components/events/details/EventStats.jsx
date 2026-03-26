import Reveal from "../../ui/Reveal"

export default function EventStats() {

  const stats = [
    { number: "150+", label: "Participants" },
    { number: "56+", label: "Projects Built" },
    { number: "24 Hrs", label: "Non-stop Coding" },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#f5f6f8] overflow-hidden">

      {/* 🔥 FLOATING ELEMENTS */}
      <div className="hidden md:block absolute top-20 left-10 w-10 h-10 border border-purple-300/40 rounded-xl rotate-12 animate-float" />
      <div className="hidden md:block absolute bottom-20 right-10 w-12 h-12 border border-green-300/40 rounded-full animate-float-slow" />

      <div className="max-w-6xl mx-auto text-center">

        {/* 🔥 HEADING */}
        <Reveal>
          <h2 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-8xl
            font-extrabold
          ">
            Event <span className="text-purple-600">Highlights</span>
          </h2>
        </Reveal>

        {/* 🔥 SUBTITLE */}
        <Reveal delay={0.1}>
          <p className="
            mt-4 md:mt-6
            text-base sm:text-lg md:text-2xl
            text-gray-600 font-bold max-w-2xl mx-auto
          ">
            A quick glance at the scale and impact of our hackathon
          </p>
        </Reveal>

        {/* 🔥 STATS GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">

          {stats.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              
              <div className="
                group relative
                bg-white/80 backdrop-blur-md
                border border-gray-200
                rounded-2xl md:rounded-3xl
                p-6 md:p-8
                text-center
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                transition-all duration-500
                hover:-translate-y-2
                overflow-hidden
              ">

                {/* 🔥 TOP GRADIENT LINE */}
                <div className="
                  absolute top-0 left-0 w-full h-1
                  bg-gradient-to-r from-purple-500 to-indigo-500
                " />

                {/* 🔥 NUMBER */}
                <h3 className="
                  text-4xl md:text-5xl font-extrabold
                  text-transparent bg-clip-text
                  bg-gradient-to-r from-purple-600 to-indigo-600
                ">
                  {item.number}
                </h3>

                {/* 🔥 LABEL */}
                <p className="text-gray-600 mt-3 text-sm md:text-base">
                  {item.label}
                </p>

                {/* 🔥 HOVER GLOW */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-purple-500/10 to-indigo-500/10
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                " />

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}