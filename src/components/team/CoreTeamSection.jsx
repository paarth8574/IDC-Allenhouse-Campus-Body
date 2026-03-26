import Reveal from "../ui/Reveal"
import TeamMemberCard from "./TeamMemberCard"

import krishnaimage from "../../images/Krishna Jha Operations Head.jfif";
export default function CoreTeamSection() {

  const members = [
  
      {
        name: "Vanshika Singh Parihar",
        role: "Vice President",
        department: "Bachelor of Computer Application",
        expertise: "Full Stack Development",
        batch: "2023–2026",
        image: krishnaimage,
        linkedin:"https://linkedin.com/in/prakhar",
        instagram:"https://instagram.com/prakhar"
      },
  
      {
        name: "Krishna Jha",
        role: "Secretary",
        department: "Bachelor of Computer Application",
        expertise: "Project Management",
        batch: "2024–2027",
        image: krishnaimage,
        linkedin:"https://linkedin.com/in/prakhar",
        instagram:"https://instagram.com/prakhar"
      },
  
      {
        name: "Tanmay Yadav",
        role: "Webmaster",
        department: "Bachelor of Computer Application",
        expertise: "Community Building",
        batch: "2024–2027",
        image: krishnaimage,
        linkedin:"https://linkedin.com/in/prakhar",
        instagram:"https://instagram.com/prakhar"
      },
  
      {
        name: "Ayush Tiwari",
        role: "Event Co-ordinator",
        department: "Bachelor of Computer Application",
        expertise: "Digital Marketing",
        batch: "2024–2027",
        image: krishnaimage,
        linkedin:"https://linkedin.com/in/prakhar",
        instagram:"https://instagram.com/prakhar"
      },
  
      {
        name: "Vanshika Yadav",
        role: "Tresurer",
        department: "Bachelor of Computer Application",
        expertise: "Operations Management",
        batch: "2024–2027",
        image: krishnaimage,
        linkedin:"https://linkedin.com/in/prakhar",
        instagram:"https://instagram.com/prakhar"
      }
  
    ]


  return (

    <section className="bg-[#f5f6f8] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <Reveal>
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold">
              CORE <span className="text-green-600">TEAM</span>
            </h2>

            <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"/>

            <p className="mt-4 text-gray-500">
              The architects behind our technological excellence
            </p>

          </div>
        </Reveal>


        <div className="grid md:grid-cols-2 gap-10">

          {members.map((member, index) => (

  <Reveal key={index} delay={index * 0.1}>

    <TeamMemberCard
    image={member.image}
    name={member.name}
    role={member.role}
    department={member.department}
    expertise={member.expertise}
    batch={member.batch}
    linkedin={member.linkedin}
    instagram={member.instagram}
    />

  </Reveal>

))}

        </div>

      </div>

    </section>
  )
}