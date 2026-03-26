import Reveal from "../../ui/Reveal"

export default function WinnersConsolation() {

  const consolation = [
    {
      teamName: "⭐ Team Delta",
      type: "team",
      members: [
        {
          name: "Pawan Mishra",
          id: "24BCS201",
          college: "Allenhouse Business School",
          role: "Frontend",
          linkedin: "#"
        },
        {
          name: "Ojas Singh",
          id: "24BCS202",
          college: "Allenhouse Business School",
          role: "Backend",
          linkedin: "#"
        },
        {
          name: "Pragya Sharma",
          id: "24BCS203",
          college: "Allenhouse Business School",
          role: "UI/UX",
          linkedin: "#"
        }
      ]
    },
    {
      teamName: "⭐ Solo Achiever",
      type: "solo",
      members: [
        {
          name: "Ritesh Kumar",
          id: "24BCS210",
          college: "Allenhouse Business School",
          role: "Full Stack",
          linkedin: "#"
        }
      ]
    }
  ]

  return (
    <section className="py-24 px-4 bg-[#ffff]">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold">
              🔥 CONSOLATION
            </p>

            <h2 className="text-3xl md:text-6xl font-extrabold">
              Notable <span className="text-purple-500">Performers</span>
            </h2>

            <p className="text-gray-600 mt-3">
              Recognizing effort, creativity & determination
            </p>
          </div>
        </Reveal>

        <div className="space-y-20">

          {consolation.map((group, i) => (

            <div key={i}>

              {/* TEAM NAME */}
              <h3 className="text-3xl text-center font-bold mb-6 text-gray-800">
                {group.teamName}
              </h3>

              {/* TEAM CARDS */}
              {group.type === "team" && (
                <div className="grid md:grid-cols-3 gap-8">

                  {group.members.map((member, index) => (

                    <Reveal key={index} delay={index * 0.1}>

                      <div
                        className="
                          relative
                          bg-white
                          rounded-2xl
                          border-2 border-purple-400
                          p-6
                          shadow-[0_15px_40px_rgba(168,85,247,0.25)]
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
                          const glow = "rgba(168,85,247,0.3)"

                          if (x < midX && y < midY) {
                            rotateX = 10
                            rotateY = -10
                            el.style.boxShadow = `10px 20px 30px ${glow}`
                          } else if (x > midX && y < midY) {
                            rotateX = 10
                            rotateY = 10
                            el.style.boxShadow = `-10px 20px 30px ${glow}`
                          } else if (x > midX && y > midY) {
                            rotateX = -10
                            rotateY = 10
                            el.style.boxShadow = `-10px -20px 30px ${glow}`
                          } else {
                            rotateX = -10
                            rotateY = -10
                            el.style.boxShadow = `10px -20px 30px ${glow}`
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
                          el.style.boxShadow = "0px 10px 25px rgba(168,85,247,0.2)"
                        }}
                      >

                        {/* ICON */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full shadow">
                          🔥
                        </div>

                        <h3 className="text-lg font-bold">{member.name}</h3>

                        <div className="mt-1">
                          <p className="text-sm text-gray-500">{member.id}</p>
                          <p className="text-xs text-gray-400">{member.college}</p>
                        </div>

                        <div className="mt-4">
                          <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
                            {member.role}
                          </span>
                        </div>

                        <div className="mt-3 text-xs text-purple-600 font-semibold">
                          Hackathon 2.0 Consolation
                        </div>

                        <a
                          href={member.linkedin}
                          className="mt-6 block text-center border border-blue-300 text-blue-600 py-2 rounded-xl text-sm hover:bg-blue-50 transition"
                        >
                          LinkedIn
                        </a>

                      </div>

                    </Reveal>

                  ))}

                </div>
              )}

              {/* SOLO CARD */}
              {group.type === "solo" && (

                <div className="flex justify-center">

                  <Reveal>

                    <div
                      className="
                        relative
                        w-full max-w-md
                        bg-white
                        rounded-3xl
                        border-2 border-purple-500
                        p-8
                        text-center
                        shadow-[0_20px_60px_rgba(168,85,247,0.35)]
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
                        const glow = "rgba(168,85,247,0.35)"

                        if (x < midX && y < midY) {
                          rotateX = 10
                          rotateY = -10
                          el.style.boxShadow = `10px 20px 30px ${glow}`
                        } else if (x > midX && y < midY) {
                          rotateX = 10
                          rotateY = 10
                          el.style.boxShadow = `-10px 20px 30px ${glow}`
                        } else if (x > midX && y > midY) {
                          rotateX = -10
                          rotateY = 10
                          el.style.boxShadow = `-10px -20px 30px ${glow}`
                        } else {
                          rotateX = -10
                          rotateY = -10
                          el.style.boxShadow = `10px -20px 30px ${glow}`
                        }

                        el.style.transform = `
                          rotateX(${rotateX}deg)
                          rotateY(${rotateY}deg)
                          scale(1.04)
                        `
                      }}

                      onMouseLeave={(e) => {
                        const el = e.currentTarget
                        el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
                        el.style.boxShadow = "0px 20px 60px rgba(168,85,247,0.35)"
                      }}
                    >

                      {/* ICON */}
                      <div className="w-14 h-14 mx-auto bg-purple-600 text-white flex items-center justify-center rounded-full text-xl shadow-md">
                        ⭐
                      </div>

                      <h3 className="mt-5 text-xl font-bold">
                        {group.members[0].name}
                      </h3>

                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {group.members[0].id}
                        </p>
                        <p className="text-xs text-gray-400">
                          {group.members[0].college}
                        </p>
                      </div>

                      <div className="mt-4">
                        <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
                          {group.members[0].role}
                        </span>
                      </div>

                      <div className="mt-4 text-sm text-purple-600 font-semibold">
                        🏆 Solo Performer
                      </div>

                      <a
                        href={group.members[0].linkedin}
                        className="mt-6 block text-center border border-blue-300 text-blue-600 py-2 rounded-xl text-sm hover:bg-blue-50 transition"
                      >
                        LinkedIn
                      </a>

                    </div>

                  </Reveal>

                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}