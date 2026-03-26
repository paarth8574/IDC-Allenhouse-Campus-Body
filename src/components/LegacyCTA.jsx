import { useEffect, useRef, useState } from "react"

function LegacyCTA() {
  return (
    <section className="relative py-28 overflow-hidden z-10 bg-gray-50">

      {/* ===== FLOATING CIRCLES (REAL ONES 😎) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* LEFT TOP CIRCLE */}
        <div className="float-circle green top-left" />

        {/* RIGHT BOTTOM CIRCLE */}
        <div className="float-circle blue bottom-right" />

        {/* OPTIONAL SMALL CENTER CIRCLE */}
        <div className="float-circle yellow mid" />

      </div>

      {/* ===== CONTENT ===== */}
      <Reveal>
        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Ready to <span className="text-[#9374DC]">Become</span>{" "}
            a <span className="text-blue-600">Data Innovator?</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600">
            Join the{" "}
            <span className="text-[#9374DC] font-semibold">
              Indian Data Club community
            </span>{" "}
            and start exploring the world of
data, analytics, and innovation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#9374DC] hover:bg-[#9374DC]/700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105">
              🚀 Join IDC Community →
            </button>

            <button className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-gray-800 transition hover:scale-105">
              👥 Meet Our Team →
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#9374DC] rounded-full" />
              Beginner friendly learning environment
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Hands-on workshops & data projects
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full" />
              Connect with mentors and data professionals
            </div>
          </div>

        </div>
      </Reveal>

    </section>
  )
}

export default LegacyCTA



/* ===== REVEAL COMPONENT ===== */

function Reveal({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transform: visible ? "translateY(0)" : "translateY(80px)",
        opacity: visible ? 1 : 0,
        transition: "all 900ms cubic-bezier(.22,1,.36,1)"
      }}
    >
      {children}
    </div>
  )
}