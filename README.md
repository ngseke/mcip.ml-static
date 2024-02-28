# MCIP Static

樂台計畫的靜態資料庫

## Available Data

- 合作夥伴列表
  https://cdn.jsdelivr.net/gh/ngseke/mcip.ml-static@master/json/partner.json
- 常見問題
  https://cdn.jsdelivr.net/gh/ngseke/mcip.ml-static@master/json/faq.json

## Validate And Build JSON Files

Execute the following commands:

```bash
pnpm i
pnpm run build
```

The files will be output to the `dist/json` directory.

## How To Update Static Data?

1. Checkout the `dev` branch
2. Edit the files under `json/` directory. For example:
    - `index.ts` defines the JSON files to be exported and their filenames.
    - `faq.ts` contains the FAQ data itself.
    - `faqSchema.ts` defines the schema of the FAQ data. This will be used to validate the FAQ data and provide type hints.
3. Create a PR. JSON files will be generated and deployed automatically after the PR is merged.
