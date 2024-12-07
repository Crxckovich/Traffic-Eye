import {SidebarGroup, SidebarGroupLabel} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {Search} from "@/components/Search/Search";
import {TrafficMonitoring} from "@/components/TrafficMonitoring/traffic-monitoring";
import * as React from "react";

export function NavAnalytics() {
  return (
    <>
      <SidebarGroup className='space-y-5'>
        <div className="space-y-3">
          <SidebarGroupLabel>Информация</SidebarGroupLabel>
          <div className="flex w-full text-base  justify-between items-center">
            <span>Загруженные улицы</span>
            <span className="font-bold">26.11.24</span>
          </div>
          <Separator/>
          <Search placeholder='Красная улица...'  />
        </div>
        <TrafficMonitoring/>
      </SidebarGroup>
    </>
  )
}

