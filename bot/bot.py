from telegram import Update, Bot
from telegram.ext import Updater, CommandHandler, CallbackContext
from bot.config import TELEGRAM_TOKEN
from bot.utils import check_subscription, handle_approval

def start(update: Update, context: CallbackContext):
    user_id = update.effective_user.id
    if not check_subscription(user_id):
        update.message.reply_text("Please join our channel first!")
        return
    update.message.reply_text("Welcome to the bot!")

def run_bot(event=None):
    updater = Updater(TELEGRAM_TOKEN)
    dp = updater.dispatcher
    dp.add_handler(CommandHandler("start", start))
    updater.start_polling()
    return "Bot started."

if __name__ == "__main__":
    run_bot()