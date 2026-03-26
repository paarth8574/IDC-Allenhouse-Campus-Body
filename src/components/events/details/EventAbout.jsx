import Reveal from "../../ui/Reveal"

export default function EventAbout() {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#f5f6f8] overflow-hidden">

      {/* FLOATING */}
      <div className="hidden md:block absolute top-16 left-10 w-10 h-10 border border-purple-300/40 rounded-xl rotate-12 animate-float" />
      <div className="hidden md:block absolute bottom-20 right-16 w-12 h-12 border border-green-300/40 rounded-full animate-float-slow" />

      <div className="max-w-6xl mx-auto">

        {/* 🔥 ABOUT HEADING */}
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            About <span className="text-purple-600">the Event</span>
          </h2>
        </Reveal>

        {/* 🔥 ABOUT TEXT */}
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Hackathon 2.0 was a 24-hour coding challenge where students collaborated,
            built innovative solutions, and solved real-world problems through teamwork
            and creativity.
          </p>
        </Reveal>

        {/* 🔥 FEATURES */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

          <Reveal delay={0.2}>
            <div className="space-y-5 text-gray-600 text-lg">
              <p>
                <span className="text-purple-600 font-semibold">Hackathon 2.0</span>{" "}
                pushed participants to think beyond limits and build impactful solutions.
              </p>

              <p>
                It simulated real-world development where teams collaborated under pressure
                and delivered innovative results.
              </p>

              <p>
                Focus was on{" "}
                <span className="text-blue-500 font-semibold">problem-solving</span>,{" "}
                <span className="text-green-600 font-semibold">teamwork</span>, and{" "}
                <span className="text-orange-500 font-semibold">innovation</span>.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {[
              "Innovation First",
              "Team Collaboration",
              "Real Experience",
            ].map((item, i) => (
              <Reveal key={i} delay={0.3 + i * 0.1}>
                <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                  <h3 className="font-semibold text-lg">{item}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ================== 🔥 REWARDS SECTION ================== */}

        <div className="mt-20">

          {/* TITLE */}
          <Reveal>
            <h2 className="text-3xl md:text-7xl font-extrabold text-center">
              Rewards & <span className="text-green-600">Recognition</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-center text-2xl font-bold mt-3 text-gray-600">
              At the end of the hackathon:
            </p>
          </Reveal>

          <Reveal delay={0.2}>
  <div
    className="
      group
      mt-10 mx-auto
      w-full md:w-[75%]
      max-w-4xl
      min-h-[520px] md:min-h-[620px]

      relative
      rounded-3xl

      bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-50
      border border-yellow-300

      px-6 md:px-10
      py-12 md:py-16

      text-center

      shadow-[0_15px_50px_rgba(0,0,0,0.12)]

      transition-transform duration-300 ease-out
      will-change-transform
    "

    style={{
      transformStyle: "preserve-3d",
      perspective: "1200px",
    }}

    onMouseMove={(e) => {
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const percentX = (x / rect.width) - 0.5
      const percentY = (y / rect.height) - 0.5

      const rotateY = percentX * 16
      const rotateX = percentY * -16

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

      // 🔥 INNER PARALLAX ELEMENTS
      el.querySelectorAll("[data-depth]").forEach((child) => {
        const depth = child.getAttribute("data-depth")
        const moveX = percentX * depth * 10
        const moveY = percentY * depth * 10

        child.style.transform = `
          translateX(${moveX}px)
          translateY(${moveY}px)
          translateZ(${depth * 40}px)
        `
      })
    }}

    onMouseLeave={(e) => {
      const el = e.currentTarget
      el.style.transform = "rotateX(0deg) rotateY(0deg)"

      el.querySelectorAll("[data-depth]").forEach((child) => {
        child.style.transform = "translateX(0px) translateY(0px) translateZ(0px)"
      })
    }}
  >

    {/* TROPHY */}
    <div
      data-depth="3"
      className="w-20 h-20 mx-auto bg-orange-500 text-white flex items-center justify-center rounded-full text-3xl shadow-md transition-transform duration-300"
    >
      🏆
    </div>

    {/* HEADING */}
    <h3
      data-depth="2"
      className="mt-6 text-xl md:text-3xl font-bold text-yellow-800 transition-transform duration-300"
    >
      🎁 TOP PARTICIPANTS WILL RECEIVE
    </h3>

    <p
      data-depth="2"
      className="mt-2 text-lg md:text-2xl font-semibold text-orange-600 transition-transform duration-300"
    >
      AMAZING GOODIES & PRIZES!
    </p>

    {/* INNER CARD */}
    <div
      data-depth="1"
      className="
        mt-8 bg-white
        rounded-2xl
        p-6 md:p-8
        border border-yellow-200
        shadow-md
        transition-transform duration-300
      "
    >

      <p className="font-semibold text-gray-700 mb-6">
        Rewards are based on:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="text-center" data-depth="2">
          <div className="w-14 h-14 mx-auto bg-yellow-100 flex items-center justify-center rounded-full text-xl">
            📅
          </div>
          <h4 className="mt-3 font-semibold">Consistency</h4>
          <p className="text-sm text-gray-500">
            Showing up every day
          </p>
        </div>

        <div className="text-center" data-depth="2">
          <div className="w-14 h-14 mx-auto bg-orange-100 flex items-center justify-center rounded-full text-xl">
            ✅
          </div>
          <h4 className="mt-3 font-semibold">Task Completion</h4>
          <p className="text-sm text-gray-500">
            Completing all tasks
          </p>
        </div>

        <div className="text-center" data-depth="2">
          <div className="w-14 h-14 mx-auto bg-red-100 flex items-center justify-center rounded-full text-xl">
            🧠
          </div>
          <h4 className="mt-3 font-semibold">Genuine Effort</h4>
          <p className="text-sm text-gray-500">
            Quality learning & work
          </p>
        </div>

      </div>

    </div>

    <p
      data-depth="1"
      className="mt-6 text-sm text-gray-500 italic transition-transform duration-300"
    >
      (Exact reward details will be shared soon.)
    </p>

  </div>
</Reveal>

        </div>

      </div>
    </section>
  )
}