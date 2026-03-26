import EventHero from "../components/events/details/EventHero"
import EventStats from "../components/events/details/EventStats"
import EventAbout from "../components/events/details/EventAbout"
import EventCTA from "../components/events/details/EventCTA"
import EventTimeline from "../components/events/details/EventTimeline"

export default function EventDetail() {
  return (
    <div className="bg-[#f5f6f8] min-h-screen">
      <EventHero />
      <EventStats />
      <EventAbout />
      <EventTimeline/>
      <EventCTA />
    </div>
  )
}