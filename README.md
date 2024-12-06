This is a React.js + TypeScript + Next.js project for the `Binogi Code Challenge`.

You can view the running application hosted on Vercel: https://binogi-code-challenge-dahyun-kim.vercel.app/

## Functionality

- Search View

  - Recipes can be looked up using the search input at the top page.
  - Inputs are debounced by 300ms to prevent rapid API calls.
  - Results can be automatically loaded by scrolling down (infinite scroll).
    - Please don't scroll down too fast (API rate limits)
  - You can click on a Recipe Card to navigate to the Recipe View

- Recipe View

  - More details of the Recipe are shown here.
  - There is a button to toggle Recipe Bookmark.

- Bookmark View
  - Shows a list of all the Bookmarked Recipes.
  - You can refresh the page and the data will persist (LocalStorage)

## Design considerations

- EDAMAM API interfaces were automatically generated using [openapi-typescript](https://github.com/openapi-ts/openapi-typescript)
- Components are organized by loosely following [Atomic design principles](https://bradfrost.com/blog/post/atomic-web-design/)
- As this was a front-end challenge, LocalStorage to persist bookmark data
- Tailwind CSS and [shadcn/ui](https://ui.shadcn.com/) was used as a CSS framework and Component Library

## To run this locally

First, install necessary packages:

```bash
npm instal
# or
pnpm install
```

And then run the development server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
