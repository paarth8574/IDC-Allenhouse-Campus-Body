import { useEffect, useRef, useState } from "react"

function ImpactSection() {
const stats = [
{
icon: "👥",
number: 300,
suffix: "+",
title: "Community Members",
desc: "Students and data enthusiasts actively learning and collaborating in our community.",
color: "green"
},
{
icon: "📜",
number: 120,
suffix: "+",
title: "Workshop Participants",
desc: "Students trained through hands-on workshops on Data Analytics, AI, and modern tools.",
color: "blue"
},
{
icon: "🎯",
number: 43,
suffix: "",
title: "Mentorship Sessions",
desc: "Guidance from experienced professionals and mentors from the data industry.",
color: "yellow"
}
]

return ( <section className="relative py-28 bg-[#0f1115] text-white overflow-hidden">

  {/* TITLE — RE-REVEAL */}
  <Reveal delay={0}>
    <div className="text-center max-w-3xl mx-auto px-6 mb-20">
      <h2 className="text-5xl md:text-6xl font-extrabold">
        OUR <span className="text-[#9374DC]">IDC </span> IMPACT
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-[#9374DC] to-blue-500 mx-auto mt-6 rounded" />

      <p className="text-gray-300 mt-6 text-lg">
        Growing a vibrant community of data enthusiasts through learning, collaboration, and innovation.
      </p>
    </div>
  </Reveal>

  {/* CARDS */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
    {stats.map((item, i) => (
      <StatCard key={i} {...item} delay={i * 150} />
    ))}
  </div>

  <p className="text-center text-gray-400 mt-16 text-lg">
    ✨ The IDC community is growing stronger every day.
  </p>

</section>

)
}

export default ImpactSection

/* ================= REVEAL WRAPPER ================= */

function Reveal({ children, delay = 0 }) {
const ref = useRef(null)
const [visible, setVisible] = useState(false)

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => setVisible(entry.isIntersecting),
{ threshold: 0.3 }
)

if (ref.current) observer.observe(ref.current)

return () => observer.disconnect()

}, [])

return (
<div
ref={ref}
style={{
transform: visible ? "translateY(0)" : "translateY(80px)",
opacity: visible ? 1 : 0,
transition: `all 900ms cubic-bezier(.22,1,.36,1) ${delay}ms`
}}
>
{children} </div>
)
}

/* ================= CARD ================= */

function StatCard({ icon, number, suffix, title, desc, color, delay }) {

    

const [count, setCount] = useState(0)
const [visible, setVisible] = useState(false)
const ref = useRef(null)

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {

    if (entry.isIntersecting) {
      setVisible(true)

      let start = 0
      setCount(0)

      const duration = 1500
      const step = number / (duration / 16)

      const timer = setInterval(() => {
        start += step
        if (start >= number) {
          start = number
          clearInterval(timer)
        }
        setCount(Math.floor(start))
      }, 16)

    } else {
      setVisible(false)
    }
  },
  { threshold: 0.5 }
)

if (ref.current) observer.observe(ref.current)

return () => observer.disconnect()

}, [number])

const colors = {
green: "bg-[#9374DC]",
blue: "bg-blue-500",
yellow: "bg-yellow-500"
}

return (
<div
  ref={ref}
  className={`
    group relative overflow-visible
    p-10 rounded-2xl
    bg-white/5 backdrop-blur-md
    border border-white/10
    
    transition-all duration-500 ease-out
    will-change-transform
    
    ${visible
      ? "translate-y-0 opacity-100 scale-100"
      : "translate-y-20 opacity-0 scale-95"
    }

    hover:scale-[1.06]
    hover:-translate-y-2
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)]
  `}
  style={{
    transitionDelay: `${delay}ms`
  }}
>
{/* ⭐ FLOATING CORNER BUBBLES — REAL CIRCLES */}
<div className="pointer-events-none absolute inset-0">

  {/* TOP LEFT */}
  <span
    className="
      absolute -top-4 -left-4
      w-4 h-4 rounded-full
      bg-[#9374DC]
      shadow-[0_0_12px_rgba(34,197,94,0.9)]
      opacity-0 scale-0
      group-hover:opacity-100 group-hover:scale-100
      transition-all duration-500
    "
  />

  {/* TOP RIGHT */}
  <span
    className="
      absolute -top-5 -right-5
      w-6 h-6 rounded-full
      bg-[#9374DC]
      shadow-[0_0_18px_rgba(34,197,94,0.9)]
      opacity-0 scale-0
      group-hover:opacity-100 group-hover:scale-100
      transition-all duration-500 delay-75
    "
  />

  {/* BOTTOM RIGHT */}
  <span
    className="
      absolute -bottom-5 -right-4
      w-5 h-5 rounded-full
      bg-[#9374DC]
      shadow-[0_0_16px_rgba(34,197,94,0.9)]
      opacity-0 scale-0
      group-hover:opacity-100 group-hover:scale-100
      transition-all duration-500 delay-150
    "
  />

</div>

  {/* ICON */}
  <div className="text-5xl mb-6 text-center">{icon}</div>

  {/* NUMBER */}
  <h3 className="text-5xl font-extrabold text-center">
    {count}
    <span className="text-green-400">{suffix}</span>
  </h3>

  {/* TITLE */}
  <h4 className="text-xl font-semibold mt-4 text-center">
    {title}
  </h4>

  {/* DESC */}
  <p className="text-gray-400 text-center mt-2">
    {desc}
  </p>

  {/* 🔥 LINE INSIDE CARD */}
  <div className="absolute bottom-4 left-6 right-6 h-[3px] bg-white/10 rounded-full overflow-hidden">
    <div
      className={`h-full ${colors[color]}`}
      style={{
        width: visible ? "100%" : "0%",
        transition: `width 900ms ease ${delay + 200}ms`
      }}
    />
  </div>

</div>

)
}
