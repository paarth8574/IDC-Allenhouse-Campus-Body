import Reveal from "../ui/Reveal";

export default function EventsHero() {
  return (
    <section className="relative bg-[#f5f6f8] pt-20 md:pt-28 pb-8 md:pb-10 px-4 sm:px-6 overflow-hidden">

      {/* 🔥 FLOATING ELEMENTS (Responsive Controlled) */}

      {/* circle */}
      <div className="hidden sm:block absolute top-20 left-6 md:left-10 w-8 h-8 md:w-10 md:h-10 border border-green-300/70 rounded-full animate-float-slow" />

      {/* square */}
      <div className="hidden sm:block absolute left-16 md:left-40 top-40 md:top-60 w-10 h-10 md:w-12 md:h-12 border border-blue-300/70 rounded-xl rotate-12 animate-float" />

      {/* small circle */}
      <div className="hidden sm:block absolute right-16 md:right-32 top-16 md:top-28 w-6 h-6 md:w-8 md:h-8 border border-yellow-300/70 rounded-full animate-float-mini" />

      {/* square bottom */}
      <div className="hidden md:block absolute right-10 md:right-20 bottom-16 md:bottom-20 w-10 h-10 md:w-12 md:h-12 border border-green-300/70 rounded-xl rotate-12 animate-float" />

      {/* big circle */}
      <div className="hidden md:block absolute left-1/2 bottom-6 md:bottom-10 w-16 h-16 md:w-24 md:h-24 border border-green-300/70 rounded-full animate-float-slow" />


      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <Reveal>
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl
            font-extrabold text-black tracking-tight
          ">
            EVENTS
          </h1>
        </Reveal>

        {/* UNDERLINE */}
        <Reveal delay={0.1}>
          <div className="w-14 md:w-20 h-1 bg-[#9374DC] mx-auto mt-4 md:mt-5 rounded-full" />
        </Reveal>

        {/* DESCRIPTION */}
        <Reveal delay={0.2}>
          <p className="
            mt-5 md:mt-8
            text-base sm:text-lg md:text-xl lg:text-2xl
            text-gray-600
            max-w-xl md:max-w-3xl mx-auto
            leading-relaxed
          ">
            Experience unforgettable moments that transform ideas into reality
            and dreams into innovations.
          </p>
        </Reveal>

      </div>
    </section>
  );
}