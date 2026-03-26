import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import idcLogo from "../images/IDC LOGO 2.png"
import { RiArrowRightLine } from "@remixicon/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // 🔥 NEW — Scroll hide/show states
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // 🔥 NEW — Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll < 50) {
        setShowNav(true) // top pe always visible
      } else if (currentScroll > lastScrollY) {
        setShowNav(false) // scroll down → hide
      } else {
        setShowNav(true) // scroll up → show
      }

      setLastScrollY(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50
      backdrop-blur-md bg-white/70 border-b border-gray-200
      transition-transform duration-300
      ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT — Logo */}
        <div className="flex items-center gap-3">
          <img src={idcLogo} alt="IDC" className="w-10 h-10 object-contain" />
          <div className="leading-tight">
            <h1 className="font-bold text-gray-800">Indian Data Club</h1>
            <p className="text-xs text-gray-500">
              Allenhouse Business School
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-3 bg-gray-100/70 px-3 py-2 rounded-full shadow-inner">
          <NavItem label="Home" to="/" />
          <NavItem label="About" to="/about" />
          <NavItem label="Team" to="/team" />
          <NavItem label="Events" to="/events" />
          <NavItem label="Contact" to="/contact" />
        </nav>

        {/* RIGHT — CTA (Desktop) */}
        <button className="hidden md:flex items-center gap-2 bg-[#9374DC] hover:bg-[#7c5ed3] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md group">
          Community
          <RiArrowRightLine className="text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* HAMBURGER (Mobile) */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4 space-y-3">
          <MobileNavItem label="Home" to="/" setMenuOpen={setMenuOpen} />
          <MobileNavItem label="About" to="/about" setMenuOpen={setMenuOpen} />
          <MobileNavItem label="Team" to="/team" setMenuOpen={setMenuOpen} />
          <MobileNavItem label="Events" to="/events" setMenuOpen={setMenuOpen} />
          <MobileNavItem label="Contact" to="/contact" setMenuOpen={setMenuOpen} />

          <button className="w-full bg-green-500 text-white py-2 rounded-lg mt-3">
            Community →
          </button>
        </div>
      )}
    </header>
  )
}

/* ===== DESKTOP NAV ITEM ===== */

function NavItem({ label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-5 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105
        ${
          isActive
            ? "bg-[#9374DC] text-white shadow"
            : "text-gray-700 hover:bg-white hover:text-[#614c94] shadow-sm"
        }`
      }
    >
      {label}
    </NavLink>
  )
}

/* ===== MOBILE NAV ITEM ===== */

function MobileNavItem({ label, to, setMenuOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setMenuOpen(false)}
      className={({ isActive }) =>
        `block w-full px-4 py-2 rounded-lg font-medium
        ${
          isActive
            ? "bg-green-500 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default Navbar