import Reveal from "../ui/Reveal"

export default function AboutCTA() {
  return (
    <section className="relative bg-[#f5f6f8] py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden">

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 sm:top-16 left-6 sm:left-24 w-14 h-14 sm:w-24 sm:h-24 border border-green-400/30 rounded-full animate-float" />
        <div className="absolute bottom-10 sm:bottom-20 right-6 sm:right-24 w-16 h-16 sm:w-28 sm:h-28 border border-yellow-400/30 rotate-12 rounded-lg animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-10 h-10 sm:w-16 sm:h-16 border border-blue-400/30 rounded-full animate-float" />
      </div>

      <div className="relative z-10 max-w-[95%] sm:max-w-5xl md:max-w-6xl lg:max-w-[1400px] mx-auto">

        <Reveal>
          <div
            className="
              group
              rounded-2xl sm:rounded-[28px]
              border border-gray-300/40
              bg-[#f5f6f8]
              px-6 sm:px-10 md:px-16 lg:px-20
              py-14 sm:py-18 md:py-20 lg:py-24
              text-center
              transition-transform duration-500 ease-out
              hover:scale-[1.015]
              hover:shadow-lg
            "
          >

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-snug">
              Ready to <span className="text-[#9374DC]">Launch</span> With Us?
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 leading-relaxed">
              Be part of the founding community that shapes the future of
              technology education at Allenhouse Institute of Technology
            </p>

            {/* Button */}
            <button
              className="
                bg-[#9374DC]
                hover:bg-[#614b94]
                active:bg-[#372b53]
                text-white
                text-sm sm:text-base md:text-lg
                font-semibold
                px-8 sm:px-12 md:px-16
                py-3 sm:py-4 md:py-5
                rounded-xl sm:rounded-2xl
                shadow-md
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
                active:scale-95
              "
            >
              JOIN THE TECH COMMUNITY
            </button>

          </div>
        </Reveal>

      </div>
    </section>
  )
}