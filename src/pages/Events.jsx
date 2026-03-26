// pages/EventsPage.jsx

import EventsHero from "../components/events/EventsHero";
import LatestEvent from "../components/events/LatestEvent";
import EventsCTA from "../components/events/EventsCTA";

// Future use
// import PastEvents from "../components/events/PastEvents";

export default function EventsPage() {
  return (
    <div className="bg-[#f5f6f8] min-h-screen">

      {/* 🔥 HERO */}
      <EventsHero />

      {/* 🔥 LATEST EVENT */}
      <LatestEvent />

      {/* 🔒 FUTURE SECTION (Disabled for now) */}
      {/*
        <PastEvents />
      */}

      {/* 🔥 CTA */}
      <EventsCTA />

    </div>
  );
}