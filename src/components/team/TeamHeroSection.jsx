import Reveal from "../ui/Reveal"
import krishnaimage from "../../images/Krishna Jha Operations Head.jfif";
import { RiGraduationCapFill, RiFlashlightFill } from "@remixicon/react"

export default function TeamHeroSection() {
  return (
    <section className="relative bg-[#f5f6f8] pt-20 md:pt-28 pb-16 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <Reveal>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              MEET OUR <span className="text-[#9374DC]">TEAM</span>
            </h2>

            <div className="w-16 md:w-20 h-1 bg-[#9374DC] mx-auto mt-4 rounded-full" />

            <p className="mt-5 text-gray-600 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              The brilliant minds driving innovation and excellence at
              GeeksForGeeks Campus Body
            </p>
          </div>
        </Reveal>


        {/* ================= FEATURED CARD ================= */}
        <Reveal delay={0.2}>
          <div className="relative group 
                bg-white
                rounded-3xl
                p-6 sm:p-10 md:p-16
                grid md:grid-cols-2 gap-10 md:gap-16 items-center
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                transition-all duration-500
                md:hover:shadow-[0_35px_80px_rgba(0,0,0,0.12)]
                md:hover:scale-[1.01]">

            {/* TOP LEFT RIPPLE */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
              <div className="relative w-4 h-4 md:w-6 md:h-6">
                <span className="absolute inset-0 rounded-full 
                                border-[2px] md:border-[3px] border-[#9374DC] 
                                animate-pulse-ring" />
              </div>
            </div>

            {/* BOTTOM CENTER FLOATING CIRCLE */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2
                            w-2 h-2 md:w-3 md:h-3 rounded-full
                            border border-blue-500
                            animate-float-mini" />

            {/* IMAGE SECTION */}
            <div className="relative flex justify-center">

              {/* BACK LAYER */}
              <div className="absolute w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-80
                              bg-gradient-to-br from-[#ba9dff] to-green-100
                              rounded-3xl 
                              rotate-6
                              transition-all duration-500 ease-out
                              md:group-hover:-rotate-3
                              md:group-hover:scale-105" />

              {/* MAIN IMAGE CARD */}
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80
                              bg-white
                              rounded-2xl 
                              overflow-hidden 
                              shadow-lg
                              transition-all duration-500 ease-out
                              md:group-hover:-rotate-2
                              md:group-hover:shadow-2xl">

                <img
                  src={krishnaimage}
                  alt="President"
                  className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-105"
                />

                {/* PRESIDENT BADGE */}
                <div className="absolute top-3 left-3
                                bg-yellow-400 text-[10px] sm:text-xs font-semibold
                                px-3 py-1 rounded-full shadow
                                rotate-[-8deg]
                                transition-all duration-500
                                md:group-hover:rotate-0">
                  🏆 PRESIDENT
                </div>

                {/* YEAR BADGE */}
                <div className="absolute bottom-3 right-3
                                bg-[#9374DC] text-white text-[10px] sm:text-xs
                                px-3 py-1 rounded-full">
                  2023–2027
                </div>

              </div>
            </div>


            {/* RIGHT SIDE INFO */}
            <div className="mt-6 md:mt-0">

              {/* Leadership */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#9374DC] rounded-full animate-solid-pulse" />
                <p className="uppercase tracking-wider text-xs sm:text-sm md:text-base text-gray-500 font-medium">
                  Leadership
                </p>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                Mr. <span className="text-[#9374DC]">Arvind Yadav</span>
              </h3>

              {/* Campus Badge */}
              <div className="flex items-center mt-3 gap-2 md:gap-3 mb-6 md:mb-10
                              bg-[#9374DC]/10
                              px-4 md:px-6 py-2 md:py-3 rounded-full w-fit">

                <span className="w-2 h-2 bg-[#9374DC] rounded-full animate-solid-pulse" />

                <span className="text-[#564482] font-medium text-xs sm:text-sm">
                  Campus Mantri
                </span>
              </div>


              {/* INFO BOXES */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">

                <div className="flex items-center gap-3 
                                bg-gray-50
                                rounded-xl p-3 md:p-5
                                transition-all duration-500
                                md:group-hover:translate-x-3
                                md:group-hover:bg-gray-100">

                  <RiGraduationCapFill className="text-gray-600 text-lg" />
                  <span className="text-xs sm:text-sm md:text-base">
                    Computer Science & Engineering
                  </span>
                </div>

                <div className="flex items-center gap-3 
                                bg-gray-50
                                rounded-xl p-3 md:p-5
                                transition-all duration-500
                                md:group-hover:translate-x-3
                                md:group-hover:bg-gray-100">

                  <RiFlashlightFill className="text-yellow-500 text-lg" />
                  <span className="text-xs sm:text-sm md:text-base">
                    Batch 2023–2027
                  </span>
                </div>

              </div>


              {/* QUOTE */}
              <blockquote className="border-l-4 border-[#9374DC] 
                                      pl-4 md:pl-6 
                                      text-sm sm:text-base md:text-lg 
                                      leading-relaxed text-gray-600 italic mb-6 md:mb-8">
                “Leading the tech revolution with passion and innovation.
                Dedicated to creating impactful learning experiences for the community.”
              </blockquote>


              {/* SOCIAL + BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">

                <div className="flex gap-6 relative z-50">

  {/* ================= LINKEDIN ================= */}
  <div className="relative group/linkedin w-12 h-12">

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 
                 bg-gray-100
                 rounded-2xl
                 flex items-center justify-center
                 transition-all duration-300
                 group-hover/linkedin:bg-[#0A66C2]
                 group-hover/linkedin:scale-110">

      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-gray-700 transition-colors duration-300 group-hover/linkedin:text-white"
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.24 8h4.5v14H.24V8zM8 8h4.3v1.9h.06c.6-1.1 2.06-2.3 4.24-2.3 4.54 0 5.38 3 5.38 6.9V22h-4.5v-6.7c0-1.6-.03-3.7-2.26-3.7-2.27 0-2.62 1.8-2.62 3.6V22H8V8z"/>
      </svg>
    </a>

    {/* Tooltip */}
    <div className="absolute -top-14 left-1/2 -translate-x-1/2
                    bg-black text-white text-xs
                    px-3 py-2 rounded-lg
                    opacity-0 scale-90
                    whitespace-nowrap
                    transition-all duration-200
                    pointer-events-none
                    group-hover/linkedin:opacity-100
                    group-hover/linkedin:scale-100">

      Connect on LinkedIn

      <div className="absolute left-1/2 -translate-x-1/2 top-full
                      w-3 h-3 bg-black rotate-45" />
    </div>

  </div>



  {/* ================= INSTAGRAM ================= */}
  <div className="relative group/instagram w-12 h-12">

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 
                 bg-gray-100
                 rounded-2xl
                 flex items-center justify-center
                 transition-all duration-300
                 group-hover/instagram:scale-110
                 group-hover/instagram:bg-gradient-to-tr
                 group-hover/instagram:from-purple-500
                 group-hover/instagram:to-pink-500">

      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-gray-700 transition-colors duration-300 group-hover/instagram:text-white"
        fill="currentColor"
      >
        <path d="M7.75 2C4.02 2 2 4.02 2 7.75v8.5C2 19.98 4.02 22 7.75 22h8.5C19.98 22 22 19.98 22 16.25v-8.5C22 4.02 19.98 2 16.25 2h-8.5zM12 7.1A4.9 4.9 0 1112 16.9 4.9 4.9 0 0112 7.1zm5.2-.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
      </svg>
    </a>

    {/* Tooltip */}
    <div className="absolute -top-14 left-1/2 -translate-x-1/2
                    bg-black text-white text-xs
                    px-3 py-2 rounded-lg
                    opacity-0 scale-90
                    whitespace-nowrap
                    transition-all duration-200
                    pointer-events-none
                    group-hover/instagram:opacity-100
                    group-hover/instagram:scale-100">

      Follow on Instagram

      <div className="absolute left-1/2 -translate-x-1/2 top-full
                      w-3 h-3 bg-black rotate-45" />
    </div>

  </div>

</div>

                <button className="bg-[#9374DC] hover:bg-[#5e498e] active:bg-[#53417e]
                                   text-white text-sm md:text-base
                                   px-5 md:px-6 py-2 md:py-3 rounded-xl
                                   transition-all duration-300
                                   hover:-translate-y-1 active:scale-95">
                  Get in Touch →
                </button>

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}