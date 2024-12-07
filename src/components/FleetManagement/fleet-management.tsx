"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/badge/badge"
import {fleetData, VehicleData} from "@/components/FleetManagement/FleetManagement.props";
import {Button} from "@/components/button/button";

const getStatusBadgeVariant = (status: VehicleData['status']) => {
  switch (status) {
    case 'В пути':
      return 'default'
    case 'На погрузке':
    case 'На разгрузке':
      return 'warning'
    case 'На стоянке':
      return 'secondary'
    case 'На техобслуживании':
      return 'destructive'
    default:
      return 'secondary'
  }
}

export function FleetManagement() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleData | null>(null)
  const router = useRouter()

  const handleRowClick = (vehicle: VehicleData) => {
    setSelectedVehicle(vehicle)
    router.push(`/map?vehicle=${vehicle.id}`)
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Управление автопарком</CardTitle>
          <CardDescription>Обзор состояния транспортных средств</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Номер ТС</TableHead>
                <TableHead>Местоположение</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Последнее обновление</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fleetData.map((vehicle) => (
                <TableRow key={vehicle.id} onClick={() => handleRowClick(vehicle)} className="cursor-pointer">
                  <TableCell>{vehicle.vehicleNumber}</TableCell>
                  <TableCell>{`${vehicle.currentLocation[0].toFixed(6)}, ${vehicle.currentLocation[1].toFixed(6)}`}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(vehicle.status)}>
                      {vehicle.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{vehicle.lastUpdate}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={(e) => {
                      e.stopPropagation()
                      router.push(`/map?vehicle=${vehicle.id}`)
                    }}>
                      Подробнее
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

