import React, { MutableRefObject } from 'react'
import HalfLine from './HalfLine'

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full pt-5 lg:pb-10 pb-5 flex gap-4 justify-center items-center">
      <HalfLine />
      <h2 className="sertif-transition lg:text-4xl text-xl w-auto text-mynavy z-10 text-center">{title}</h2>
      <HalfLine />
    </div>
  )
}

export default SectionTitle
