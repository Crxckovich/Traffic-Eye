# TrafficEye 🚦👁️

![Next.js](https://img.shields.io/badge/Next.js-15.0-blue?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?style=for-the-badge&logo=tailwind-css)

TrafficEye - это современная система мониторинга дорожного движения и управления транспортом, разработанная с использованием Next.js 15 и React. Проект предоставляет интуитивно понятный интерфейс для анализа трафика, управления светофорами и мониторинга транспортных средств в режиме реального времени.

## 🚀 Особенности

- Мониторинг дорожного движения в реальном времени
- Управление светофорами
- Аналитика трафика и ДТП
- Интеграция с Яндекс Картами
- Адаптивный дизайн с использованием Tailwind CSS
- Аутентификация и авторизация пользователей
- Панель управления для администраторов и сотрудников

## 📋 Требования

- Node.js 18.0 или выше
- npm 7.0 или выше

## 🛠 Установка

1. Клонируйте репозиторий: git clone [https://github.com/Crxckovich/TrafficEye.git](https://github.com/Crxckovich/TrafficEye.git)
cd trafficeye

2. Установите зависимости: npm install

3. Создайте файл `.env.local` в корневой директории проекта и добавьте необходимые переменные окружения:


## 🚀 Запуск проекта

Для запуска проекта в режиме разработки выполните: npm run dev

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере для просмотра приложения.

## 📦 Сборка для продакшена

Для создания оптимизированной версии приложения выполните: npm run build


## 📁 Структура проекта

trafficeye/
├── app/
│   ├── analytics/
│   ├── cameras/
│   ├── employees/
│   ├── fleet/
│   ├── login/
│   ├── map/
│   ├── register/
│   ├── settings/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── analytics.tsx
│   ├── app-sidebar.tsx
│   ├── avatar-upload.tsx
│   ├── dashboard.tsx
│   ├── employee-management.tsx
│   ├── fleet-management.tsx
│   ├── header.tsx
│   ├── layout-client.tsx
│   ├── location-selector.tsx
│   ├── nav-main.tsx
│   ├── quick-actions.tsx
│   ├── sidebar.tsx
│   ├── traffic-congestion-stats.tsx
│   ├── traffic-light-control.tsx
│   ├── traffic-management-table.tsx
│   ├── traffic-monitoring.tsx
│   └── yandex-map.tsx
├── public/
├── styles/
│   └── globals.css
├── types/
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json


## 🛠 Используемые технологии

- [Next.js 15](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [Yandex Maps API](https://yandex.ru/dev/maps/)

## 📄 Лицензия

Этот проект лицензирован под [MIT License](LICENSE).

Разработано с ❤️ командой IT TOP
