const express = require('express');
const Context = require("../context/context");

class WebhookServer {
    /**
     * @param {function} updateHandler
     * @param {object} options
     * @param {number} options.port
     * @param {string} options.path
     * @param bot
     */
    constructor(updateHandler, { port = 3000, path = '/webhook' } = {}, bot) {
        this.bot = bot;
        this.port = port;
        this.path = path;
        this.updateHandler = updateHandler;
        this.app = express();
        this.server = null;

        this.app.use(express.json());

        this.app.post(this.path, async (req, res) => {
            const update = req.body;
            console.log(update);
            const ctx = new Context(update, this.bot);
            console.log(ctx);

            try {
                await this.updateHandler(ctx);
            } catch (err) {
                console.error('Error in handler:', err);
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
