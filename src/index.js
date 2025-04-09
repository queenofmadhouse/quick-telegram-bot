const TelegramBot = require('./bot/telegramBot');
const WebhookServer = require('./server/webhookServer');

/**
 * Главная точка входа. Создает TelegramBot, настраивает Webhook и запускает сервер.
 * @param {string} token - Токен Telegram-бота
 * @param {string} webhookUrl - Публичный URL, куда будут слаться обновления
 * @param {function} updateHandler - Хендлер обновлений, получает объект ctx
 * @param {object} [options]
 * @param {number} [options.port=3000]
 * @param {string} [options.path='/webhook']
 */
async function createBot({ token, webhookUrl, updateHandler, options = {} }) {
    const bot = new TelegramBot(token);
    const server = new WebhookServer(updateHandler, { port: options.port, path: options.path }, bot);

    const setWebhookResponse = await bot.setWebhook(`${webhookUrl}${options.path || '/webhook'}`);
    console.log('setWebhook response:', setWebhookResponse.data);

    await server.start();

    const shutdown = async () => {
        console.log('Shutting down...');
        await bot.deleteWebhook();
        await server.stop();
        process.exit(0);
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);

    return { bot, server };
}

module.exports = { createBot };
