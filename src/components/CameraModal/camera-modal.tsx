import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"
import { CameraData } from "@/components/CameraModal/cameraModal.props"
import { Badge } from "@/components/badge/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/button/button"

interface CameraModalProps {
  camera: CameraData | null
  onClose: () => void
}

export function CameraModal({ camera, onClose }: CameraModalProps) {
  const [showReport, setShowReport] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<CameraData['detectedVehicles'][0] | null>(null)

  if (!camera) return null

  return (
    <>
      <Dialog open={Boolean(camera)} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Камера {camera.id} - {camera.address}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <img
                src={camera.image}
                alt={`Вид с камеры ${camera.id}`}
                className="object-cover"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Badge variant={camera.status === "Активна" ? "default" : "destructive"}>
                  {camera.status}
                </Badge>
                <Button onClick={() => setShowReport(true)}>Отправить отчет</Button>
              </div>
              <ScrollArea className="h-[200px] rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Время</TableHead>
                      <TableHead>Номер ТС</TableHead>
                      <TableHead>Тип ТС</TableHead>
                      <TableHead>Скорость</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {camera.detectedVehicles.map((vehicle, index) => (
                      <TableRow
                        key={index}
                        className="cursor-pointer hover:bg-muted"
                        onClick={() => setSelectedVehicle(vehicle)}
                      >
                        <TableCell>{new Date(vehicle.timestamp).toLocaleTimeString()}</TableCell>
                        <TableCell>{vehicle.plateNumber}</TableCell>
                        <TableCell>{vehicle.vehicleType}</TableCell>
                        <TableCell>{vehicle.speed} км/ч</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(selectedVehicle)} onOpenChange={() => setSelectedVehicle(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Информация о ТС</DialogTitle>
          </DialogHeader>
          {selectedVehicle && (
            <div className="grid gap-2">
              <p><strong>Номер:</strong> {selectedVehicle.plateNumber}</p>
              <p><strong>Тип:</strong> {selectedVehicle.vehicleType}</p>
              <p><strong>Скорость:</strong> {selectedVehicle.speed} км/ч</p>
              <p><strong>Время:</strong> {new Date(selectedVehicle.timestamp).toLocaleString()}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={showReport} onOpenChange={setShowReport}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Отправка отчета</AlertDialogTitle>
            <AlertDialogDescription>
              Отчет о работе камеры {camera.id} будет отправлен в систему.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={() => {
              setShowReport(false)
              // Здесь был бы запрос к бэкенду
              console.log('Отчет отправлен')
            }}>
              Отправить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}