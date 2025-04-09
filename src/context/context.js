class Context {
    constructor(update, bot) {
        this.update = update || {};
        console.log(update, bot);
        this.bot = bot;
    }

    get message() {
        return this.update.message;
    }

    get chat() {
        return this.message?.chat;
    }

    get from() {
        return this.message?.from;
    }

    async reply(text, options = {}) {
        const chatId = this.chat?.id;
        if (!chatId) throw new Error('Cannot reply: no chat ID found');
        return this.bot.sendMessage(chatId, text, options);
    }
}

module.exports = Context;
