import Reveal from "../ui/Reveal"
import { RiWhatsappFill, RiLinkedinFill, RiInstagramLine, RiArrowRightLine } from "@remixicon/react"

export default function CommunitySection() {

  const platforms = [
    {
      name: "WhatsApp Community",
      handle: "@AllenhouseCommunity",
      members: ">300 Members",
      icon: <RiWhatsappFill />,
      color: "bg-green-500",
      link: "#"
    },
    {
      name: "LinkedIn",
      handle: "@gfg_campusbody_ait",
      members: "<100 Followers",
      icon: <RiLinkedinFill />,
      color: "bg-blue-600",
      link: "#"
    },
    {
      name: "Instagram",
      handle: "@idc.allenhouse",
      members: "<100 Followers",
      icon: <RiInstagramLine />,
      color: "bg-gradient-to-br from-pink-500 to-purple-500",
      link: "#"
    }
  ]

  return (

    <section className="relative bg-[#f5f6f8] py-32 px-6 overflow-hidden">

      {/* FLOATING ELEMENTS */}

      {/* 1 Top-left circle */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-green-300/40 rounded-full animate-float-slow" />

      {/* 2 Left rounded square */}
      <div className="absolute left-36 top-52 w-10 h-10 border border-blue-300/40 rounded-xl rotate-12 animate-float" />

      {/* 3 Center small circle */}
      <div className="absolute top-64 left-1/2 w-10 h-10 border border-yellow-300/40 rounded-full animate-float-mini" />

      {/* 4 Right circle */}
      <div className="absolute right-32 top-80 w-12 h-12 border border-blue-300/40 rounded-full animate-float-slow" />

      {/* 5 Bottom-right square */}
      <div className="absolute right-28 bottom-44 w-10 h-10 border border-yellow-300/40 rounded-xl rotate-12 animate-float" />

      {/* 6 Bottom-right big circle */}
      <div className="absolute right-16 bottom-10 w-28 h-28 border border-green-300/30 rounded-full animate-float-slow" />



      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <Reveal>
          <div className="text-center mb-20">

            <h2 className="text-6xl md:text-7xl font-extrabold">
              JOIN OUR <span className="text-blue-500">COMMUNITY</span>
            </h2>

            <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
              Connect with us on social platforms and be part of the conversation
            </p>

          </div>
        </Reveal>



        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {platforms.map((item, index) => (

            <Reveal key={index} delay={index * 0.1}>

              <a
                href={item.link}
                className="group bg-white rounded-3xl p-8
                flex items-center justify-between
                shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                transition-all duration-500 hover:-translate-y-1"
              >

                {/* LEFT SIDE */}
                <div className="flex items-center gap-6">

                  <div className={`w-14 h-14 ${item.color} text-white flex items-center justify-center rounded-xl text-2xl`}>
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      {item.handle}
                    </p>

                    <p className="text-green-600 mt-2 font-medium">
                      {item.members}
                    </p>

                  </div>

                </div>


                {/* RIGHT ARROW */}
                <RiArrowRightLine className="text-2xl text-gray-400 group-hover:translate-x-1 transition" />

              </a>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}