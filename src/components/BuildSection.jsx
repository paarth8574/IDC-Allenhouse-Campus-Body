import { useEffect } from "react"

function BuildSection() {

  const items = [
    { icon: "📊", title: "Data Analytics", desc: "Learn how to analyze real-world data using Excel, SQL, Python, and modern analytics tools." },
    { icon: "🧠", title: "Workshops & Bootcamps", desc: "Hands-on sessions on Data Analytics, AI, Power BI, Python, and emerging technologies." },
    { icon: "💻", title: "Data Projects", desc: "Collaborate with fellow members to build real-world data projects and case studies." },
    { icon: "🏆", title: "Hackathons & Challenges", desc: "Participate in exciting hackathons and solve real-world problems using data." },
    { icon: "🚀", title: "Career Guidance", desc: "Get mentorship, portfolio guidance, and insights to start your journey in the data industry." },
    { icon: "🤝", title: "Community & Networking", desc: "Connect with data enthusiasts, professionals, and mentors from across the community." }
  ]

  // 🔥 REPEAT SCROLL REVEAL
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          } else {
            entry.target.classList.remove("active")
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-gray-50">

      {/* TITLE */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-6 reveal">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          What We <span className="text-[#9374DC]">Build</span>
        </h2>

        <div className="w-16 h-1 bg-[#9374DC] mx-auto my-4 rounded" />

        <p className="text-gray-600 text-lg">
          Building the future of — <span className="font-semibold">data</span> together.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {items.map((item, index) => (
          <div
  key={index}
  className="reveal relative bg-white rounded-2xl p-8 shadow-md
             transition-shadow duration-300 hover:shadow-2xl overflow-hidden"
  style={{
    transformStyle: "preserve-3d",
    perspective: "1000px",
    transition: "transform 0.12s ease-out"
  }}
  onMouseMove={(e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const percentX = x / rect.width - 0.5
    const percentY = y / rect.height - 0.5

    const rotateY = percentX * 18
    const rotateX = percentY * -18

    el.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `

    // 🌈 Soft internal purple glow
    el.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(147,116,220,0.18),
        white 60%
      )
    `
  }}
  onMouseLeave={(e) => {
    const el = e.currentTarget
    el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"
    el.style.background = "white"
  }}
>
  <div className="text-4xl mb-4">{item.icon}</div>

  <h3 className="text-xl font-bold text-gray-900 mb-2">
    {item.title}
  </h3>

  <p className="text-gray-600 leading-relaxed">
    {item.desc}
  </p>
</div>
        ))}

      </div>

    </section>
  )
}

export default BuildSection