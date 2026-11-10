# Posts Reader

Lab Activities 10 and 11 for the Front-End Development 2 posts app. The app lists posts from JSONPlaceholder, opens individual post details, and provides loading, error, empty, and not-found states.

## Run locally

```bash
npm install
Copy-Item .env.example .env
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Included

- Vite, React, and TypeScript
- Tailwind CSS v4 with the Vite plugin and `@/` source alias
- shadcn/ui `base-luma` theme
- Button, Card, Dropdown Menu, and Skeleton components
- Light, dark, and system theme selection persisted in local storage
- React Router nested routes for the list, post details, and catch-all page
- Axios client configured with `VITE_API_URL`
- TanStack Query hooks for cached post list and detail requests

The `.env.example` file contains the public JSONPlaceholder API URL. Copy it to `.env` before starting the app; `.env` is ignored by Git.
