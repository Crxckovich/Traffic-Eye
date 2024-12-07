"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, ArrowDownUp, Car, Clock } from 'lucide-react'
import {Badge} from "@/components/badge/badge";
import {Button} from "@/components/button/button";

interface TrafficData {
  street: string
  congestionLevel: number
  averageSpeed: number
  incidentCount: number
  status: "Нормальный" | "Затруднённый" | "Критический"
  lastUpdate: string
}

const trafficData: TrafficData[] = [
  {
    street: "Восточный обход",
    congestionLevel: 85,
    averageSpeed: 20,
    incidentCount: 2,
    status: "Критический",
    lastUpdate: "2 мин назад"
  },
  {
    street: "Красная улица",
    congestionLevel: 65,
    averageSpeed: 35,
    incidentCount: 1,
    status: "Затруднённый",
    lastUpdate: "5 мин назад"
  },
  {
    street: "Ставропольская улица",
    congestionLevel: 30,
    averageSpeed: 55,
    incidentCount: 0,
    status: "Нормальный",
    lastUpdate: "1 мин назад"
  }
]

const getStatusBadgeVariant = (status: TrafficData['status']) => {
  switch (status) {
    case 'Нормальный':
      return 'success'
    case 'Затруднённый':
      return 'warning'
    case 'Критический':
      return 'destructive'
    default:
      return 'secondary'
  }
}

export function TrafficManagementTable() {
  const [filteredData, setFilteredData] = useState(trafficData)
  const [filters, setFilters] = useState({
    region: '',
    congestionLevel: '',
    incidentCount: ''
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-5 w-5" />
          Мониторинг дорожного движения
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Улица</TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Загруженность
                  <ArrowDownUp className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Средняя скорость</TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Инциденты
                  <AlertTriangle className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>
                <div className="flex items-center gap-2">
                  Обновлено
                  <Clock className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.street}>
                <TableCell className="font-medium">{item.street}</TableCell>
                <TableCell>{item.congestionLevel}%</TableCell>
                <TableCell>{item.averageSpeed} км/ч</TableCell>
                <TableCell>{item.incidentCount}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(item.status)}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.lastUpdate}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Управление
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

