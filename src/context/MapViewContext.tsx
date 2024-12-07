"use client"

import React, { createContext, useContext, useState } from 'react';

interface MapViewContextType {
  currentView: {
    center: [number, number];
    zoom: number;
  };
  setCurrentView: React.Dispatch<React.SetStateAction<{ center: [number, number]; zoom: number }>>;
}

const MapViewContext = createContext<MapViewContextType | undefined>(undefined);

export function MapViewProvider({ children }: { children: React.ReactNode }) {
  const [currentView, setCurrentView] = useState<{ center: [number, number]; zoom: number }>({
    center: [45.035470, 38.975313], // Default to Krasnodar
    zoom: 12
  });

  return (
    <MapViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </MapViewContext.Provider>
  );
}

export function useMapView() {
  const context = useContext(MapViewContext);
  if (context === undefined) {
    throw new Error('useMapView must be used within a MapViewProvider');
  }
  return context;
}

