import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/button/button"
import { SwitchForm } from "@/components/switch-form"
import { Htag } from "@/components/Htag/Htag"
import { AvatarUpload } from "@/components/avatar-upload"

export const metadata: Metadata = {
  title: "Настройки",
  description: "Настройки аккаунта",
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-5 space-y-5">
      <Htag tag='h2'>Настройки аккаунта</Htag>

      <div className="space-y-6">
        <AvatarUpload />

        <Card>
          <CardHeader>
            <CardTitle>Личные данные</CardTitle>
            <CardDescription>
              Обновите ваши личные данные
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Почта</Label>
                  <Input id="email" type="email" placeholder="yourmail23@mail.ru" />
                </div>
              </div>
              <Button>Сохранить изменения</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Безопасность</CardTitle>
            <CardDescription>
              Обновите ваш пароль
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Текущий пароль</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Новый пароль</Label>
                  <Input id="newPassword" type="password" />
                </div>
              </div>
              <Button>Изменить пароль</Button>
            </form>
          </CardContent>
        </Card>

        <SwitchForm/>
      </div>
    </div>
  )
}

