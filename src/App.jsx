import { useEffect, useState } from 'react'
import { ArrowRight, Calendar, Mail, MapPin, Menu, Moon, Sun } from 'lucide-react'

const team = [
  {
    name: 'Aarav Sharma',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Isha Verma',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Rohan Gupta',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ananya Singh',
    role: 'Community Head',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
]

const events = [
  {
    title: 'Data Visualization Sprint',
    date: 'March 15, 2026',
    description: 'Create compelling dashboards and communicate insights that influence decisions.',
  },
  {
    title: 'AI in Business Workshop',
    date: 'April 10, 2026',
    description: 'Hands-on session on practical ML workflows for real-world business challenges.',
  },
  {
    title: 'Campus Datathon',
    date: 'May 03, 2026',
    description: 'Collaborate in teams to solve social and business problems with data.',
  },
]

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const navLinks = ['Home', 'About', 'Team', 'Events', 'Resources', 'Join Us', 'Contact']

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#home" className="font-semibold tracking-wide">Indian Data Club</a>
          <nav className="hidden gap-6 md:flex">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-300">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode((v) => !v)}
              className="rounded-full border border-slate-300 p-2 dark:border-slate-700"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="rounded-full border border-slate-300 p-2 md:hidden dark:border-slate-700" onClick={() => setMobileOpen((v) => !v)}>
              <Menu size={18} />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="space-y-2 border-t border-slate-200 px-4 py-4 md:hidden dark:border-slate-800">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm text-slate-600 dark:text-slate-300"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-4 pb-20 pt-24 md:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="space-y-6 animate-appear">
              <p className="inline-flex rounded-full border border-brand-500/30 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:bg-brand-500/10 dark:text-brand-50">
                Allenhouse Business School
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Indian Data Club – Allenhouse Campus Body
              </h1>
              <p className="text-slate-600 dark:text-slate-300">
                Building a future-ready community of analysts, innovators, and leaders through collaborative learning, projects, and events.
              </p>
              <a href="#join-us" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700">
                Join the Community <ArrowRight size={16} />
              </a>
            </div>
            <div className="animate-float rounded-3xl border border-slate-200/70 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating with laptops"
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <h2 className="section-title">About Us</h2>
          <p className="mt-6 max-w-3xl text-slate-600 dark:text-slate-300">
            The Indian Data Club campus body at Allenhouse Business School empowers students with practical data skills through workshops, challenges, mentorship, and industry-focused initiatives.
          </p>
        </section>

        <section id="team" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <article key={member.name} className="card" style={{ animationDelay: `${i * 90}ms` }}>
                <img src={member.image} alt={member.name} className="h-52 w-full rounded-xl object-cover" />
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-brand-600 dark:text-brand-400">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="events" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="card">
                <div className="mb-4 inline-flex rounded-lg bg-brand-50 p-2 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                  <Calendar size={16} />
                </div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{event.date}</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{event.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="resources" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <h2 className="section-title">Resources</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Learning Roadmaps', 'GitHub Projects', 'Recorded Sessions', 'Datasets & Tools', 'Mock Interview Prep', 'Career Guidance'].map((item) => (
              <div key={item} className="card p-5 text-sm font-medium">{item}</div>
            ))}
          </div>
        </section>

        <section id="join-us" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <h2 className="section-title">Join Us</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Register to become part of our data-driven community.</p>
          <form className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:grid-cols-2">
            <input type="text" placeholder="Full Name" className="rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2 dark:border-slate-600" required />
            <input type="email" placeholder="Email Address" className="rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2 dark:border-slate-600" required />
            <input type="text" placeholder="Course / Year" className="rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2 dark:border-slate-600" />
            <input type="text" placeholder="Areas of Interest" className="rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2 dark:border-slate-600" />
            <textarea placeholder="Why do you want to join?" className="md:col-span-2 min-h-28 rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2 dark:border-slate-600" />
            <button type="submit" className="md:col-span-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              Submit Registration
            </button>
          </form>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <h2 className="section-title">Contact</h2>
          <div className="mt-6 grid gap-4 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
            <p className="inline-flex items-center gap-2"><Mail size={16} /> idc.allenhouse@college.edu</p>
            <p className="inline-flex items-center gap-2"><MapPin size={16} /> Allenhouse Business School Campus</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-4 py-8 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Indian Data Club – Allenhouse Campus Body</p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-600">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-600">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-brand-600">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
