'use client'

import React from 'react'
import { stackImage } from '../services/lib/dataTech'
import { InfiniteMovingCards } from './infiniteMovingCards'

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col desktop:w-2/4 w-full ">
      <InfiniteMovingCards items={stackImage} direction="right" speed="slow" />
    </div>
  )
}
