# Number Display App

A Next.js application that displays a number from Firebase Realtime Database and allows updating it.

## Features

- Real-time number display with responsive font sizing
- Mobile-friendly interface
- Firebase Realtime Database integration
- TypeScript support
- Tailwind CSS styling

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```
4. Update `.env.local` with your Firebase configuration values
5. Run the development server:
   ```bash
   npm run dev
   ```

## Firebase Setup

1. Create a new Firebase project
2. Enable Realtime Database
3. Set up the following security rules for the database:
   ```json
   {
     "rules": {
       "number": {
         ".read": true,
         ".write": true
       }
     }
   }
   ```
4. Copy your Firebase configuration values to `.env.local`

## Usage

- Visit `/` to see the current number
- Visit `/change` to update the number

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
