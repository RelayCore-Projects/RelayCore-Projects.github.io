# RelayCore Projects

Source code of the RelayCore Projects portfolio site: https://relaycore-projects.github.io

The site presents the projects of the [RelayCore-Projects](https://github.com/RelayCore-Projects) GitHub organization. It is a static site built with Astro and published to GitHub Pages by GitHub Actions on every push to `main`.

## Development

Requires Node.js 22.22 or later.

| Command           | What it does                                  |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Installs the dependencies                     |
| `npm run dev`     | Starts a local dev server at `localhost:4321` |
| `npm run build`   | Builds the static site into `dist/`           |
| `npm run preview` | Serves the built site locally                 |

## Where things are

| Path                         | What it contains                               |
| :--------------------------- | :--------------------------------------------- |
| `src/content/projects/`      | One Markdown file per project (text and data)  |
| `src/pages/`                 | The pages: home, about, project pages          |
| `src/layouts/BaseLayout.astro` | Shared header, navigation and footer         |
| `src/styles/global.css`      | Colors, fonts and shared styles                |
| `.github/workflows/deploy.yml` | Build and deployment to GitHub Pages         |

## Stack

- Astro (static site generator)
- GitHub Actions and GitHub Pages
- Inter font, self-hosted with Fontsource
- Planned: Hungarian version of the site
- Planned: Playwright smoke tests
