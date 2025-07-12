# 💸 Fynly – Plan Smart, Spend Smarter

Fynly is a **personal expense planner and tracker** that helps you manage your monthly budget with clarity. Set a plan, track your spending, view breakdowns, and stay in control of your finances — all in one sleek, responsive web app.

> 🧠 Coming Soon: AI-generated personal finance plans based on your habits and goals.

---

## 🔥 Live Demo

👉 [Visit Fynly Live](https://fynly.vercel.app)

> ⚙️ Fully responsive and mobile-friendly

---

## ✨ Features

- ✅ Secure user login with [Clerk](https://clerk.dev)
- 📅 Create monthly spending plans
- 💸 Add planned expenses by category
- 🧾 Record actual transactions
- 📊 Breakdown: planned vs spent vs remaining
- 🌗 Dark mode support
- 📱 100% responsive design
- 🔒 All data securely stored in the cloud

---

## ⚙️ Tech Stack

| Feature        | Tech Used                     |
|----------------|-------------------------------|
| Frontend       | [Next.js 14 (App Router)](https://nextjs.org) |
| Authentication | [Clerk](https://clerk.dev)    |
| Backend ORM    | [Prisma](https://www.prisma.io) |
| Database       | [NeonDB (PostgreSQL)](https://neon.tech) |
| Styling        | [Tailwind CSS](https://tailwindcss.com) |
| Icons & UI     | [Lucide](https://lucide.dev/), [Shadcn UI](https://ui.shadcn.com) |
| Hosting        | [Vercel](https://vercel.com) |

---

## 🚀 Getting Started Locally

First, clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/fynly.git
cd fynly
npm install

Create a .env file and add your credentials:
DATABASE_URL=your_neon_db_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

npx prisma generate
npx prisma db push

npm run dev




🧠 Future Roadmap
🤖 AI-generated financial plans

📈 Monthly analytics and insights

🔔 Overspending alerts

📤 Export reports as PDF/CSV

👨‍💼 Shareable plans with accountability partners

## 📸 Screenshots

### 🧭 Dashboard Overview
![Dashboard](./public/screens/dashboard.png)

### 📅 Plan Creation
![Create Plan](./public/screens/create-plan.png)

### 📊 Expense Breakdown
![Breakdown](./public/screens/breakdown.png)

### ➕ Adding Transactions
![Add Expense](./public/screens/add-expense.png)







