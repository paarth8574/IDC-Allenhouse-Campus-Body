import { RiGraduationCapFill, RiFlashlightFill } from "@remixicon/react"
import { RiLinkedinFill, RiInstagramLine } from "@remixicon/react"

export default function TeamMemberCard({
  image,
  name,
  role,
  department,
  expertise,
  batch,
  linkedin,
  instagram
}) {

  return (

    <div className="group relative 
      bg-white
      rounded-3xl
      p-6 md:p-8
      grid grid-cols-[110px_1fr] gap-6 items-center
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      transition-all duration-500
      hover:shadow-[0_35px_80px_rgba(0,0,0,0.12)]
      hover:scale-[1.02]">

      {/* TOP GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-1 
      bg-gradient-to-r from-[#9374DC] to-blue-500 rounded-t-3xl" />


      {/* IMAGE SECTION */}
      <div className="relative flex justify-center">

        {/* BACK LAYER */}
        <div className="absolute w-24 h-32
          bg-gradient-to-br from-[#af8dff] to-green-100
          rounded-2xl 
          rotate-6
          transition-all duration-500
          group-hover:-rotate-3
          group-hover:scale-105" />

        {/* MAIN IMAGE */}
        <div className="relative w-24 h-32
          bg-white
          rounded-xl 
          overflow-hidden
          shadow-lg
          transition-all duration-500
          group-hover:-rotate-2
          group-hover:shadow-2xl">

          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />

        </div>
      </div>


      {/* INFO SECTION */}
      <div>

        {/* NAME + ROLE */}
        <div className="flex justify-between items-start mb-4">

          <div>
            <h3 className="text-lg md:text-xl font-bold">
              {name}
            </h3>

            <div className="flex items-center gap-2 text-[#9374DC] text-sm mt-1">
              <span className="w-2 h-2 bg-[#9374DC] rounded-full animate-solid-pulse"/>
              {role}
            </div>
          </div>

          <div className="bg-black text-white text-xs px-3 py-1 rounded-lg">
            {batch}
          </div>

        </div>


        {/* INFO BOXES */}
        <div className="space-y-3 mb-4">

          <div className="flex items-center gap-3 
            bg-gray-50
            rounded-xl p-3
            transition-all duration-500
            group-hover:translate-x-3
            group-hover:bg-gray-100">

            <RiGraduationCapFill className="text-gray-600"/>

            <div>
              <p className="text-xs text-gray-500">
                Department
              </p>

              <p className="text-sm font-medium">
                {department}
              </p>
            </div>

          </div>


          <div className="flex items-center gap-3 
            bg-gray-50
            rounded-xl p-3
            transition-all duration-500
            group-hover:translate-x-3
            group-hover:bg-gray-100">

            <RiFlashlightFill className="text-yellow-500"/>

            <div>
              <p className="text-xs text-gray-500">
                Expertise
              </p>

              <p className="text-sm font-medium">
                {expertise}
              </p>
            </div>

          </div>

        </div>


        {/* SOCIAL */}
        <div className="flex gap-4">

        <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 hover:text-[#0A66C2]"
        >
            <RiLinkedinFill />
        </a>

        <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-600 hover:text-pink-500"
        >
            <RiInstagramLine />
        </a>

        </div>

      </div>

    </div>

  )
}