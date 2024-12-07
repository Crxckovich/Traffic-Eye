import { FleetManagement } from "@/components/FleetManagement/fleet-management"
import {Htag} from "@/components/Htag/Htag";
import {Button} from "@/components/button/button";
import {FileSymlink, SquareParking} from "lucide-react";

export default function FleetPage() {
  return (
          <main className='py-5 space-y-5 container mx-auto'>
              <div className="flex flex-wrap gap-y-5 w-full justify-between items-center">
                  <Htag className='flex gap-3 items-center' tag='h2'>
                      <SquareParking className='stroke-blue-500' size={40}/>
                      Автопаркинг
                  </Htag>
                  <Button variant='default'>
                      Отправить отчет
                      <FileSymlink/>
                  </Button>
              </div>
              <FleetManagement/>
          </main>
  )
}

