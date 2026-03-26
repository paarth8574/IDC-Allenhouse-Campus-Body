import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <Navbar />

      {/* Page content yaha change hoga */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout