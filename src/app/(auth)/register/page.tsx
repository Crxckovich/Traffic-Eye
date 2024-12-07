import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/button/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Страница регистрации в системе",
}

export default function RegisterPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Регистрация</CardTitle>
          <CardDescription>
            Создайте новый аккаунт
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Имя" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="companyName">Название компании</Label>
                <Input id="companyName" placeholder="Название компании" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="companyType">Тип компании</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип компании" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="цодд">ЦОДД</SelectItem>
                    <SelectItem value="логистическая">Логистическая</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="role">Роль</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите роль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Администратор</SelectItem>
                    <SelectItem value="employee">Сотрудник</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link href='/' className="w-full">
              <Button className="w-full">Зарегистрироваться</Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Уже есть аккаунт?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Войти
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

