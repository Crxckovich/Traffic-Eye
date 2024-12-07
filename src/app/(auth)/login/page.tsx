import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/button/button";

export const metadata: Metadata = {
  title: "Вход",
  description: "Страница входа в систему",
}

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Вход в систему</CardTitle>
          <CardDescription>
            Введите ваши данные для входа
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link href='/' className='w-full'>
            <Button className="w-full">Войти</Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Нет аккаунта?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Зарегистрироваться
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

