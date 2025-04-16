# Telegram Bot

A feature-rich Telegram bot with force subscribe, admin control, and multi-deployment support.

## Features

- Force subscribe with manual/auto approval
- Admin panel
- Channel control
- Vercel/Heroku/Docker/Cloudflare support

## Deployment

### ▶️ Vercel

1. Create a project in Vercel
2. Upload this repo
3. Set environment variables (`TELEGRAM_TOKEN`, `MONGO_URI`)
4. Deploy

### 🐳 Docker

```bash
docker build -t telegram-bot .
docker run telegram-bot
```

### ☁️ Heroku

1. Push to GitHub
2. Connect to Heroku
3. Add buildpack for Python
4. Add config vars
5. Deploy

### 🌐 Cloudflare Workers

Use `worker.js` style if converting to JS frontend (not included in this zip).

---
## Credits

Created with ❤️ by ChatGPT