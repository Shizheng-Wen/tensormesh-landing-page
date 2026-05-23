# tensormesh-landing-page

Landing page for the TensorMesh framework.

## Build

```bash
npm install
npm run build
```

`npm run build` runs [Astro](https://astro.build/)’s production build (`astro build`). It compiles pages and components from `src/`, processes styles (Tailwind CSS v4 via Vite), and writes a static, optimized site to **`dist/`**.

The output is plain HTML, CSS, and assets—ready to deploy to any static host. Files in `public/` (including `CNAME` for `www.tensor-mesh.com`) are copied into `dist/` as-is.

To verify the production build locally:

```bash
npm run preview
```

## Development

```bash
npm run dev
```

Starts the Astro dev server with hot reload at `http://localhost:4321` (default).
