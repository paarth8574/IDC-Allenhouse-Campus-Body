import Reveal from "../../ui/Reveal"
import { RiArrowLeftLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom"

export default function WinnersCTA() {

  const navigate = useNavigate()

  return (
    <section className="py-28 px-4 bg-[#ffff]">

      <div className="max-w-3xl mx-auto text-center">

        {/* 🎉 ICON */}
        <Reveal>
          <div className="text-5xl mb-6">
            🎉
          </div>
        </Reveal>

        {/* TITLE */}
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Congratulations to all winners!
          </h2>
        </Reveal>

        {/* SUBTEXT */}
        <Reveal delay={0.2}>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            You proved that consistency beats talent. Keep solving, keep growing.
          </p>
        </Reveal>

        {/* BUTTON */}
        <Reveal delay={0.3}>
          <div className="mt-10">

            <button
              onClick={() => navigate("/events/hackathon-2.0")}
              className="
                inline-flex items-center gap-2
                bg-gradient-to-r from-green-500 to-green-600 text-white
                px-8 py-4 rounded-2xl
                text-lg font-semibold

                shadow-[0_10px_30px_rgba(34,197,94,0.3)]
                transition-all duration-300

                hover:bg-green-700
                hover:scale-105
                hover:shadow-[0_15px_40px_rgba(34,197,94,0.4)]
              "
            >
              <RiArrowLeftLine/> Back to HACKATHON 2.0
            </button>

          </div>
        </Reveal>

      </div>

    </section>
  )
}