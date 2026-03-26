import Reveal from "../../ui/Reveal"
import { useNavigate } from "react-router-dom"
import { RiTrophyLine,RiFlag2Line} from "@remixicon/react"
import hackathonLogo from "../../../images/hackathon_logo_HD_v2-removebg-preview.png"

export default function EventHero() {
  const navigate = useNavigate()
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 bg-[#f5f6f8] overflow-hidden">

      {/* 🔲 GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🔥 FLOATING ELEMENTS */}
      <div className="hidden md:block absolute top-24 left-10 w-10 h-10 border border-green-300/90 rounded-xl rotate-12 animate-float" />
      <div className="hidden md:block absolute top-40 right-16 w-8 h-8 border border-blue-300/90 rounded-full animate-float-mini" />
      <div className="hidden md:block absolute bottom-20 left-20 w-12 h-12 border border-yellow-300/90 rounded-full animate-float-slow" />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* 🔥 LOGO */}
        <Reveal>
          <img
            src={hackathonLogo}
            alt="Hackathon"
            className="mx-auto max-w-full w-[80%] sm:w-[70%] md:w-[600px] lg:w-[750px]"
          />
        </Reveal>

        {/* 🔥 TAGLINE */}
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            Code. Build. Innovate.
          </p>
        </Reveal>

        {/* 🔥 DESCRIPTION */}
        <Reveal delay={0.2}>
          <p className="mt-6 text-xl md:text-3xl text-gray-700 font-bold max-w-3xl mx-auto leading-relaxed">
            A <span className="text-purple-600 font-bold">24-hour hackathon</span> designed to push your limits, enhance your{" "}
            <span className="text-blue-500 font-bold">problem-solving</span> skills, and build{" "}
            <span className="text-green-600 font-bold">real-world projects</span>.
          </p>
        </Reveal>

        {/* 🔥 FEATURE PILLS */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <div className="mt-8 flex flex-wrap justify-center gap-4">

  {/* GREEN */}
  <div className="
    bg-gradient-to-r from-green-600 to-emerald-500
    text-white px-6 py-2.5 rounded-full font-semibold
    shadow-md hover:scale-105 transition
  ">
    24 HOURS
  </div>

  {/* BLUE */}
  <div className="
    bg-gradient-to-r from-blue-600 to-indigo-500
    text-white px-6 py-2.5 rounded-full font-semibold
    shadow-md hover:scale-105 transition
  ">
    TEAM BASED
  </div>

  {/* ORANGE */}
  <div className="
    bg-gradient-to-r from-orange-500 to-yellow-400
    text-white px-6 py-2.5 rounded-full font-semibold
    shadow-md hover:scale-105 transition
  ">
    AMAZING PRIZES
  </div>

</div>

          </div>
        </Reveal>

        {/* 🔥 INFO CARDS */}
        <Reveal delay={0.4}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Duration */}
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Duration</p>
              <h4 className="font-semibold text-lg mt-1">
                17th March - 18th March
              </h4>
            </div>

            {/* Platform */}
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Platform</p>
              <h4 className="font-semibold text-lg mt-1">
                Offline (Allenhouse)
              </h4>
            </div>

            {/* Organized */}
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <p className="text-gray-500 text-sm">Organized by</p>
              <h4 className="font-semibold text-lg mt-1">
                Indian Data Club
              </h4>
            </div>

          </div>
        </Reveal>

        <Reveal delay={0.5}>
  <div className="mt-12 flex justify-center">
    <div className="
      flex items-center gap-3
      px-10 py-5
      rounded-2xl
      border border-gray-300
      bg-white
      text-gray-600
      font-semibold
      text-2xl
      shadow-sm
    ">
      <RiFlag2Line className="text-xl" />
      EVENT OVER
    </div>
  </div>
</Reveal>

<Reveal delay={0.6}>
  <p className="mt-4 text-gray-500 text-sm text-center">
    Registration closed • 4th Feb – 4th March 2025
  </p>
</Reveal>

{/* 🔥 BUTTON */}
<Reveal delay={0.7}>
  <div className="mt-8 flex justify-center">
    <button
      onClick={() => navigate("/events/hackathon-2.0/winners")}
      className="
        flex items-center gap-2
        px-8 py-3
        rounded-xl
        border-2 border-green-500
        text-green-600
        font-semibold
        bg-white
        transition-all duration-300
        hover:bg-green-50
        hover:shadow-md
        hover:scale-105
      "
    >
      <RiTrophyLine />
      View Winners
    </button>
  </div>
</Reveal>

      </div>
    </section>
  )
}