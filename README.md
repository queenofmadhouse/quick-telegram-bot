# Quick Telegram Bot

**Based on [telegram bot api](https://core.telegram.org/bots/api)**

### Installation
~~~bash
npm install quick-telegram-bot
~~~

### Usage example
~~~js
const {createWebhookBot} = require("quick-telegram-bot");

const token = 'YOUR_BOT_TOKEN';
const webhookUrl = 'YOUR_WEBHOOK_URL';

const handleUpdate = async (update, bot) => {

    if (update.message && update.message.text) {
        await bot.sendMessage({
            chat_id: update.message.chat.id,
            text: `You said: ${update.message.text}`
        });
    }
};

(async () => {
    await createWebhookBot({
        token: token,
        webhookUrl: webhookUrl,
        port: 3000,
        updateHandler: handleUpdate,
    });
})();
~~~
