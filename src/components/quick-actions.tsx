import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {PlusCircle, Truck, Map, BarChart2, Flame} from 'lucide-react'
import Link from "next/link"
import {Button} from "@/components/button/button";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex gap-2'>
          <Flame className='stroke-yellow-500'/>
          Быстрые действия
        </CardTitle>
        <CardDescription>Часто используемые функции</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <Button variant='secondary'>
          <PlusCircle />
          Добавить ТС
        </Button>
        <Link href="/fleet">
          <Button variant="outline">
            <Truck />
            Управление автопарком
          </Button>
        </Link>
        <Link href="/map">
          <Button variant="outline">
            <Map />
            Просмотр карты
          </Button>
        </Link>
        <Link href="/analytics">
          <Button variant="outline">
            <BarChart2 />
            Аналитика
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

