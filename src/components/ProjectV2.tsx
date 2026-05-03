import { projects } from '../utils/constant'
import SectionTitle from './SectionTitle'
import { useState } from 'react'
import BlurredModal from './BlurredModal'

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16" id="section2">
      <SectionTitle title="Featured Projects" />
      <div className="max-w-8xl mx-auto bg-[#151B54] rounded-3xl p-6 md:p-10 space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="bg-myshade rounded-2xl p-5 md:p-6 border border-white/10">
              <h3 className="text-lg md:text-xl font-semibold text-mynavy mb-3">{project.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] md:h-[300px] lg:h-[320px] object-cover cursor-pointer"
                loading="lazy"
                onClick={() => setSelectedImage(project.image)}
              />
            </div>
          </div>
        ))}
        <BlurredModal selectedImage={selectedImage} setImage={setSelectedImage} />
      </div>
    </section>
  )
}
