import gsap from 'gsap'
import { useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import CustomModal from './CustomModal'
import { RiExternalLinkFill } from 'react-icons/ri'
import { useDisclosure } from '@nextui-org/react'

const Project = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState('opaque')
  const [size, setSize] = React.useState('md')

  const { isOpen: isOpenSecondModal, onOpen: onOpenSecondModal, onClose: onCloseSecondModal } = useDisclosure()

  const [secondModalBackdrop, setSecondModalBackdrop] = React.useState('opaque')

  const [secondModalSize, setSecondModalSize] = React.useState('md')

  const backdrops = ['blur']

  const handleOpen = backdrop => {
    setBackdrop(backdrop)
    setSize('5xl')
    onOpen()
  }

  const handleOpenSecondModal = backdrop => {
    setSecondModalBackdrop(backdrop)
    setSecondModalSize('5xl')
    onOpenSecondModal()
  }

  const modalData = [
    {
      title: 'Travelxism',
      content: 'Lorem ',
      images: ['travelxism.png', '/t1.png', '/t2.png', '/t3.png', '/t4.png', '/t5.png', '/t6.png', '/t7.png'],
    },
    {
      title: 'FunRobo',
      content: 'Another set of content...',
      images: ['/funrobo.jpeg', '/f1.jpeg', '/f2.jpeg', '/f3.jpeg', '/f4.jpeg', '/f5.jpeg'],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const element: any = document.querySelector('.line-transition')

      if (scrollPosition > element.offsetTop - windowHeight / 2) {
        gsap.fromTo(
          '.line-transition',
          {
            ease: 'none',
            y: -50,
            opacity: 0,
          },
          {
            delay: 0.5,
            y: 0,
            opacity: 1,
            duration: 1,
          }
        )
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="section2" className="h-auto w-full  bg-[#F5F5F5] justify-center  relative overflow-hidden">
      <div className="  w-full pt-20 flex gap-4 justify-center items-center ">
        <div className="w-3/12 lg:h-[4px] h-[2px] bg-red-700 "></div>
        <h2 className=" line-transition lg:text-5xl text-xl w-auto text-red-500 z-10">Highlighted Project</h2>
        <div className=" w-3/12 lg:h-[4px] h-[2px] bg-red-700 "></div>
      </div>
      {/* Project */}
      <div className=" w-auto h-full lg:m-[3rem] m-4 border-[2px] border-red-700 rounded-lg flex flex-col gap-4 relative ">
        <CustomModal backdrop={backdrop} size={size} isOpen={isOpen} onClose={onClose} data={modalData[0]} />

        <div className="w-full h-full flex flex-col lg:gap-6 gap-4 lg:p-8 p-4  justify-center items-center ">
          <div>
            {/* Geoservice Map */}
            <div className="py-4">
              <a
                className="lg:text-3xl text-xl text-red-500  transition duration-300 ease-in-out hover:text-red-800 flex gap-4"
                href="https://skripsi-web.vercel.app/"
                target="_blank"
              >
                * Geoservice Map
              </a>
              <h2 className="py-4 text-justify">
                in the Geoservice project, I contributed to integrating dynamic maps that can be used in iframes such as
                googlemaps. then, I also contributed to creating dashboards to support data management and also data
                calculations with complex filters such as in analytics.
              </h2>
              <div className="flex lg:flex-row flex-col gap-4">
                <div>
                  <Image
                    className="lg:h-[300px] h-[200px] lg:min-w-[600px] w-full rounded-lg"
                    src="/geoservice.png"
                    width={600}
                    height={400}
                    alt="Picture of the author"
                  />
                  <p className="font-bold text-xs text-center pt-2">No detail available</p>
                </div>
                <ul className="list-disc ps-4">
                  <li>
                    Integrated OpenStreetMap and Google Maps to create a dynamic map feature that can be used by
                    tenants.
                  </li>
                  <li>Created analytics features complete with a variety of charts and data filtering</li>
                  <li>Implemented user interface design and integrated APIs for the features.</li>
                  <li>Developed a Content Management System (CMS).</li>
                </ul>
              </div>
            </div>

            {/* Track It */}
            <div className="py-4">
              <a
                className="lg:text-3xl text-xl text-red-500  transition duration-300 ease-in-out hover:text-red-800 flex gap-4"
                href="https://skripsi-web.vercel.app/"
                target="_blank"
              >
                * Track It
              </a>
              <h2 className="py-4 text-justify">
                in the Track It project, I contributed to integrating a map to track a vehicle. the map itself has many
                complex features, such as searching for an object and there is a movement visualisation feature. in
                addition, there is a dashboard for data management.
              </h2>
              <div className="flex lg:flex-row flex-col gap-4">
                <div>
                  <Image
                    className="lg:h-[300px] h-[200px] lg:min-w-[600px] w-full rounded-lg"
                    src="/gpstracker.jpeg"
                    width={600}
                    height={400}
                    alt="Picture of the author"
                  />
                  <p className="font-bold text-xs text-center pt-2">No detail available</p>
                </div>
                <ul className="list-disc ps-4">
                  <li>Created a car movement visualization feature based on a list of coordinate.</li>
                  <li>
                    Integrated OpenStreetMap, creating a reusable map component that supports various map-related
                    features.
                  </li>
                  <li>Implemented user interface design and integrated APIs for the features.</li>
                  <li>Developed a Content Management System (CMS).</li>
                </ul>
              </div>
            </div>

            {/* Travelxism */}
            {backdrops.map(b => (
              <div className="py-4" key={b}>
                <a
                  className="lg:text-3xl text-xl text-red-500  transition duration-300 ease-in-out hover:text-red-800 flex gap-4"
                  href="https://skripsi-web.vercel.app/"
                  target="_blank"
                >
                  * travelxism.com <RiExternalLinkFill />
                </a>
                <h2 className="py-4 text-justify">
                  Internship project, re-create the UI UX Responsive appearance of company website based on the
                  braimstorming with team and suggestions from several respondents.
                </h2>
                <div className="flex lg:flex-row flex-col gap-4">
                  <div>
                    <Image
                      className="cursor-pointer lg:h-[300px] h-[200px] lg:min-w-[600px] w-full rounded-lg"
                      key={b}
                      onClick={() => handleOpen(b)}
                      src="/travelxism.png"
                      width={600}
                      height={400}
                      alt="Picture of the author"
                    />
                    <p className="font-bold text-xs text-center pt-2">Click the image for detail</p>
                  </div>
                  <ul className="list-disc ps-4">
                    <li>Focused on revamping the website user interface and e-tourism implementation.</li>
                    <li>Implemented Front-End, Responsive Web design, and integrated the APIs for the feature.</li>
                    <li>Improved website loading time performance.</li>
                    <li>Developed a Content Management System (CMS).</li>
                    <li>Resolved bugs during the development phase and production.</li>
                  </ul>
                </div>
              </div>
            ))}

            {/* Funrobo */}
            {backdrops.map(b => (
              <div key={b}>
                <a
                  className="lg:text-3xl text-xl text-red-500  transition duration-300 ease-in-out hover:text-red-800 flex gap-4"
                  href="https://funrobo.id/"
                  target="_blank"
                >
                  * funrobo.id <RiExternalLinkFill />
                </a>
                <h2 className="py-4 text-justify">
                  in the funrobo project, I contributed to creating designs for desktop and mobile. then, implemented
                  the design and API integration. made responsive so that it could be accessed by all devices.
                </h2>
                <div className="flex lg:flex-row flex-col gap-4">
                  <div>
                    <Image
                      className="cursor-pointer lg:h-[300px] h-[200px] lg:min-w-[600px] w-full rounded-lg"
                      key={b}
                      onClick={() => handleOpenSecondModal(b)}
                      src="/funrobo.jpeg"
                      width={600}
                      height={300}
                      alt="Picture of the author"
                    />
                    <p className="font-bold text-xs text-center pt-2">Click the image for detail</p>
                  </div>
                  <ul className="list-disc ps-4">
                    <li>Designed user interface and user experience for website and mobile using figma.</li>
                    <li>Implemented Front-End, Responsive Web design, and integrated the APIs for the feature</li>
                    <li>Developed a Content Management System (CMS).</li>
                    <li>Resolved bugs during the development phase and production.</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <CustomModal
            backdrop={secondModalBackdrop}
            size={secondModalSize}
            isOpen={isOpenSecondModal}
            onClose={onCloseSecondModal}
            data={modalData[1]}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
