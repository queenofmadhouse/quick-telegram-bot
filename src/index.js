const TelegramBot = require('./bot/telegramBot');
const WebhookServer = require('./server/webhookServer');

/**
 * Creates and configures a webhook-based Telegram bot.
 *
 * @param {Object} options - The configuration options for the webhook bot.
 * @param {string} options.token - The authentication token for the Telegram bot.
 * @param {string} options.webhookUrl - The base URL for the webhook endpoint.
 * @param {number} options.port - The port number to run the webhook server.
 * @param {Function} options.updateHandler - The handler function for incoming bot updates.
 * @return {Promise<void>} Resolves when the webhook bot and server have been successfully initialized.
 */
async function createWebhookBot({ token, webhookUrl, port, updateHandler}) {
    const bot = new TelegramBot(token);
    const path = '/webhook';

    const fullWebhookUrl = `${webhookUrl}${path}`;
    const server = new WebhookServer(updateHandler, port, bot);

    bot.setWebhook({url: fullWebhookUrl});

    await server.start();

    const shutdown = async () => {
        console.log('Shutting down...');
        await bot.deleteWebhook();
        await server.stop();
        process.exit(0);
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
}

/**
 * Creates a polling bot for Telegram to handle incoming updates in a specified interval.
 *
 * @param {Object} config - Configuration options for the polling bot.
 * @param {string} config.token - The Telegram bot token for authentication.
 * @param {Function} config.updateHandler - A handler function to process incoming updates.
 * This function receives two parameters: the update object and the bot instance.
 * @param {number} config.pollingTimeout - The timeout duration in seconds for the polling request.
 * @param {number} config.pollInterval - The interval in milliseconds between successive polling actions.
 * @return {Promise<void>} Resolves when the polling bot is successfully initiated.
 */
async function createPollingBot({ token, updateHandler, pollingTimeout, pollInterval}) {
    const bot = new TelegramBot(token);
    let offset = 0;
    let polling = true;

    async function poll() {
        if (!polling) return;
        try {
            const response = await bot.getUpdates(
                { offset: offset, timeout: pollingTimeout }
            );
            const updates = response.data.result;
            if (updates.length > 0) {
                for (const update of updates) {
                    await updateHandler(update, bot);
                    offset = update.update_id + 1;
                }
            }
        } catch (error) {
            console.error('Polling error:', error);
        }
        setTimeout(poll, pollInterval);
    }

    await poll();

    const stopPolling = () => {
        polling = false;
    };

    process.on('SIGINT', () => {
        stopPolling();
        process.exit(0);
    });
    process.on('SIGTERM', () => {
        stopPolling();
        process.exit(0);
    });
}

module.exports = { createWebhookBot, createPollingBot };
