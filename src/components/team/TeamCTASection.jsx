import Reveal from "../ui/Reveal"

export default function TeamCTASection() {
  return (
    <section className="bg-[#f5f6f8] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white/40 backdrop-blur-sm 
        rounded-3xl 
        py-16 px-8 md:px-16
        text-center
        shadow-[0_20px_50px_rgba(0,0,0,0.05)]">

          {/* HEADING */}
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
              WANT TO JOIN OUR <span className="text-[#9374DC]">TEAM?</span>
            </h2>
          </Reveal>


          {/* DESCRIPTION */}
          <Reveal delay={0.2}>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Be part of the revolution and help us create amazing
              experiences for the tech community.
            </p>
          </Reveal>


          {/* BUTTON */}
          <Reveal delay={0.4}>
            <div className="mt-10">

              <button
                className="bg-[#9374DC] 
                hover:bg-[#6f57a6]
                active:scale-95
                text-white 
                font-semibold
                px-10 py-4 
                rounded-xl
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1"
              >
                SOON
              </button>

            </div>
          </Reveal>

        </div>

      </div>

    </section>
  )
}