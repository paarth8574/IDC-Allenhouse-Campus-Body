import Reveal from "../../ui/Reveal"
import { useNavigate } from "react-router-dom"
import { RiTrophyLine, RiFlag2Line } from "@remixicon/react"

export default function FinalCTA() {
  const navigate = useNavigate()
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#0f1115] overflow-hidden text-white">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,#22c55e,transparent_40%),radial-gradient(circle_at_80%_70%,#3b82f6,transparent_40%)]" />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* 🔥 TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-extrabold">
            <span className="text-green-500">FINAL</span>{" "}
            <span className="text-white">NOTE</span>
          </h2>
        </Reveal>

        {/* UNDERLINE */}
        <Reveal delay={0.1}>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </Reveal>

        {/* 🔥 TEXT */}
        <Reveal delay={0.2}>
          <p className="mt-10 text-lg md:text-2xl text-gray-300 leading-relaxed">
            Hackathon 2.0 is{" "}
            <span className="text-green-400 font-semibold">
              not about just coding non-stop
            </span>.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 leading-relaxed">
            It’s about becoming{" "}
            <span className="text-blue-400 font-semibold">
              the kind of developer who builds real solutions
            </span>.
          </p>
        </Reveal>

        {/* 🔥 GLASS CARD */}
        <Reveal delay={0.4}>
          <div className="
            mt-12
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-3xl
            px-6 md:px-12 py-10
            shadow-[0_20px_80px_rgba(0,0,0,0.4)]
          ">

            <h3 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              24 hours of innovation starts here —
            </h3>

            <p className="mt-3 text-xl md:text-3xl font-semibold text-green-400">
              where ideas turn into real impact.
            </p>

          </div>
        </Reveal>

        {/* 🔥 EVENT STATUS */}
        <Reveal delay={0.5}>
          <div className="mt-10 text-2xl inline-flex items-center gap-3 bg-white/10 border border-white/20 px-10 py-5 rounded-xl text-gray-300 backdrop-blur-md">
            <RiFlag2Line className="text-xl" />
            EVENT OVER
          </div>
        </Reveal>

        {/* DATE */}
        <Reveal delay={0.6}>
          <p className="mt-3 text-sm text-gray-400">
            Registration closed • 11th March
          </p>
        </Reveal>

        {/* 🔥 BUTTON */}
        <Reveal delay={0.7}>
          <div className="mt-8">
            <button onClick={() => navigate("/events/hackathon-2.0/winners")} className="
              px-8 py-3
              bg-gradient-to-r from-green-500 to-emerald-600
              rounded-xl
              font-semibold
              flex items-center gap-2 mx-auto
              transition-all duration-300
              hover:scale-105 hover:shadow-lg
            ">
              <RiTrophyLine />
              View Winners
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  )
}