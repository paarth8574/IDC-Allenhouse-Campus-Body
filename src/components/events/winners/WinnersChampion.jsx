import Reveal from "../../ui/Reveal"

export default function WinnersChampion() {

  const team = [
    {
      name: "Narendra Kumar",
      id: "25CSME172",
      college: "Allenhouse Business School",
      role: "Frontend Developer",
      linkedin: "#"
    },
    {
      name: "Ravi Singh",
      id: "25CSME180",
      college: "Allenhouse Business School",
      role: "Backend Developer",
      linkedin: "#"
    },
    {
      name: "Kunal Verma",
      id: "25CSME190",
      college: "Allenhouse Business School",
      role: "UI/UX Designer",
      linkedin: "#"
    }
  ]

  return (
    <section className="py-24 px-4 bg-[#ffffff]">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 TITLE */}
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold tracking-wide">
              🥇 WINNERS
            </p>

            <h2 className="text-3xl md:text-6xl font-extrabold">
              Hackathon <span className="text-yellow-500">Champions</span>
            </h2>

            <p className="text-gray-600 mt-3">
              The team that outperformed everyone 🚀
            </p>
          </div>
        </Reveal>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member, index) => (

            <Reveal key={index} delay={index * 0.1}>

              <div
  className="
    relative
    rounded-2xl
    border-2 border-yellow-400
    bg-white
    p-6
    transition-all duration-300
  "
  style={{
    transformStyle: "preserve-3d",
    perspective: "1000px"
  }}
  onMouseMove={(e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const midX = rect.width / 2
    const midY = rect.height / 2

    let rotateX = 0
    let rotateY = 0

    // 🔥 QUADRANT LOGIC (EXACT LIKE YOUR CSS)
    if (x < midX && y < midY) {
      // top-left
      rotateX = 10
      rotateY = -10
      el.style.boxShadow = "10px 20px 30px rgba(0,0,0,0.2)"
    } 
    else if (x > midX && y < midY) {
      // top-right
      rotateX = 10
      rotateY = 10
      el.style.boxShadow = "-10px 20px 30px rgba(0,0,0,0.2)"
    } 
    else if (x > midX && y > midY) {
      // bottom-right
      rotateX = -10
      rotateY = 10
      el.style.boxShadow = "-10px -20px 30px rgba(0,0,0,0.2)"
    } 
    else {
      // bottom-left
      rotateX = -10
      rotateY = -10
      el.style.boxShadow = "10px -20px 30px rgba(0,0,0,0.2)"
    }

    el.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `
  }}
  onMouseLeave={(e) => {
    const el = e.currentTarget
    el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
    el.style.boxShadow = "0px 15px 40px rgba(0,0,0,0.15)"
  }}
>

                {/* TOP BADGE */}
                <div className="flex justify-between items-start">

                  <div className="text-yellow-500 text-sm font-semibold">
                    👑 WINNER
                  </div>

                  <div className="
                    w-10 h-10
                    bg-yellow-400
                    rounded-full
                    flex items-center justify-center
                    shadow-md
                  ">
                    🏅
                  </div>

                </div>

                {/* NAME */}
                <h3 className="text-xl font-bold mt-4 text-gray-900">
                  {member.name}
                </h3>

                {/* ID */}
                <p className="text-sm text-gray-500 mt-1">
                  {member.id}
                </p>

                {/* COLLEGE */}
                <p className="text-sm text-gray-400">
                  {member.college}
                </p>

                {/* ROLE (REPLACES 30/30 SECTION) */}
                <div className="mt-4">
                  <span className="
                    inline-block
                    bg-yellow-100
                    text-yellow-700
                    text-xs
                    px-3 py-1
                    rounded-full
                    font-medium
                  ">
                    {member.role}
                  </span>
                </div>

                {/* HACKATHON TAG */}
                <div className="mt-4">
                  <span className="
                    inline-block
                    bg-yellow-400/20
                    text-yellow-600
                    text-xs
                    px-3 py-1
                    rounded-full
                    font-semibold
                  ">
                    🏆 Hackathon 2.0 Winner
                  </span>
                </div>

                {/* BUTTON */}
                <div className="mt-6">
                  <a
                    href={member.linkedin}
                    className="
                      w-full block text-center
                      border border-blue-300
                      text-blue-600
                      py-2 rounded-xl
                      text-sm font-medium
                      hover:bg-blue-50
                      transition
                    "
                  >
                    🔗 LinkedIn
                  </a>
                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}