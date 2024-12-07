"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "./button/button"

export function AvatarUpload() {
  const [preview, setPreview] = useState<string>("/avatar.png")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Аватар профиля</CardTitle>
        <CardDescription>
          Загрузите или измените аватар профиля
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-24 h-24">
            <Image
              src={preview}
              alt="Avatar preview"
              className="rounded-full border-2 border-muted"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
            >
              Выбрать изображение
            </Button>
            <p className="text-sm text-muted-foreground">
              Рекомендуемый размер: 256x256px
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

