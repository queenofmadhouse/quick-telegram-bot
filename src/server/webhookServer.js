const express = require('express');

/**
 * Represents a Webhook server designed to handle incoming updates for a Telegram bot.
 */
class WebhookServer {
    /**
     * @param {function} updateHandler
     * @param {number} port
     * @param {TelegramBot} bot
     */
    constructor(updateHandler, port, bot) {
        this.bot = bot;
        this.port = port;
        this.path = '/webhook';
        this.updateHandler = updateHandler;
        this.app = express();
        this.server = null;

        this.app.use(express.json());

        this.app.post(this.path, async (req, res) => {
            const update = req.body;
            try {
                await this.updateHandler(update, this.bot);
            } catch (err) {
                console.error('Error in update handler:', err);
            }
            res.sendStatus(200);
        });
    }

    async start() {
        this.server = this.app.listen(this.port, '0.0.0.0', () => {
            console.log(`Webhook server listening on port ${this.port}`);
        });
    }

    async stop() {
        if (this.server) {
            this.server.close(() => {
                console.log('Webhook server stopped.');
            });
        }
    }
}

module.exports = WebhookServer;
