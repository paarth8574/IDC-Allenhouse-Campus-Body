import { useState } from "react"
import Reveal from "../ui/Reveal"
import {
  RiUserAddLine,
  RiCodeSSlashLine,
  RiShieldLine,
  RiCalendarEventLine,
  RiLightbulbLine,
  RiArrowRightLine
} from "@remixicon/react"

export default function FAQSection() {

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      icon: <RiUserAddLine />,
      question: "How can I join the GFG Campus Club?",
      answer: "Simply Join the Whatsapp Community"
    },
    {
      icon: <RiCodeSSlashLine />,
      question: "What programming languages do you focus on?",
      answer:
        "We cover everything from fundamentals (C/C++) to web development (MERN stack), AI/ML, competitive programming, and emerging technologies like blockchain and cloud computing."
    },
    {
      icon: <RiShieldLine />,
      question: "Are there any membership fees?",
      answer:
        "No. Joining the community is completely free for all students."
    },
    {
      icon: <RiCalendarEventLine />,
      question: "How often do you conduct workshops and events?",
      answer:
        "We regularly organize workshops, coding contests, tech talks, and collaborative events throughout the semester."
    },
    {
      icon: <RiLightbulbLine />,
      question: "Can beginners join the club?",
      answer:
        "Absolutely. Our community is beginner friendly and designed to help students grow step-by-step."
    }
  ]


  return (

    <section className="relative bg-[#f5f6f8] py-32 px-6 overflow-hidden">

      {/* FLOATING ELEMENTS */}

      <div className="absolute top-16 left-10 w-8 h-8 border border-green-300/40 rounded-full animate-float-slow" />

      <div className="absolute left-40 top-56 w-10 h-10 border border-blue-300/40 rounded-xl rotate-12 animate-float" />

      <div className="absolute right-1/3 top-80 w-12 h-12 border border-blue-300/40 rounded-full animate-float-mini" />

      <div className="absolute right-24 bottom-52 w-10 h-10 border border-yellow-300/40 rounded-xl rotate-12 animate-float" />

      <div className="absolute right-16 bottom-16 w-28 h-28 border border-green-300/30 rounded-full animate-float-slow" />



      <div className="max-w-4xl mx-auto">

        {/* HEADING */}
        <Reveal>
          <div className="text-center mb-20">

            <h2 className="text-6xl md:text-7xl font-extrabold">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
              Everything you need to know about joining our tech community
            </p>

          </div>
        </Reveal>



        {/* FAQ LIST */}
        <div className="space-y-6">

          {faqs.map((faq, index) => {

            const isOpen = activeIndex === index

            return (

              <Reveal key={index} delay={index * 0.1}>

                <div className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden">

                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="group w-full px-8 py-6 flex items-center justify-between"
                  >

                    <div className="flex items-center gap-6">

                      <div className="w-12 h-12 bg-[#9374DC]/10 text-[#9374DC] flex items-center justify-center rounded-xl text-xl">
                        {faq.icon}
                      </div>

                      <p className="text-lg md:text-xl font-medium text-left">
                        {faq.question}
                      </p>

                    </div>


                    {/* ARROW */}
                    <RiArrowRightLine
                      className={`text-2xl transition-all duration-300
                      ${isOpen ? "rotate-90 text-[#9374DC]" : ""}
                      group-hover:translate-x-1`}
                    />

                  </button>


                  {/* ANSWER */}
                  <div
  className={`grid transition-all duration-500 ease-in-out
  ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
>

  <div className="overflow-hidden">

    <div className="px-8 pb-6">

      <div className="bg-gray-100 rounded-xl px-6 py-4 border-l-4 border-[#9374DC] text-gray-700 leading-relaxed">

        {faq.answer}

      </div>

    </div>

  </div>

</div>


                </div>

              </Reveal>

            )

          })}

        </div>

      </div>

    </section>
  )
}