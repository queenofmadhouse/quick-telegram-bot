const { createWebhookBot } = require('../src');

const token = process.env.BOT_TOKEN;
const webhookUrl = process.env.WEBHOOK_URL;

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
