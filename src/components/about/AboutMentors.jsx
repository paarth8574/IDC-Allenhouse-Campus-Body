import Reveal from "../ui/Reveal"
import krishnaimage from "../../images/Krishna Jha Operations Head.jfif";

export default function MentorsSection() {

  const mentors = [
    {
      name: "Prof. (Dr.) Sudhir Kumar Singh",
      role: "Faculty Advisor",
      dept: "Head of Department - CSE",
      image: krishnaimage
    },
    {
      name: "Dr. Anshuman Tyagi",
      role: "Data Mentor",
      dept: "CSE Department",
      image: "/mentor2.jpg"
    },
    {
      name: "Prof. (Dr.) Arunendra Singh",
      role: "Technical Mentor",
      dept: "CSE Department",
      image: "/mentor3.jpg"
    }
  ]

  return (
    <section className="relative bg-[#f5f6f8] py-28 px-6 overflow-hidden">

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-16 left-12 w-20 h-20 border border-green-400/40 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-400/40 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-yellow-400/40 rounded-lg rotate-12 animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <Reveal>
          <h2 className="text-5xl font-bold">
            OUR <span className="text-blue-500">MENTORS</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="w-32 h-1 bg-gradient-to-r from-[#9374DC] to-blue-500 mx-auto mt-4 mb-6 rounded-full" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-20">
            Experienced mentors supporting and guiding the growth of our data community.
          </p>
        </Reveal>

        {/* Mentor Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {mentors.map((mentor, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div
                className="group relative bg-white rounded-2xl p-8
                           transition-all duration-500
                           hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Hover Small Circles */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-[#9374DC]/20 rounded-full
                                opacity-0 transition-all duration-500
                                group-hover:opacity-100" />

                <div className="absolute bottom-4 right-4 w-6 h-6 bg-blue-400/20 rounded-full
                                opacity-0 transition-all duration-500
                                group-hover:opacity-100" />

                {/* Name */}
                <h3 className="text-2xl font-semibold mb-3 text-gray-900
                               transition-all duration-300
                               group-hover:text-blue-500">
                  {mentor.name}
                </h3>

                {/* Role Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
                  <span className="w-2 h-2 bg-[#9374DC] rounded-full" />
                  <span className="text-[#9374DC] font-medium text-sm">
                    {mentor.role}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{mentor.dept}</p>

                {/* Image Section */}
                <div className="relative h-64 flex items-center justify-center">

                  {/* Background Layer (Depth Effect) */}
                  <div className="absolute w-full h-full bg-green-200/20 rounded-xl
                                  transition-all duration-500
                                  group-hover:rotate-2 group-hover:scale-[1.02]" />

                  {/* Main Image */}
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="relative w-full h-full object-cover rounded-xl
                               transition-all duration-500
                               group-hover:-rotate-2 group-hover:scale-105"
                  />

                  {/* Bottom Right Animated Opacity Circle */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-[#9374DC] rounded-full
                                  animate-slow-pulse" />

                  {/* MENTOR Badge (Straight by default) */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black
                                  px-4 py-1 text-xs font-semibold rounded-full shadow-md
                                  transition-all duration-500
                                  group-hover:-rotate-12">
                    MENTOR
                  </div>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}