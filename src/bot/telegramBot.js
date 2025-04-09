const axios = require('axios');

class TelegramBot {
    constructor(token) {
        this.token = token;
        this.apiBase = `https://api.telegram.org/bot${token}`;
    }

    async sendMessage(chatId, text) {
        try {
            const response = await axios.post(`${this.apiBase}/sendMessage`, {
                chat_id: chatId,
                text,
            });
            return response.data;
        } catch (error) {
            console.error('Error sending message:', error.response?.data || error.message);
            throw error;
        }
    }

    async setWebhook(url) {
        try {
            const response = await axios.post(`${this.apiBase}/setWebhook`, { url });
            return response.data;
        } catch (error) {
            console.error('Error setting webhook:', error.response?.data || error.message);
            throw error;
        }
    }

    async deleteWebhook() {

    }
}

module.exports = TelegramBot;
