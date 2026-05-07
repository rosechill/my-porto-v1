// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { Analytics } from '@vercel/analytics/next'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
      <Analytics />
      <ToastContainer />
    </NextUIProvider>
  )
}
