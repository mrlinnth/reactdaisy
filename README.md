# Intro

Another **simple** and **scalable** starter/skeleton project for reactjs projects. This is with Vite.

## Project Structure

- Feature/Modular based approach (recommended for scalability)
- Dictionary index files in sub-folders
- First level `components`, `hooks`, `types` and `services` are for common functions
- Module level `components`, `hooks`, `types` and `services` are for module specific
- Module and Component folders/files use **PascalCase** names
- Other folders/files use **camelCase** names
- Both human and editor/IDE should be able to find files easily
- Avoid too much nesting
- Feel free to reorganize or change structure totally if you want

```text
/src
    /components (for shared components)
        /common
        /header (use semantic names)
        /template
    /modules
        /ModuleA
            /pages
            index.ts
App.tsx
main.tsx
```

## Installed Packages

- [vite v2.8.0](https://vitejs.dev)
- [tailwind v3.0.23](https://tailwindcss.com)
- [daisyui v2.6.0](https://daisyui.com)

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
