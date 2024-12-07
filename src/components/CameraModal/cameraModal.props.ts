export interface CameraData {
  id: string;
  location: [number, number]; // [latitude, longitude]
  address: string;
  status: "Активна" | "Отключена";
  lastMaintenance: string;
  trafficLightId?: string; // связь со светофором
  detectedVehicles: {
    timestamp: string;
    plateNumber: string;
    vehicleType: string;
    speed: number;
  }[];
  image: string; // URL изображения с камеры
}

export const camerasData: CameraData[] = [
  {
    id: "CAM001",
    location: [45.035470, 38.975313], // Краснодар, центр
    address: "Красная/Северная",
    status: "Активна",
    lastMaintenance: "2024-01-15",
    trafficLightId: "TL001",
    detectedVehicles: [
      {
        timestamp: "2024-01-20T10:30:00",
        plateNumber: "А123ЕК",
        vehicleType: "Легковой",
        speed: 45
      },
      {
        timestamp: "2024-01-20T10:35:00",
        plateNumber: "В456МН",
        vehicleType: "Грузовой",
        speed: 38
      }
    ],
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: "CAM002",
    location: [45.032680, 38.972750], // Краснодар, ул. Ставропольская
    address: "Ставропольская/Вишняковой",
    status: "Активна",
    lastMaintenance: "2024-01-10",
    trafficLightId: "TL002",
    detectedVehicles: [
      {
        timestamp: "2024-01-20T11:15:00",
        plateNumber: "С789ОП",
        vehicleType: "Легковой",
        speed: 52
      }
    ],
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    id: "CAM003",
    location: [45.038890, 38.978560], // Краснодар, Восточный обход
    address: "Восточный обход/Российская",
    status: "Отключена",
    lastMaintenance: "2024-01-05",
    trafficLightId: "TL003",
    detectedVehicles: [],
    image: "/placeholder.svg?height=300&width=400"
  }
]

