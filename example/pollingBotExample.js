const {createPollingBot} = require('../src');

const token = process.env.BOT_TOKEN;

const handleUpdate = async (update, bot) => {

    if (update.message && update.message.text) {
        await bot.sendMessage({
            chat_id: update.message.chat.id,
            text: `You said: ${update.message.text}`
        });
    }
};

(async () => {
    console.log(token)
    await createPollingBot({
        token: token,
        updateHandler: handleUpdate,
        pollingTimeout: 30,   // seconds
        pollInterval: 1000    // milliseconds
    });
})();
