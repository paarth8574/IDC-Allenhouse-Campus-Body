import Reveal from "../ui/Reveal"

export default function FinalCTASection() {

  return (

    <section className="relative bg-[#f5f6f8] py-28 px-6 overflow-hidden">

      {/* FLOATING ELEMENTS */}

      {/* small circle */}
      <div className="absolute left-32 bottom-16 w-10 h-10 border border-yellow-300/40 rounded-full animate-float-mini" />

      {/* rounded square */}
      <div className="absolute left-20 top-40 w-10 h-10 border border-blue-300/40 rounded-xl rotate-12 animate-float" />

      {/* center circle */}
      <div className="absolute right-36 bottom-10 w-12 h-12 border border-green-300/30 rounded-full animate-float-slow" />


      <div className="max-w-4xl mx-auto">

        <Reveal>

          <div
            className="
            bg-white
            rounded-3xl
            py-16 px-10
            text-center
            shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            "
          >

            {/* HEADING */}
            <h3 className="text-2xl md:text-3xl font-semibold">
              Still Have Questions?
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
              Our team is here to help you get started on your tech journey
            </p>


            {/* BUTTON */}
            <button
              className="
              mt-8
              px-8 py-3
              border-2 border-[#9374DC]
              text-[#9374DC]
              rounded-xl
              font-medium
              transition-all duration-300
              hover:bg-[#9374DC] hover:text-white
              "
            >
              Join Community
            </button>

          </div>

        </Reveal>

      </div>

    </section>

  )

}