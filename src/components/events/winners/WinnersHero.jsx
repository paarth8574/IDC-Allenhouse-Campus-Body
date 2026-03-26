import hackathonLogo from "../../../images/hackathon_logo_HD_v2-removebg-preview.png"
import { RiTrophyLine } from "@remixicon/react"
import Reveal from "../../ui/Reveal"

export default function WinnersHero() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* 🔥 LIGHT GRID (VERY SUBTLE) */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-5xl mx-auto text-center px-4">

        {/* LOGO */}
        <Reveal>
        <img
          src={hackathonLogo}
          alt="Hackathon"
          className="mx-auto w-[220px] md:w-[460px] mb-6"
        />
        </Reveal>

        <Reveal>
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
          ⭐ HACKATHON 2.0 • RESULTS
        </div>
        </Reveal>

        {/* 🔥 HEADING WITH TROPHIES */}
        <div className="mt-8 flex items-center justify-center gap-4">

          <Reveal>
          {/* LEFT TROPHY */}
          <div className="bg-yellow-400 rounded-xl p-3 rotate-[-15deg] shadow-md">
            <RiTrophyLine className="text-white text-2xl" />
          </div>
          </Reveal>

          <Reveal>

          {/* TEXT */}
          <h1 className="text-4xl md:text-6xl font-extrabold">
            <span className="text-black uppercase">Celebrating{" "}</span>
            <span className="text-green-600 uppercase">Builders Who Shipped</span>
          </h1>
          </Reveal>


          <Reveal>
          {/* RIGHT TROPHY */}
          <div className="bg-yellow-400 rounded-xl p-3 rotate-[15deg] shadow-md">
            <RiTrophyLine className="text-white text-2xl" />
          </div>
          </Reveal>

        </div>

        <Reveal>
        {/* SUBTEXT */}
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          These teams didn't just participate — they built, solved, and delivered
            under pressure in{" "}
        </p>
        </Reveal>

        {/* CARDS */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <Reveal>
          {/* CARD 1 */}
          <div className="w-[260px] rounded-2xl border border-yellow-300 bg-yellow-50 py-8">
            <div className="text-2xl">🏅</div>
            <h3 className="text-3xl font-bold text-yellow-600 mt-2">1</h3>
            <p className="text-gray-600 mt-1">Champion</p>
          </div>
          </Reveal>

          <Reveal>

          {/* CARD 2 */}
          <div className="w-[260px] rounded-2xl border border-blue-300 bg-blue-50 py-8">
            <div className="text-2xl">🏆</div>
            <h3 className="text-3xl font-bold text-blue-600 mt-2">2</h3>
            <p className="text-gray-600 mt-1">Runner-Up Teams</p>
          </div>
          </Reveal>

          <Reveal>
          {/* CARD 3 */}
          <div className="w-[260px] rounded-2xl border border-purple-300 bg-purple-50 py-8">
            <div className="text-2xl">🔥</div>
            <h3 className="text-3xl font-bold text-purple-600 mt-2">2</h3>
            <p className="text-gray-600 mt-1">Consolation Teams</p>
          </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}