import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components/button/button";
import {FileSymlink, LayoutPanelTop} from 'lucide-react';
import { LocationSelector } from "@/components/LocationSelector";
import {NationalVehicleMonitoring} from "@/components/national-vehicle-monitoring";
import {QuickActions} from "@/components/quick-actions";
import {TrafficManagementTable} from "@/components/traffic-management-table";
import {TrafficLightControl} from "@/components/traffic-light-control";

export default function Page() {
  return (
    <div className='py-5 space-y-5 container mx-auto'>
        <div className="flex flex-wrap gap-y-5 w-full justify-between items-center">
            <Htag className='flex gap-3 items-center' tag='h2'>
                <LayoutPanelTop className='stroke-green-500' size={40}/>
                Панель управления
            </Htag>
            <Button variant='default'>
            Отправить отчет
            <FileSymlink />
            </Button>
        </div>
        <QuickActions/>
        <LocationSelector />
        <NationalVehicleMonitoring/>
        <TrafficManagementTable/>
        <TrafficLightControl/>
    </div>
  );
}
