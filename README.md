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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Vercel offers a free hosting tier and automatic builds for Next.js apps.

### Steps to deploy

1. Install the [Vercel CLI](https://vercel.com/download) or use the Vercel dashboard.
2. Run `npx vercel` from the project root.
3. Choose your account and connect the `awenvi-solutions` repository.
4. Set the production branch and deploy.

### Connect a custom domain

- In the Vercel dashboard, open your project.
- Go to the **Domains** tab.
- Add your custom domain and follow the DNS verification steps.
- Once verified, Vercel will configure the domain automatically.

If you prefer another free host, you can also use Netlify or Cloudflare Pages with the same project.

---

### Email (SMTP) configuration for contact form

The contact form sends email via SMTP. For local development you can either configure a real SMTP provider (Gmail, SendGrid, Mailgun, Mailtrap, etc.) or rely on the Ethereal test account which previews messages in the server console.

Create a `.env.local` file in the project root with these variables (do not commit real credentials):

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_SECURE=false
CONTACT_EMAIL=awenvisolutions@gmail.com
```

- If SMTP variables are not set, the development server will use an Ethereal test account and print a preview URL in the server console. Use that URL to view the sent email during development.
- In production (Vercel), add the same environment variables via the project Settings → Environment Variables.
