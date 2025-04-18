# Testing the VitePress Site Locally

To test your VitePress documentation site locally, follow these steps:

## Step 1: Navigate to the docs directory

```bash
cd docs
```

## Step 2: Install dependencies (if not already done)

Based on your `docs/package.json`, you already have the necessary dependencies configured. If you haven't installed them yet, run:

```bash
npm install
```

## Step 3: Start the development server

Run the development server using the script defined in your `package.json`:

```bash
npm run docs:dev
```

This will start a local development server, typically at http://localhost:5173/

## Step 4: View your site

Open your browser and navigate to:
- http://localhost:5173/

The development server has hot-reloading enabled, so any changes you make to your documentation files will be immediately reflected in the browser.

## Additional Commands

Your `package.json` includes these scripts:

- `npm run docs:build` - Build the site for production
- `npm run docs:preview` - Preview the production build locally

## Troubleshooting

If you encounter any issues:

1. **Port conflicts**: If port 5173 is already in use, VitePress will automatically try to use another port. Check the terminal output for the URL.

2. **Missing dependencies**: If you see errors about missing dependencies, run `npm install` again.

3. **Build errors**: If you have syntax errors in your Markdown or configuration files, the development server will show error messages in the terminal and browser.
