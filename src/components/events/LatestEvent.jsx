import Reveal from "../ui/Reveal"
import { RiArrowRightLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom"

export default function LatestEvent() {

  const navigate = useNavigate()

  return (
    <section className="relative bg-[#f5f6f8] pt-10 md:pt-14 pb-16 md:pb-24 px-4 sm:px-6 overflow-hidden">

      {/* 🔥 FLOATING ELEMENTS (Responsive Controlled) */}

      <div className="hidden sm:block absolute top-10 left-10 md:left-20 w-8 h-8 md:w-10 md:h-10 border border-blue-300/70 rounded-xl rotate-12 animate-float" />

      <div className="hidden sm:block absolute right-10 md:right-24 top-16 md:top-20 w-6 h-6 md:w-8 md:h-8 border border-green-300/70 rounded-full animate-float-mini" />

      <div className="hidden md:block absolute left-1/3 bottom-10 md:bottom-16 w-12 h-12 md:w-16 md:h-16 border border-yellow-300/70 rounded-full animate-float-slow" />


      <div className="max-w-4xl mx-auto text-center">

        {/* 🔥 TITLE */}
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500">
            LATEST EVENT
          </h2>
        </Reveal>

        {/* 🔥 SUBTITLE */}
        <Reveal delay={0.1}>
          <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-gray-600">
            The next big things are brewing. Get ready to be amazed.
          </p>
        </Reveal>


        {/* 🔥 EVENT CARD */}
        <Reveal delay={0.2}>
          <div className="mt-8 md:mt-12 flex justify-center">

            <div
              onClick={() => navigate("/events/hackathon-2.0")}
              className="
              group cursor-pointer
              w-full max-w-sm sm:max-w-md
              min-h-[480px] md:min-h-[520px]
              bg-white
              rounded-2xl md:rounded-3xl
              shadow-[0_15px_40px_rgba(0,0,0,0.12)]
              md:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              overflow-hidden
              transition-all duration-500
              hover:scale-[1.05] md:hover:scale-[1.08]
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)]
              flex flex-col justify-between
              "
            >

              {/* 🔥 HEADER */}
              <div className="
                relative overflow-hidden
                bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600
                text-white px-5 sm:px-6 md:px-8 py-8 md:py-12
              ">

                {/* ✨ Shine */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-white/30 to-transparent
                  opacity-0
                  -translate-x-full
                  group-hover:opacity-100
                  group-hover:translate-x-full
                  transition-all duration-700 ease-in-out
                " />

                {/* 🔹 Shapes */}
                <div className="absolute top-3 left-3 w-8 h-8 md:w-10 md:h-10 border border-white/50 rounded-xl rotate-12 opacity-40" />
                <div className="absolute top-3 right-3 w-6 h-6 md:w-8 md:h-8 border border-white/50 rounded-full opacity-40" />
                <div className="absolute bottom-3 right-5 w-8 h-8 md:w-10 md:h-10 border border-white/50 rounded-xl -rotate-12 opacity-40" />
                <div className="absolute bottom-5 left-5 w-2.5 h-2.5 md:w-3 md:h-3 bg-white/50 rounded-full" />

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Hackathon 2.0
                </h3>

                <p className="mt-2 text-base sm:text-lg md:text-xl opacity-90">
                  24 Hours Coding Challenge
                </p>

              </div>


              {/* 🔥 CONTENT */}
              <div className="px-5 sm:px-6 md:px-8 py-6 md:py-8 text-center flex flex-col gap-5 md:gap-6">

                {/* STATUS */}
                <div className="inline-flex items-center gap-2 bg-[#9374DC]/10 text-[#67519b] px-4 md:px-5 py-2 rounded-full text-sm md:text-base font-medium mx-auto">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#9374DC] rounded-full"></span>
                  Completed Event
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Build consistency. Strengthen logic. Master DSA. A structured
                  coding challenge designed to improve problem-solving skills.
                </p>

                {/* DATE */}
                <div className="bg-blue-50 px-5 sm:px-10 md:px-16 py-3 rounded-xl inline-flex items-center gap-2 text-blue-600 text-sm md:text-base font-medium mx-auto">
                  📅 17th March - 18th March
                </div>

                {/* BUTTON */}
                <div className="mt-2 md:mt-4 group">
                  <button
                    className="
                    px-5 md:px-6 py-3
                    bg-gradient-to-r from-purple-500 to-indigo-600
                    text-white
                    rounded-xl text-sm md:text-base font-semibold
                    flex items-center gap-2 mx-auto
                    transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    "
                  >
                    View Event Details
                    <RiArrowRightLine className="text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}