"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const congestionData = [
  { time: "06:00", level: 20 },
  { time: "08:00", level: 85 },
  { time: "10:00", level: 65 },
  { time: "12:00", level: 45 },
  { time: "14:00", level: 55 },
  { time: "16:00", level: 90 },
  { time: "18:00", level: 95 },
  { time: "20:00", level: 70 },
  { time: "22:00", level: 40 },
]

export function TrafficCongestionStats() {
  return (
    <Card className='space-y-3'>
      <CardHeader>
        <CardTitle>Динамика загруженности дорог</CardTitle>
        <div className="text-4xl font-bold text-accent">
          {congestionData[congestionData.length - 1].level}%
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={congestionData}>
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Загруженность
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}%
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar
                dataKey="level"
                fill="#22c55e"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

