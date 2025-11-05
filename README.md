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

## Environment variables

This project reads the following environment variables at runtime. For local development, copy `.env.example` to `.env` (or set these in your environment) and fill in the values.

Required variables defined in `.env.example`:

- `AZURE_OPENAI_ENDPOINT` – The full endpoint URL for your Azure OpenAI resource (for example: `https://my-openai-resource.openai.azure.com`).
- `AZURE_RESOURCE_NAME` – The short name of your Azure resource. Used in some helper utilities and telemetry.
- `AZURE_API_KEY` – API key (secret) for the Azure OpenAI resource. Keep this private and do not commit it to source control.
- `NODE_EXTRA_CA_CERTS` – (Optional) Path to additional CA certificate bundle used by Node.js when making TLS requests. If you don't need custom CAs, leave this blank or unset.

Notes:

- Never commit real secrets to the repository. Use a `.env` file on your local machine or a secrets manager in production.
- On Vercel, Heroku, or other hosting platforms, set these variables in the project dashboard / environment settings instead of committing a `.env` file.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
