"use client"

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {ChevronDown, Filter} from 'lucide-react'
import {Button} from "@/components/button/button";

interface FilterState {
  region: string
  vehicleType: string
  loadType: string
}

const regions = [
  { value: 'moscow', label: 'Москва и область' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'south', label: 'Казань' },
]

const vehicleTypes = [
  { value: 'all', label: 'Все типы ТС' },
  { value: 'truck20', label: 'Грузовик 20т' },
  { value: 'truck10', label: 'Грузовик 10т' },
  { value: 'van', label: 'Фургон' },
]

const loadTypes = [
  { value: 'all', label: 'Все типы грузов' },
  { value: 'food', label: 'Продукты питания' },
  { value: 'construction', label: 'Стройматериалы' },
  { value: 'electronics', label: 'Электроника' },
]

export function LocationSelector() {
  const [filters, setFilters] = useState<FilterState>({
    region: '',
    vehicleType: '',
    loadType: '',
  })

  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <div className='flex items-center gap-2'>
            <Filter className='stroke-blue-500'/>
            Фильтры
          </div>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Card className="mt-2">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 justify-between">
              <Select
                value={filters.region}
                onValueChange={(value) => setFilters(prev => ({ ...prev, region: value }))}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Выберите регион"/>
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.value} value={region.value}>
                      {region.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={filters.vehicleType}
                onValueChange={(value) => setFilters(prev => ({ ...prev, vehicleType: value }))}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Тип транспорта"/>
                </SelectTrigger>
                <SelectContent>
                  {vehicleTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={filters.loadType}
                onValueChange={(value) => setFilters(prev => ({ ...prev, loadType: value }))}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Тип груза"/>
                </SelectTrigger>
                <SelectContent>
                  {loadTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </CollapsibleContent>
    </Collapsible>
  )
}

