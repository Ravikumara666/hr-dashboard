# HR Dashboard

A responsive, dark-mode supported, interactive HR management dashboard built with **Next.js 14 App Router**, **Tailwind CSS**, **Lucide Icons**, and **React Context API**. This dashboard allows you to manage employees, view performance KPIs, apply smart filters, and toggle bookmarks.

---

## Project Folder Structure
```bash
hr-dashboard/
├── app/
│ ├── layout.tsx # Global layout with sidebar + theme
│ ├── page.tsx # Welcome landing + redirect
│ ├── auth/page.tsx # Login screen
│ ├── dashboard/page.tsx # Main dashboard grid
│ └── employee/[id]/page.tsx # Detailed employee profile
│
├── components/
│ ├── layout/ # Sidebar, Navbar, ThemeToggle
│ ├── cards/ # EmployeeCard, PerformanceCard
│ ├── filters/ # SearchFilter
│ ├── employee/ # EmployeeDetail
│ └── ui/ # Button, Badge, StarRating
│
├── context/
│ └── AppContext.tsx # Global app state
│
├── lib/
│ └── auth.ts # Auth utils (mock login)
│
├── styles/
│ └── globals.css # Tailwind and custom styles
│
├── public/
│ └── favicon.ico
├── tailwind.config.js
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

---

## Features

-  Light/Dark mode toggle
-  Employee performance cards
-  Search + filter (department, rating)
-  Bookmark employees
-  Mock login authentication
-  Fully responsive UI with Tailwind CSS
-  Context API state management
-  Lucide Icons for modern visuals

---

##  Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Context API](https://reactjs.org/docs/context.html)

---

##  Dependencies

```bash
npm install
npm install tailwindcss postcss autoprefixer
npm install lucide-react
npm install tailwindcss @tailwindcss/postcss postcss
```
 Scripts

Command	Description
npm run dev	Start the development server
npm run build	Build the production app
npm run start	Run production build
npm run lint	Run ESLint to check code quality


npm run dev
Visit http://localhost:3000 to view the dashboard.

 Author
D. Ravikumara
 Dayananda Sagar College of Engineering, Bengaluru
 B.E. in Computer Science and Engineering


