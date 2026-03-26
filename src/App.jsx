import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import EventDetail from "./pages/EventDetail"
import HackathonWinners from "./pages/HackathonWinners"
import Home from "./pages/Home"
import Team from "./pages/Team"
import About from "./pages/About"
import Events from "./pages/Events"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

function App() {

  // 🔥 LENIS SMOOTH SCROLL SETUP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,              // smoothness (increase = smoother)
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // cleanup
    return () => lenis.destroy()
  }, [])

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="events" element={<Events />} />
          <Route path="events/hackathon-2.0" element={<EventDetail />} />
          <Route path="events/hackathon-2.0/winners" element={<HackathonWinners />} />
          <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App