"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Янв", efficiency: 92 },
  { month: "Фев", efficiency: 89 },
  { month: "Мар", efficiency: 93 },
  { month: "Апр", efficiency: 88 },
  { month: "Май", efficiency: 90 },
  { month: "Июн", efficiency: 95 },
  { month: "Июл", efficiency: 94 },
  { month: "Авг", efficiency: 91 },
  { month: "Сен", efficiency: 93 },
  { month: "Окт", efficiency: 92 },
  { month: "Ноя", efficiency: 94 },
  { month: "Дек", efficiency: 96 },
]

export function DeliveryEfficiencyChart() {
  return (
    <Card className='space-y-3'>
      <CardHeader>
        <CardTitle>Эффективность доставки</CardTitle>
        <div className="text-4xl font-bold text-[#22c55e]">
          {data[data.length - 1].efficiency}%
        </div>
        <CardDescription>
          Процент своевременных доставок по месяцам
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis
                dataKey="month"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
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
                              Эффективность
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
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

