
    # Telegram Bot Deployment Repo

    ## Deployment Instructions

    ### Docker Deployment:
    1. Build the Docker image:
        ```bash
        docker build -t telegram-bot .
        ```
    2. Run the container:
        ```bash
        docker run -p 3000:3000 telegram-bot
        ```

    ### Vercel Deployment:
    1. Install the Vercel CLI:
        ```bash
        npm install -g vercel
        ```
    2. Deploy:
        ```bash
        vercel
        ```

    ### Heroku Deployment:
    1. Create a Heroku app:
        ```bash
        heroku create
        ```
    2. Push to Heroku:
        ```bash
        git push heroku master
        ```

    ### Cloudflare Workers Deployment:
    1. Install Wrangler:
        ```bash
        npm install -g wrangler
        ```
    2. Deploy to Cloudflare Workers:
        ```bash
        wrangler publish
        ```

    ### Deta Base:
    1. Use Deta Base for storing data:
        - Set up your Deta account and project key in `.env`.
    