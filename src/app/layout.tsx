import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { LayoutClient } from "@/components/layout-client"
import { MapViewProvider } from "@/context/MapViewContext"

const ttHoves = localFont({
  src: [
    {
      path: "./fonts/TTHoves-DemiBold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/TTHoves-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/TTHoves-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-tt-hoves",
  weight: "400 500 700"
})

export const metadata: Metadata = {
  title: 'TrafficEye',
  description: 'Сервис для оптимизации дорожного движения и улучшения логистики',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${ttHoves.variable} antialiased font-ttHoves bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <MapViewProvider>
              <LayoutClient>
                {children}
              </LayoutClient>
            </MapViewProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

