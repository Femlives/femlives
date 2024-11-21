# Femlives

A platform dedicated to women's health

## Setup

- create a `.env.local` file and copy/paste the contents from [here](https://www.notion.so/Accounts-Passwords-8ad522eae5aa4914bde60fd82bf3f28a?pvs=4#5dbfd380c6b4446e9618845a3ee8e057)
- run `npm i`

### Convex setup

- run `npm run db:login`
- follow the instructions
  - The device name doesn't really matter, just pick one that makes sense to you
  - open the browser to continue
  - Use the Femlives github account for logging in

### Vercel CLI setup

#### Install and login

Based on [this docs](https://vercel.com/docs/cli)

- run `npm i -g vercel@latest` to install vercel on your machine
- run `vercel login` to login, easiest should be via femlives github account

#### Link vercel with local project

Based on [this docs](https://vercel.com/docs/cli/project-linking)

- run `vercel`
  - Set up and deploy? - `Y`
  - Which scope ...? - hit `enter`
  - Link to existing project? - `Y`
  - Name of existing project? - `gfnmjwft` (femlives project name)

## Conventions

### linting

We have 2 lint checks enforced by hooks

1. pre-commit: rules can be adjusted here [here](eslint.config.mjs)
2. pre-push: rules can be adjusted here [here](.eslintrc.json)

### Code Formatting

We prefer single quotes

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Version control workflow

Following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, we prefix our commits with e.g. `feat`, `fix`, ect. Additionally, we tie the ticket id of the task to the name following the pattern `<type>[optional scope]: <issue-id> <description>`. The issue id corresponds to the issue on github. So a commit message could look like this:

```text
feat: #31 set up github
```

The commit messages will be automatically prefixed based on the branch name by using the pattern `<type>[optional scope]/<issue-id>/<description>`, i. e.:

```text
feat/#31/automatic-commit-msg-prefix
```

You can also create branches the classic way without the `issue-id`. In this case, only the `type` will be prefixed.

## Getting started

- run `npm run dev` to start the next app and the convex dev server simultaneously
- run `npm run dev:frontend` to start only the next app
- run `npm run dev:db` to start only the convex db dev server

## Hosting

Femlives is hosted on Vercel.

- Production: [www.femilves.de](https://www.femilves.de)

### Environment variables and secrets

Vercel ENV Variables are the single source of truth for the environment variables.

`development` and `preview` share the same secrets. This means if you develop locally on the db, the changes will be reflected on the preview environment as well.

Even if the secrets of production and other environments are the same, we want to have separate secret entries in Vercel environments. This is to ensure that we can modify the secrets for production separately from the other environments.

## Deployment

Automatic deployments of the `main` branch are disabled. Previews are deployed automatically when branches are pushed to github.

### Preview/Development

On Vercel, all branches accept of `main` are automatically deployed when they get pushed to github.
The Convex DB is automatically deployed during development, when the development server is running (`npm run dev:db`).

### Production

Recommended workflow:

- set up and login to Vercel CLI (see [Vercel CLI setup](#vercel-cli-setup))
- login to Convex DB in terminal (see [Convex DB setup](#convex-setup))
- make sure you are on the branch you want to deploy (usually `main`)
- run `npm run deploy:prod`
