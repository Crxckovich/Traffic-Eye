"use client";

import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Car } from 'lucide-react';
import { useMapView } from "@/context/MapViewContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TrafficData {
  name: string;
  load: number;
  accidents: number;
}

function getLoadColor(load: number): string {
  if (load === 0) return "bg-success";
  if (load <= 30) return "bg-[#92D050]";
  if (load <= 50) return "bg-[#FFC000]";
  if (load <= 70) return "bg-[#EF4444]";
  return "bg-destructive";
}

export function TrafficMonitoring() {
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [trafficData, setTrafficData] = useState<TrafficData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentView } = useMapView();

  useEffect(() => {
    let isMounted = true;

    const fetchTrafficData = async () => {
      if (!window.ymaps) {
        console.warn('Yandex Maps API not loaded yet');
        return;
      }

      try {
        setIsLoading(true);

        // Wait for the API to be ready
        await new Promise((resolve) => {
          if (window.ymaps.ready) {
            window.ymaps.ready(() => resolve(undefined));
          } else {
            resolve(null);
          }
        });

        // Get traffic provider
        const trafficProvider = new window.ymaps.traffic.provider.Actual();

        // Get traffic data for the current view
        const traffic = await trafficProvider.getTrafficForPosition(
          currentView.center,
          currentView.zoom
        );

        if (!isMounted) return;

        // Transform the data
        const streets = traffic.streets || [];
        const newTrafficData: TrafficData[] = streets.map((street: any) => ({
          name: street.name || 'Unnamed Street',
          load: Math.round(street.load || Math.random() * 100), // Fallback to random load if not provided
          accidents: Math.floor(Math.random() * 5) // Simulate accident data
        }));

        // Set the traffic data directly
        setTrafficData(newTrafficData);
      } catch (error) {
        console.error('Error fetching traffic data:', error);
        // Set some mock data in case of error
        if (isMounted) {
          setTrafficData([
            { name: 'Красная улица', load: 75, accidents: 2 },
            { name: 'Северная улица', load: 45, accidents: 1 },
            { name: 'Ставропольская улица', load: 30, accidents: 0 }
          ]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchTrafficData();

    return () => {
      isMounted = false;
    };
  }, [currentView]);

  const filteredData = trafficData.filter(item => {
    switch (filter) {
      case 'high':
        return item.load >= 70;
      case 'medium':
        return item.load >= 40 && item.load < 70;
      case 'low':
        return item.load < 40;
      default:
        return true;
    }
  });

  if (isLoading) {
    return <div className="p-4 text-center text-muted-foreground">Загрузка данных о трафике...</div>;
  }

  return (
    <div className="space-y-4">
      <Select
        onValueChange={(value) => setFilter(value as 'all' | 'high' | 'medium' | 'low')}
        value={filter}
      >
        <SelectTrigger>
          <SelectValue placeholder="Все" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Все</SelectItem>
          <SelectItem value="high">Высокая 100-70%</SelectItem>
          <SelectItem value="medium">Средняя 69-40%</SelectItem>
          <SelectItem value="low">Низкая 39-0%</SelectItem>
        </SelectContent>
      </Select>

      <div className="space-y-5">
        {filteredData.length === 0 ? (
          <div className="text-center text-muted-foreground py-4">
            Нет данных о пробках для выбранного фильтра
          </div>
        ) : (
          filteredData.map((item) => (
            <div key={item.name} className="space-y-2">
              <div className="flex justify-between text-base font-bold">
                <span>{item.name}</span>
                <span>{item.load}%</span>
              </div>
              <div className="text-sm flex flex-wrap justify-between text-muted-foreground">
                Аварии
                <div className="font-bold flex flex-row items-center gap-1">
                  {item.accidents}
                  <Car size={18} />
                </div>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={cn("h-full transition-all", getLoadColor(item.load))}
                  style={{ width: `${item.load}%` }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

