import Reveal from "../ui/Reveal"

export default function EventsCTA() {
  return (
    <section className="bg-[#f5f6f8] px-4 sm:px-6 pb-16 md:pb-24">

      <Reveal>
        <div className="
          relative max-w-6xl mx-auto
          bg-gradient-to-r from-[#9374DC] to-[#5c478e]
          rounded-2xl md:rounded-3xl
          px-5 sm:px-8 md:px-12
          py-10 sm:py-12 md:py-16
          text-center
          text-white
          overflow-hidden
          shadow-[0_15px_40px_rgba(0,0,0,0.12)]
          md:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        ">

          {/* 🔥 FLOATING ELEMENTS (Responsive Controlled) */}

          {/* small circle */}
          <div className="hidden sm:block absolute top-6 left-6 md:left-10 w-6 h-6 md:w-10 md:h-10 border border-white/20 rounded-full animate-float-mini" />

          {/* square */}
          <div className="hidden sm:block absolute bottom-6 right-6 md:right-10 w-8 h-8 md:w-12 md:h-12 border border-white/20 rounded-xl rotate-12 animate-float" />

          {/* big circle */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-14 h-14 md:w-20 md:h-20 border border-white/10 rounded-full animate-float-slow" />


          {/* 🔥 CONTENT */}

          {/* Heading */}
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-semibold
            leading-tight
          ">
            Ready for the Next Adventure?
          </h2>

          {/* Subtitle */}
          <p className="
            mt-3 md:mt-4
            text-sm sm:text-base md:text-lg lg:text-2xl
            opacity-90
            max-w-md sm:max-w-xl md:max-w-2xl mx-auto
          ">
            Join our community and be the first to experience
            groundbreaking events
          </p>

          {/* BUTTON */}
          <div className="mt-6 md:mt-8 group">
            <button
              className="
              px-6 md:px-8 py-3 md:py-4
              bg-white text-black
              rounded-lg md:rounded-xl
              font-semibold
              text-sm md:text-base lg:text-lg
              flex items-center gap-2 mx-auto
              transition-all duration-300
              hover:scale-105 hover:shadow-lg
              active:scale-95
              "
            >
              JOIN THE COMMUNITY
            </button>
          </div>

        </div>
      </Reveal>

    </section>
  )
}