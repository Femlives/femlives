# Femlives

A platform dedicated to women's health

## Setup

- run `npm i`

### linting

We have 2 lint checks enforced by hooks

1. pre-commit: rules can be adjusted here [here](eslint.config.mjs)
2. pre-push: rules can be adjusted here [here](.eslintrc.json)

## Conventions

### Version control workflow

Following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, we prefix our commits with e.g. `feat`, `fix`, ect. Additionally, we tie the ticket id of the task to the name following the pattern `<type>[optional scope]: <ticket-id> <description>`. With the current usage of Jira, a commit message could look like this:

```text
feat: FL-2 set up github
```

The commit messages will be automatically prefixed based on the branch name by using the pattern `<type>[optional scope]/<ticket-id>/<description>`, i. e.:

```text
feat/FL-10/automatic-commit-msg-prefix
```

You can also create branches the classic way without the `ticket-id`. In this case, only the `type` will be prefixed.

---

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
