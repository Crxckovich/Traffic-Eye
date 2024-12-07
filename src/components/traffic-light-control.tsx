"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Clock, Settings } from 'lucide-react'
import { Badge } from "./badge/badge"
import {Button} from "@/components/button/button";

interface TrafficLight {
  id: string
  location: string
  mode: "Автоматический" | "Ручной"
  status: "Активен" | "Отключен"
  schedule: string
  lastMaintenance: string
}

const trafficLights: TrafficLight[] = [
  {
    id: "TL001",
    location: "Красная/Северная",
    mode: "Автоматический",
    status: "Активен",
    schedule: "05:00 - 23:00",
    lastMaintenance: "15.11.2023"
  },
  {
    id: "TL002",
    location: "Ставропольская/Вишняковой",
    mode: "Ручной",
    status: "Активен",
    schedule: "24/7",
    lastMaintenance: "20.11.2023"
  },
  {
    id: "TL003",
    location: "Восточный обход/Российская",
    mode: "Автоматический",
    status: "Отключен",
    schedule: "06:00 - 22:00",
    lastMaintenance: "10.11.2023"
  }
]

export function TrafficLightControl() {
  const [lights, setLights] = useState(trafficLights)

  const toggleMode = (id: string) => {
    setLights(prev => prev.map(light => {
      if (light.id === id) {
        return {
          ...light,
          mode: light.mode === "Автоматический" ? "Ручной" : "Автоматический"
        }
      }
      return light
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Управление светофорами
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Расположение</TableHead>
              <TableHead>Режим работы</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>График работы</TableHead>
              <TableHead>Обслуживание</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lights.map((light) => (
              <TableRow key={light.id}>
                <TableCell>{light.id}</TableCell>
                <TableCell>{light.location}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={light.mode === "Автоматический"}
                      onCheckedChange={() => toggleMode(light.id)}
                    />
                    {light.mode}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={light.status === "Активен" ? "success" : "destructive"}>
                    {light.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {light.schedule}
                  </div>
                </TableCell>
                <TableCell>{light.lastMaintenance}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Настройка
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

