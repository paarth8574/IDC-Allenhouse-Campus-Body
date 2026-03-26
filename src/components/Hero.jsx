import { useEffect } from "react"
import idcLogo from "../images/IDC LOGO 2.png"

function Hero() {

  // 🔥 REPEAT SCROLL REVEAL
  useEffect(() => {
    const elements = document.querySelectorAll(".hero-reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          } else {
            entry.target.classList.remove("active")
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="
        pt-32 pb-20
        relative bg-gray-50 overflow-hidden
        flex items-center justify-center
        min-h-[calc(100vh-80px)]
        px-6
      "
    >

      {/* LEFT FLOATING ITEMS */}
      <div className="absolute left-0 top-0 h-full w-32 pointer-events-none">

        <div
          className="absolute top-28 left-6 w-14 h-14 border-2 border-green-300 rounded-xl opacity-70 animate-float hero-reveal"
        />

        <div
          className="absolute top-60 left-8 w-12 h-12 border-2 border-blue-300 rounded-full opacity-70 animate-float hero-reveal"
        />

        <div
          className="absolute top-[440px] left-4 w-7 h-7 border-2 border-green-200 rounded-full opacity-70 animate-float hero-reveal"
        />

        <div
          className="absolute bottom-28 left-6 w-14 h-14 border-2 border-yellow-300 rotate-12 opacity-70 animate-float hero-reveal"
        />
      </div>

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-center">

        {/* LOGO */}
        <img
          src={idcLogo}
          alt="IDC Logo"
          className="
  w-44 sm:w-52 md:w-64
  mx-auto mb-6
  hero-reveal
  drop-shadow-[0_15px_35px_rgba(0,0,0,0.2)]
  transition duration-300 hover:scale-105
"
        />

        {/* TITLE */}
        <h1
          className="
            text-5xl sm:text-6xl md:text-7xl
            font-extrabold text-gray-900
            leading-tight hero-reveal
          "
        >
          Indian Data Club —{" "}
          <span className="text-[#9374DC]">
            Allenhouse Student Chapter
          </span>
        </h1>

        {/* SUBTITLE */}
        <p
          className="
            mt-8 text-xl md:text-2xl text-gray-600
            max-w-3xl mx-auto leading-relaxed hero-reveal
          "
        >
          Empowering students to explore Data Analytics, AI, and emerging
technologies through workshops, events, and real-world projects.
<br /><b>Built by Data Folks, for Data Folks.</b>
        </p>

        {/* CTA BUTTONS */}
        <div
          className="
            mt-12 flex flex-col sm:flex-row
            gap-5 justify-center hero-reveal
          "
        >
          <button
            className="
              bg-black text-white px-10 py-5 rounded-2xl
              text-lg font-semibold shadow-xl
              hover:scale-105 transition
            "
          >
            🚀 Join the Community ⚡
          </button>

          <button
            className="
              border-2 border-[#9374DC] text-[#9374DC]
              px-10 py-5 rounded-2xl text-lg font-semibold
              hover:bg-[#9374DC]/10 transition
            "
          >
            📅 Explore Events
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero