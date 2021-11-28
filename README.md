This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Configure your local environment
Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Add details for one or more providers (e.g. Google, Twitter, GitHub, Email, etc).

## Database
A database is needed to persist user accounts and to support email sign in. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, JSON Web Tokens will be enabled by default.

You can skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

Docs: next-auth.js.org/adapters/overview
Adapters Repo: nextauthjs/adapters
## Configure Authentication Providers
Review and update options in pages/api/auth/[...nextauth].js as needed.

When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of {server}/api/auth/callback/{provider}.

e.g. For Google OAuth you would use: http://localhost:3000/api/auth/callback/google

A list of configured providers and their callback URLs is available from the endpoint /api/auth/providers. You can find more information at https://next-auth.js.org/configuration/providers

You can also choose to specify an SMTP server for passwordless sign in via email.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
