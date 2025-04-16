
# Telegram Bot for Multiple Deployments

This is a fully-featured Telegram bot that includes functionalities like force subscription, admin control, MongoDB integration, and more. You can deploy it on multiple platforms like **Heroku**, **Vercel**, **Docker**, **Cloudflare Workers**, and **Deta Base** with minimal changes. The bot includes full administrative control for managing users, channels, and settings.

## Features

- **Full Admin Control:** Admins can manage users, channels, and settings.
- **Force Subscription:** Users must subscribe to channels before using the bot.
- **Dynamic Channel Management:** Admins can add/remove required channels dynamically.
- **MongoDB Integration:** Stores user data, subscription details, and bot settings.
- **Manual/Automatic Approval:** Admins can choose to approve or reject users for joining the bot.
- **Supports Multiple Deployment Options:** Can be deployed easily on Heroku, Vercel, Docker, Cloudflare Workers, and more.

## Prerequisites

1. **MongoDB Account** (for storing user data and bot settings)
2. **Telegram Bot Token** from [BotFather](https://core.telegram.org/bots#botfather)
3. **Cloudflare Workers**, **Deta Base**, **Heroku**, **Vercel**, or **Docker** account depending on your deployment preference.

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/localmirror/Gift-Code-Bot
cd Gift-Code-Bot
```

### Step 2: Install Dependencies

Make sure to have `Node.js` installed. Then, install the necessary dependencies:

```bash
npm install
```

### Step 3: Configure the Bot

- **Telegram Bot Token:** In `config.js`, replace the placeholder with your **Telegram Bot Token** from BotFather.
- **MongoDB URI:** Provide your **MongoDB** connection string.
- **Channel IDs:** Configure the **channel IDs** where users must be subscribed (for Force Subscribe).

```javascript
module.exports = {
  botToken: 'YOUR_BOT_TOKEN',
  mongoURI: 'YOUR_MONGODB_URI',
  channels: ['@your_channel_1', '@your_channel_2'],
  forceSubscribe: true,
  autoApprove: true, // Change to false if you want manual approval
};
```

### Step 4: Deployment Instructions

#### 1. **Heroku**

- Go to [Heroku](https://www.heroku.com/) and create a new app.
- Connect your GitHub repository to Heroku.
- In the **Settings** tab, click **Reveal Config Vars** and add the following variables:
  - `BOT_TOKEN`: Your Telegram Bot Token
  - `MONGO_URI`: Your MongoDB URI

- Deploy your app and it will be live!

#### 2. **Vercel**

- Sign up or log in to [Vercel](https://vercel.com/).
- Connect your GitHub repository.
- Vercel will automatically detect and deploy the bot. You can set environment variables like `BOT_TOKEN` and `MONGO_URI` in the Vercel dashboard.

#### 3. **Docker**

- Build the Docker image:

```bash
docker build -t telegram-bot .
```

- Run the container:

```bash
docker run -e BOT_TOKEN=your_bot_token -e MONGO_URI=your_mongo_uri -p 5000:5000 telegram-bot
```

- Your bot will be available at `localhost:5000`.

#### 4. **Cloudflare Workers**

- Use [Cloudflare Workers](https://workers.cloudflare.com/) to deploy the bot:
  - Follow the Cloudflare Workers documentation to deploy your bot.
  - Ensure that your `config.js` contains the appropriate environment variables for the bot token and MongoDB URI.

#### 5. **Deta Base**

- Follow the [Deta Base documentation](https://docs.deta.sh/docs/base/quickstart) to set up your Deta Base.
- Deploy your bot to Deta and connect the bot to your MongoDB or Deta Base storage.

## Usage

Once deployed, you can start interacting with your bot. If you've enabled the **force subscription** feature, users will be required to subscribe to the specified channels before using the bot.

### Commands
- `/start`: Initiates the bot and checks the subscription status.
- `/help`: Displays the help message with available commands.
- `/subscribe`: Forcing the user to subscribe to the channels if not already subscribed.

### Admin Controls
Admins have the ability to:
- Approve or reject users.
- Add/remove channels for force subscription.
- Toggle between manual and automatic approval modes.

## Contributions

Feel free to fork the repository and make changes. If you have any improvements or features to add, submit a pull request.

## License

MIT License. See the LICENSE file for details.
