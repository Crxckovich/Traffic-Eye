'use client'

import { useState } from "react"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/hooks/use-mobile"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { Button } from "@/components/button/button"
import { Menu } from 'lucide-react'

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isMobile = useIsMobile()
  const pathname = usePathname()

  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register')

  if (isAuthPage) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen w-full">
      <AppSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <SidebarInset className="flex-1 relative">
        {isMobile && (
          <Button
            className="top-4 left-4 z-50"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        )}
        {children}
      </SidebarInset>
    </div>
  )
}
