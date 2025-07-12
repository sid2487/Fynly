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

📸 Screenshots
<img width="1906" height="965" alt="Screenshot from 2025-07-12 19-49-44" src="https://github.com/user-attachments/assets/592a96c3-5db3-41c7-994d-5937d2c4f008" />

<img width="1906" height="965" alt="Screenshot from 2025-07-12 19-50-01" src="https://github.com/user-attachments/assets/bf9cf9cb-12fb-4a37-909f-c48819764e73" />

<img width="1906" height="965" alt="Screenshot from 2025-07-12 19-50-18" src="https://github.com/user-attachments/assets/b93a383c-891c-49b9-a7d6-db7df3be9185" />

<img width="1906" height="965" alt="Screenshot from 2025-07-12 19-50-38" src="https://github.com/user-attachments/assets/b5e27ea1-b74c-48f7-af31-735c98705ff2" />








