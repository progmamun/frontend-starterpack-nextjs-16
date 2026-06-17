'use client'

import { IUserInfo, Route } from '@/types'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar'
import { NavUser } from './nav-user'
import React from 'react'
import { NavItem } from './nav-item'
import { TooltipProvider } from '@/components/ui/tooltip'
import Logo from '@/assets/Logo'

type Props = {
  userInfo: IUserInfo | null
  navItems: Route[]
  dashboardHome: string
}

export default function DashboardSidebarContent({ userInfo, navItems }: Props) {
  return (
    <TooltipProvider>
      <Sidebar collapsible='icon'>
        {/* HEADER */}
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild>
                <div className='flex items-center justify-center'>
                  <Logo />
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* CONTENT */}
        <SidebarContent>
          <React.Suspense>
            {navItems.map(group => (
              <SidebarGroup key={group.title}>
                <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item, index) => (
                      <NavItem key={index} item={item} />
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </React.Suspense>
        </SidebarContent>

        {/* FOOTER */}
        <SidebarFooter>{userInfo && <NavUser user={userInfo} />}</SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  )
}
