import { RiArrowUpLine,RiInstagramLine,RiWhatsappFill,RiLinkedinFill, } from "@remixicon/react";
import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-gray-300 pt-16 pb-8">

      {/* ===== TOP ===== */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT — BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl text-[#9374DC] font-bold">IDC</span>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Allenhouse Student Chapter
              </h3>
              <p className="text-sm text-gray-400">
                Allenhouse Institute of Technology
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-md">
            Empowering students with cutting-edge technology skills
            and building the next generation of tech leaders.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">

        {/* NAVIGATION */}
        <div>
        <h4 className="text-white font-semibold mb-4">
            Navigation
        </h4>

        {/* MENUS — HORIZONTAL */}
        <div className="flex flex-wrap gap-6">

            <Link to="/" className="hover:text-[#9374DC] transition">
            Home
            </Link>

            <Link to="/about" className="hover:text-[#9374DC] transition">
            About
            </Link>

            <Link to="/team" className="hover:text-[#9374DC] transition">
            Team
            </Link>

            <Link to="/events" className="hover:text-[#9374DC] transition">
            Events
            </Link>

            <Link to="/contact" className="hover:text-[#9374DC] transition">
            Contact
            </Link>

        </div>
        </div>

          {/* FOLLOW US */}
<div>
  <h4 className="text-white font-semibold mb-4">
    Follow Us
  </h4>

  {/* ICONS — HORIZONTAL */}
  <div className="flex gap-4 mt-4">

  {/* WhatsApp */}
  <a
    href="#"
    className="
      w-11 h-11 flex items-center justify-center
      rounded-lg bg-[#0b1220]
      text-gray-400
      transition-all duration-300
      hover:text-[#25D366] hover:scale-110
    "
  >
    <RiWhatsappFill size={20} />
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    className="
      w-11 h-11 flex items-center justify-center
      rounded-lg bg-[#0b1220]
      text-gray-400
      transition-all duration-300
      hover:text-[#0A66C2] hover:scale-110
    "
  >
    <RiLinkedinFill size={20} />
  </a>

  {/* Instagram */}
  <a
    href="#"
    className="
      w-11 h-11 flex items-center justify-center
      rounded-lg bg-[#0b1220]
      text-gray-400
      transition-all duration-300
      hover:text-[#E4405F] hover:scale-110
    "
  >
    <RiInstagramLine size={20} />
  </a>

</div>
</div>

        </div>

      </div>

      {/* ===== DIVIDER ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <div className="h-[1px] bg-white/10" />
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

        <p className="flex items-center gap-2">
          Made with
          <HeartIcon />
          by Mr. Krishna Jha
        </p>

        <p className="text-gray-500">
          © 2025 Krishna Jha. All rights reserved.
        </p>

      </div>

      {/* ===== SCROLL TO TOP ===== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
            fixed z-50
            bottom-6 right-6 md:bottom-8 md:right-8
            w-14 h-14 rounded-full
            bg-[#9374DC] text-white text-xl
            shadow-2xl
            flex items-center justify-center
            hover:bg-[#9374DC]/90 hover:scale-110
            transition-all duration-300
        "
        >
        <RiArrowUpLine size={24} />
        </button>

    </footer>
  )
}

export default Footer




/* ===== ANIMATED OUTLINE HEART ===== */

function HeartIcon() {
  return (
    <svg
      className="w-5 h-5 stroke-[#9374DC] animate-heart"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.84 4.61c-1.54-1.34-3.88-1.11-5.28.53L12 9.09l-3.56-3.95C6.99 3.5 4.65 3.27 3.11 4.61c-1.74 1.51-1.86 4.2-.27 5.86L12 21l9.16-10.53c1.59-1.66 1.47-4.35-.32-5.86z"
      />
    </svg>
  )
}