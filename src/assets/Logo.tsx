'use client'

import { useSidebar } from '@/components/ui/sidebar'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import assets from '.'

export default function Logo() {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  if (isCollapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div className='flex size-8 shrink-0 items-center justify-center rounded-md'>
            <Image
              src={assets.images.logoPng}
              alt='logo'
              width={16}
              height={16}
              className='h-8 w-auto object-contain'
              unoptimized
            />
          </div>
        </TooltipTrigger>
        <TooltipContent side='right' align='center'>
          <p className='font-semibold'>Dinner Winner</p>
          <p className='text-muted-foreground text-xs'>Admin Panel</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <div className='flex items-center gap-2.5'>
      <div className='flex size-8 shrink-0 items-center justify-center rounded-md'>
        <Image
          src={assets.images.logoPng}
          alt='logo'
          width={200}
          height={200}
          className='h-8 w-auto object-contain'
          unoptimized
        />
      </div>
      <div className='flex flex-col gap-0.5 leading-none'>
        <span className='text-sm font-semibold'>Dinner Winner</span>
        <span className='text-muted-foreground text-xs'>Admin Panel</span>
      </div>
    </div>
  )
}
