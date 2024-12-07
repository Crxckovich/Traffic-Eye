"use client"

import * as React from "react"
import {ChartArea, Eye, MapPin} from 'lucide-react'
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    useSidebar,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { NavMain } from "@/components/nav-main"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {NavButtons} from "@/components/nav-buttons";
import {NavAnalytics} from "@/components/nav-analytics";

const data = {
  user: {
    name: "Иван Иванов",
    email: "yourmail23@mail.ru",
    avatar: "./avatar.png",
  },
    navMain: [
    {
      title: "Панель управления",
      url: "#",
      icon: ChartArea,
      isActive: true,
      items: [
        {
          title: "Главная",
          url: "/",
        },
        {
          title: "Автопаркинг",
          url: "/fleet",
        },
        {
          title: "Аналитика",
          url: "/analytics",
        },
      ],
    },
  ],
  buttons: [
    {
      name: "Карта",
      url: "/map",
      icon: MapPin,
    },
  ],
}

interface AppSidebarProps extends Omit<React.ComponentProps<typeof Sidebar>, 'isOpen'> {
  isOpen: boolean;
  onClose: () => void;
}

export function AppSidebar({ isOpen, onClose, ...props }: AppSidebarProps) {
  const { isMobile } = useSidebar()

  const sidebarContent = (
      <div className='flex flex-col justify-between h-screen'>
          <SidebarHeader>
            <div className='flex items-center gap-2 p-4'>
              <Eye className="stroke-accent h-8 w-8 shrink-0"/>
              <span className='font-bold text-3xl transition-opacity duration-200'>TrafficEye</span>
            </div>
          </SidebarHeader>
          <SidebarContent className='py-4 px-4 space-y-10'>
            <div className="">
              <NavMain items={data.navMain}/>
              <NavButtons buttons={data.buttons}/>
            </div>
            <NavAnalytics/>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-3 p-4">
              <NavUser user={data.user}/>
              <ThemeToggle/>
            </div>
          </SidebarFooter>
      </div>
  )

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 w-[300px]">
          {sidebarContent}
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Sidebar {...props}>
      {sidebarContent}
    </Sidebar>
  )
}

