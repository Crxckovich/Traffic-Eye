import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const nationalVehicleData = [
  { region: "Москва", totalVehicles: 5000000, activeVehicles: 3000000, trafficLevel: "Высокий" },
  { region: "Санкт-Петербург", totalVehicles: 3000000, activeVehicles: 1800000, trafficLevel: "Средний" },
  { region: "Казань", totalVehicles: 1000000, activeVehicles: 600000, trafficLevel: "Низкий" },
]

export function NationalVehicleMonitoring() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Мониторинг ТС по стране</CardTitle>
        <CardDescription>Обзор транспортных средств по регионам</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Регион</TableHead>
              <TableHead>Всего ТС</TableHead>
              <TableHead>Активных ТС</TableHead>
              <TableHead>Уровень трафика</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nationalVehicleData.map((region, index) => (
              <TableRow key={index}>
                <TableCell>{region.region}</TableCell>
                <TableCell>{region.totalVehicles.toLocaleString()}</TableCell>
                <TableCell>{region.activeVehicles.toLocaleString()}</TableCell>
                <TableCell>{region.trafficLevel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

