import {Htag} from "@/components/Htag/Htag";
import {Button} from "@/components/button/button";
import {ChartArea, FileSymlink} from "lucide-react";
import {VehicleUtilizationChart} from "@/components/vehicle-utilization-chart";
import {DeliveryEfficiencyChart} from "@/components/delivery-efficiency-chart";
import {TrafficCongestionStats} from "@/components/traffic-congestion-stats";

export default function AnalyticsPage() {
  return (
      <main className='py-5 space-y-5 container mx-auto'>
          <div className="flex flex-wrap gap-y-5 w-full justify-between items-center">
              <Htag className='flex gap-3 items-center' tag='h2'>
                  <ChartArea className='stroke-green-500' size={40}/>
                  Аналитика
              </Htag>
              <Button variant='default'>
                  Отправить отчет
                  <FileSymlink/>
              </Button>
          </div>
          <VehicleUtilizationChart/>
          <DeliveryEfficiencyChart/>
          <TrafficCongestionStats/>
      </main>
  )
}

