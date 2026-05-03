'use client'

import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import cn from 'classnames'

const DownloadResume = ({ secondary = false }) => {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    if (downloaded) {
      toast.info('You already downloaded my resume')
      return
    }

    const link = document.createElement('a')
    link.href = '/pdf/resume.pdf'
    link.download = 'bagas-resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setDownloaded(true)
    toast.success('Success download CV')
  }

  return (
    <button
      onClick={handleDownload}
      className={cn('flex items-center gap-2 px-4 py-2 mt-2 rounded-lg transition-all duration-300 max-w-[300px]', {
        'bg-mynavy hover:bg-myblue-600 text-white hover:scale-105': !secondary && !downloaded,
        'bg-white text-mynavy border border-mynavy hover:bg-gray-100 hover:scale-105': secondary && !downloaded,
        'bg-gray-400 text-white cursor-not-allowed': downloaded,
      })}
    >
      <FaDownload />
      {downloaded ? 'Downloaded' : 'Download Resume'}
    </button>
  )
}

export default DownloadResume
