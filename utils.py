from bot.config import REQUIRED_CHANNELS, APPROVAL_MODE, ADMINS

def check_subscription(user_id):
    # Placeholder logic
    return True

def handle_approval(user_id):
    if APPROVAL_MODE == "auto":
        return True
    else:
        return user_id in ADMINS