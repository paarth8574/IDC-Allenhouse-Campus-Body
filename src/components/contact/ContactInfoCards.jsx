import Reveal from "../ui/Reveal"
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiTimeLine } from "@remixicon/react"

export default function ContactInfoSection() {

  const cards = [
    {
      title: "Email Us",
      value: "krishnajha8574@gmail.com",
      sub: "We respond within 24 hours",
      icon: <RiMailLine />,
      color: "bg-[#9374DC]"
    },
    {
      title: "Call Us",
      value: "+91 8574136162",
      sub: "Outreach Head",
      icon: <RiPhoneLine />,
      color: "bg-blue-500"
    },
    {
      title: "Visit Us",
      value: "Allenhouse Business School",
      sub: "Rooma, Kanpur",
      icon: <RiMapPinLine />,
      color: "bg-yellow-500"
    },
    {
      title: "Club Hours",
      value: "Monday - Friday",
      sub: "10:00 AM - 4:00 PM",
      icon: <RiTimeLine />,
      color: "bg-green-700"
    }
  ]


  return (

    <section className="relative bg-[#f5f6f8] py-32 px-6 overflow-hidden">

      {/* FLOATING ELEMENTS */}

      {/* rounded square */}
      <div className="absolute left-20 top-28 w-20 h-20 border border-green-300/90 rounded-xl rotate-12 animate-float-mini" />

      {/* triangle */}
      <div className="absolute right-32 top-40 w-0 h-0 
      border-l-[50px] border-l-transparent
      border-r-[50px] border-r-transparent
      border-b-[70px] border-b-green-300/10
      animate-float" />

      {/* circle */}
      <div className="absolute left-[45%] top-52 w-12 h-12 border border-yellow-300/30 rounded-full animate-float-slow" />


      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <Reveal>
          <div className="text-center mb-20">

            <h2 className="text-6xl md:text-7xl font-extrabold">
              GET IN <span className="text-[#9374DC]">TOUCH</span>
            </h2>

            <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
              Multiple ways to connect with our vibrant tech community
            </p>

          </div>
        </Reveal>


        {/* CARDS GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {cards.map((card, index) => (

            <Reveal key={index} delay={index * 0.1}>

              <div
                className="bg-white
                rounded-3xl
                h-[260px]
                p-10
                flex flex-col items-center justify-center text-center
                shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                transition-all duration-500
                hover:-translate-y-2"
              >

                {/* ICON */}
                <div
                  className={`w-16 h-16 mb-6
                  ${card.color}
                  text-white
                  flex items-center justify-center
                  rounded-2xl text-2xl`}
                >
                  {card.icon}
                </div>


                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3">
                  {card.title}
                </h3>


                {/* VALUE */}
                <p className="font-medium text-gray-800 leading-snug">
                  {card.value}
                </p>


                {/* SUBTEXT */}
                <p className="text-gray-500 mt-2 text-sm">
                  {card.sub}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  )
}