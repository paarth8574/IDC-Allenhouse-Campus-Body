import Reveal from "../../ui/Reveal"

export default function WinnersRunnerUp() {

  const teams = [
    {
      teamName: "Team Beta",
      members: [
        { name: "Pranav Patel", id: "24BCS040", college: "Allenhouse Business School", role: "Frontend", linkedin: "#" },
        { name: "Prarthana Singh", id: "24BCS154", college: "Allenhouse Business School", role: "Backend", linkedin: "#" },
        { name: "Chandra Jaiswal", id: "23BCS029", college: "Allenhouse Business School", role: "Full Stack", linkedin: "#" },
      ]
    },
    {
      teamName: "Team Gamma",
      members: [
        { name: "Aman Verma", id: "24BCS111", college: "Btech-CS-2", role: "Frontend", linkedin: "#" },
        { name: "Sneha Yadav", id: "24BCS112", college: "Btech-CS-2", role: "Backend", linkedin: "#" },
        { name: "Vikas Kumar", id: "24BCS113", college: "Btech-CS-2", role: "AI/ML", linkedin: "#" },
      ]
    }
  ]

  return (
    <section className="py-24 px-4 bg-[#ffff]">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold">
              🥈 RUNNERS UP
            </p>

            <h2 className="text-3xl md:text-6xl font-extrabold">
              Top <span className="text-blue-500">Performing Teams</span>
            </h2>

            <p className="text-gray-600 mt-3">
              Teams that built impactful solutions under pressure
            </p>
          </div>
        </Reveal>

        {/* TEAMS */}
        <div className="space-y-16">

          {teams.map((team, i) => {

  const isFirst = i === 0

  return (
    <div key={i}>

      <Reveal>

      {/* TEAM TITLE */}
      <h3 className={`text-3xl font-semibold mb-6 ${
        isFirst ? "text-yellow-600" : "text-gray-800"
      }`}>
        {isFirst ? "🥇 First Runner Up" : "🥈 Second Runner Up"}
      </h3>
      </Reveal>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {team.members.map((member, index) => (

          <Reveal key={index} delay={index * 0.1}>

            <div
              className={`
                relative
                bg-white
                rounded-2xl
                p-6
                transition-all duration-300

                ${isFirst 
                  ? "border-2 border-yellow-400 shadow-[0_20px_60px_rgba(255,200,0,0.35)]"
                  : "border-2 border-green-500 shadow-[0_15px_40px_rgba(34,197,94,0.25)]"
                }
              `}
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

                const glowColor = isFirst
                  ? "rgba(255,200,0,0.35)"
                  : "rgba(34,197,94,0.3)"

                if (x < midX && y < midY) {
                  rotateX = 10
                  rotateY = -10
                  el.style.boxShadow = `10px 20px 30px ${glowColor}`
                } else if (x > midX && y < midY) {
                  rotateX = 10
                  rotateY = 10
                  el.style.boxShadow = `-10px 20px 30px ${glowColor}`
                } else if (x > midX && y > midY) {
                  rotateX = -10
                  rotateY = 10
                  el.style.boxShadow = `-10px -20px 30px ${glowColor}`
                } else {
                  rotateX = -10
                  rotateY = -10
                  el.style.boxShadow = `10px -20px 30px ${glowColor}`
                }

                el.style.transform = `
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  scale(${isFirst ? 1.05 : 1.03})
                `
              }}

              onMouseLeave={(e) => {
                const el = e.currentTarget

                el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"

                el.style.boxShadow = isFirst
                  ? "0px 20px 50px rgba(255,200,0,0.3)"
                  : "0px 10px 25px rgba(34,197,94,0.2)"
              }}
            >

              {/* MEDAL ICON */}
              <div className={`
                absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full shadow
                ${isFirst ? "bg-yellow-400 text-white" : "bg-green-600 text-white"}
              `}>
                {isFirst ? "🥇" : "🥈"}
              </div>

              {/* NAME */}
<h3 className="text-lg font-bold text-gray-900">
  {member.name}
</h3>

{/* ID */}
<p className="text-sm text-gray-500">
  {member.id}
</p>

{/* COLLEGE (UPDATED PREMIUM STYLE) */}
<p className="text-sm text-gray-400 mt-1">
  {member.college}
</p>

              {/* TAG */}
              <div className="mt-4">
                <span className={`
                  inline-block text-xs px-3 py-1 rounded-full font-medium
                  ${isFirst
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-600"
                  }
                `}>
                  Hackathon 2.0 Runner Up
                </span>
              </div>

              {/* ROLE */}
              <div className="mt-3">
                <span className={`
                  text-xs px-2 py-1 rounded-full
                  ${isFirst
                    ? "bg-yellow-50 text-yellow-600"
                    : "bg-green-50 text-green-600"
                  }
                `}>
                  {member.role}
                </span>
              </div>

              {/* LINKEDIN */}
              <a
                href={member.linkedin}
                className="
                  mt-6 block text-center
                  border border-blue-300 text-blue-600
                  py-2 rounded-xl text-sm
                  hover:bg-blue-50 transition
                "
              >
                LinkedIn
              </a>

            </div>

          </Reveal>

        ))}

      </div>

    </div>
  )
})}

        </div>

      </div>

    </section>
  )
}