'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronsRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { RouteItem } from '@/types'

type Props = {
  item: RouteItem
}

function DynamicIcon({ name }: { name?: string }) {
  if (!name) return null
  const Icon = (Icons as any)[name]
  if (!Icon) return null
  return <Icon className='size-4' />
}

export function NavItem({ item }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(
    () => item.children?.some(child => pathname === child.url) ?? false
  )

  // Has subcategories
  if (item.children?.length) {
    const isAnyChildActive = item.children.some(child => pathname === child.url)

    return (
      <Collapsible open={open} onOpenChange={setOpen} asChild>
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              tooltip={item.title}
              className={isAnyChildActive ? 'font-medium text-emerald-500' : ''}
            >
              <DynamicIcon name={item.icon} />
              <span>{item.title}</span>
              <ChevronsRight
                className={`ml-auto size-4 transition-transform duration-200 ${
                  open ? 'rotate-90' : ''
                }`}
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarMenuSub>
              {item.children.map(child => {
                const isActive = pathname === child.url
                return (
                  <SidebarMenuSubItem key={child.title}>
                    <SidebarMenuSubButton
                      asChild
                      className={
                        isActive
                          ? 'border-l-4 border-l-emerald-500 font-medium text-emerald-600'
                          : ''
                      }
                    >
                      <Link href={child.url!}>
                        <DynamicIcon name={child.icon} />
                        <span>{child.title}</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                )
              })}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    )
  }

  // Regular item
  const isActive = pathname === item.url
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={item.title}
        className={
          isActive
            ? 'border-l-4 border-l-emerald-500 font-medium text-emerald-600'
            : ''
        }
      >
        <Link href={item.url!}>
          <DynamicIcon name={item.icon} />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
