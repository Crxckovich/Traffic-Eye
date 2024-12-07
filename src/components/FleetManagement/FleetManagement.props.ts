export interface VehicleData {
  id: number;
  vehicleNumber: string;
  currentLocation: [number, number]; // [latitude, longitude]
  status: string;
  lastUpdate: string;
  type: string;
  driver: string;
  company: string;
}

export const fleetData: VehicleData[] = [
  {
    id: 1,
    vehicleNumber: "А123ЕК",
    currentLocation: [55.751244, 37.618423], // Москва
    status: "В пути",
    lastUpdate: "2 мин назад",
    type: "Грузовик",
    driver: "Иван Иванов",
    company: "ООО Логистика"
  },
  {
    id: 2,
    vehicleNumber: "А456ЕК",
    currentLocation: [59.938784, 30.314997], // Санкт-Петербург
    status: "На погрузке",
    lastUpdate: "15 мин назад",
    type: "Фургон",
    driver: "Петр Петров",
    company: "ООО Доставка"
  },
  {
    id: 3,
    vehicleNumber: "А789ЕК",
    currentLocation: [55.796127, 49.106405], // Казань
    status: "На стоянке",
    lastUpdate: "1 час назад",
    type: "Грузовик",
    driver: "Алексей Алексеев",
    company: "ООО Перевозки"
  },
]

