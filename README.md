# EMRG Bot Services Landing Page

A modern, responsive landing page for EMRG Bot Services featuring an integrated AI chatbot powered by BotForge.

## Features

- **Responsive Design** - Fully responsive across all devices
- **AI Chatbot Integration** - Live chatbot from thebotforge.ai
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Smooth Navigation** - Scroll-to-section functionality
- **Mobile Menu** - Touch-friendly mobile navigation

## Tech Stack

- React 18
- Tailwind CSS
- Lucide Icons
- BotForge AI Chatbot

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will run at `http://localhost:3000`

## Deploy to Railway

### Quick Deploy

1. **Sign up/Login to Railway**
   - Go to [railway.app](https://railway.app)
   - Sign up or log in with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `MuhammadMehroz786/EMRG-BOT`

3. **Configure Deployment**
   - Railway will automatically detect the configuration
   - No additional environment variables needed
   - Click "Deploy"

4. **Get Your URL**
   - Once deployed, Railway will provide a public URL
   - Your site will be live at: `https://your-app.up.railway.app`

### Manual Deployment Steps

If automatic detection doesn't work:

1. Go to Railway Dashboard
2. Create new project from GitHub
3. Add these environment variables (if needed):
   - `NODE_ENV` = `production`
4. Railway will:
   - Run `npm install`
   - Run `npm run build`
   - Run `npm run start:prod`

## Build Commands

- `npm start` - Development server
- `npm run build` - Production build
- `npm run start:prod` - Serve production build
- `npm test` - Run tests

## Chatbot Configuration

The chatbot is configured in `public/index.html`:

```html
<script defer src="https://app.thebotforge.ai/chatWidget.js"
        data-bot-forge-id="691cad138dbc19d40b3b5cc0">
</script>
```

To customize the chatbot, update the `data-bot-forge-id` with your own BotForge bot ID.

## Project Structure

```
/
├── public/
│   └── index.html          # HTML template with chatbot script
├── src/
│   ├── LandingPage.js      # Main landing page component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── railway.json            # Railway configuration
├── nixpacks.toml          # Nixpacks build config
├── Procfile               # Process file for deployment
└── package.json           # Dependencies and scripts
```

## License

© 2025 EMRG Bot Services. All rights reserved.

---

Built with [Claude Code](https://claude.com/claude-code)
