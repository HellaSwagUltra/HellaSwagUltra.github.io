# HellaSwagUltra project page

Project homepage for **HellaSwagUltra**, a multilingual commonsense reasoning benchmark spanning 61 languages and 163,138 items.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

Generate the static export and sync it to the repository root before pushing:

```bash
npm run prepare:pages
git add .
git commit -m "Update GitHub Pages"
git push origin main
```

Dataset and pipeline: <https://github.com/aialt/hellaswagultra>
