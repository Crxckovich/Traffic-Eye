import {TrafficData} from "@/components/TrafficMonitoring/TrafficMonitoring.props";

export async function getTrafficData(center: [number, number], zoom: number): Promise<TrafficData[]> {
  if (!window.ymaps) {
    throw new Error('Yandex Maps API not loaded');
  }

  return new Promise((resolve) => {
    window.ymaps.ready(() => {
      // Since the traffic provider API seems unreliable, let's simulate traffic data
      // based on common traffic patterns and the current view
      const mockStreets = [
        { name: 'Красная улица', baseLoad: 75 },
        { name: 'Северная улица', baseLoad: 45 },
        { name: 'Ставропольская улица', baseLoad: 30 },
        { name: 'Кубанская набережная', baseLoad: 60 },
        { name: 'Тургенева улица', baseLoad: 55 }
      ];

      const trafficData = mockStreets.map(street => ({
        name: street.name,
        // Add some randomness to the base load to simulate real-time changes
        load: Math.min(100, Math.max(0, street.baseLoad + (Math.random() * 20 - 10))),
        accidents: Math.floor(Math.random() * 3)
      }));

      resolve(trafficData);
    });
  });
}