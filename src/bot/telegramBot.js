const axios = require('axios');

/**
 * Represents a Telegram Bot for interfacing with the Telegram Bot API.
 */
class TelegramBot {
    /**
     * Telegram API base URL setup
     * @param {string} token - Telegram Bot Token
     */
    constructor(token) {
        this.apiBase = `https://api.telegram.org/bot${token}`;
    }

    /**
     * Handles communication with Telegram API
     * @param {string} method - Telegram API method name
     * @param {object} params - Parameters for the API method
     * @returns {Promise<any>}
     */
    async callApi(method, params = {}) {
        try {
            return await axios.post(`${this.apiBase}/${method}`, params, {
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (error) {
            console.error(`Error calling ${method}:`, error.response?.data || error.message);
            throw error;
        }
    }

    setWebhook(params) {
        return this.callApi('setWebhook', params);
    };

    deleteWebhook(params) {
        return this.callApi('deleteWebhook', params);
    };

    getMe(params) {
        return this.callApi('getMe', params);
    };

    logOut(params) {
        return this.callApi('logOut', params);
    };

    close(params) {
        return this.callApi('close', params);
    };

    sendMessage(params) {
        return this.callApi('sendMessage', params);
    };

    forwardMessage(params) {
        return this.callApi('forwardMessage', params);
    };

    forwardMessages(params) {
        return this.callApi('forwardMessages', params);
    };

    copyMessage(params) {
        return this.callApi('copyMessage', params);
    };

    copyMessages(params) {
        return this.callApi('copyMessages', params);
    };

    sendPhoto(params) {
        return this.callApi('sendPhoto', params);
    };

    sendAudio(params) {
        return this.callApi('sendAudio', params);
    };

    sendDocument(params) {
        return this.callApi('sendDocument', params);
    };

    sendVideo(params) {
        return this.callApi('sendVideo', params);
    };

    sendAnimation(params) {
        return this.callApi('sendAnimation', params);
    };

    sendVoice(params) {
        return this.callApi('sendVoice', params);
    };

    sendVideoNote(params) {
        return this.callApi('sendVideoNote', params);
    };

    sendPaidMedia(params) {
        return this.callApi('sendPaidMedia', params);
    };

    sendMediaGroup(params) {
        return this.callApi('sendMediaGroup', params);
    };

    sendLocation(params) {
        return this.callApi('sendLocation', params);
    };

    sendVenue(params) {
        return this.callApi('sendVenue', params);
    };

    sendContact(params) {
        return this.callApi('sendContact', params);
    };

    sendPoll(params) {
        return this.callApi('sendPoll', params);
    };

    sendDice(params) {
        return this.callApi('sendDice', params);
    };

    sendChatAction(params) {
        return this.callApi('sendChatAction', params);
    };

    setMessageReaction(params) {
        return this.callApi('setMessageReaction', params);
    };

    getUserProfilePhotos(params) {
        return this.callApi('getUserProfilePhotos', params);
    };

    setUserEmojiStatus(params) {
        return this.callApi('setUserEmojiStatus', params);
    };

    getFile(params) {
        return this.callApi('getFile', params);
    };

    banChatMember(params) {
        return this.callApi('banChatMember', params);
    };

    unbanChatMember(params) {
        return this.callApi('unbanChatMember', params);
    };

    restrictChatMember(params) {
        return this.callApi('restrictChatMember', params);
    };

    promoteChatMember(params) {
        return this.callApi('promoteChatMember', params);
    };

    setChatAdministratorCustomTitle(params) {
        return this.callApi('setChatAdministratorCustomTitle', params);
    };

    banChatSenderChat(params) {
        return this.callApi('banChatSenderChat', params);
    };

    unbanChatSenderChat(params) {
        return this.callApi('unbanChatSenderChat', params);
    };

    setChatPermissions(params) {
        return this.callApi('setChatPermissions', params);
    };

    exportChatInviteLink(params) {
        return this.callApi('exportChatInviteLink', params);
    };

    createChatInviteLink(params) {
        return this.callApi('createChatInviteLink', params);
    };

    editChatInviteLink(params) {
        return this.callApi('editChatInviteLink', params);
    };

    createChatSubscriptionInviteLink(params) {
        return this.callApi('createChatSubscriptionInviteLink', params);
    };

    editChatSubscriptionInviteLink(params) {
        return this.callApi('editChatSubscriptionInviteLink', params);
    };

    revokeChatInviteLink(params) {
        return this.callApi('revokeChatInviteLink', params);
    };

    approveChatJoinRequest(params) {
        return this.callApi('approveChatJoinRequest', params);
    };

    declineChatJoinRequest(params) {
        return this.callApi('declineChatJoinRequest', params);
    };

    setChatPhoto(params) {
        return this.callApi('setChatPhoto', params);
    };

    deleteChatPhoto(params) {
        return this.callApi('deleteChatPhoto', params);
    };

    setChatTitle(params) {
        return this.callApi('setChatTitle', params);
    };

    setChatDescription(params) {
        return this.callApi('setChatDescription', params);
    };

    pinChatMessage(params) {
        return this.callApi('pinChatMessage', params);
    };

    unpinChatMessage(params) {
        return this.callApi('unpinChatMessage', params);
    };

    unpinAllChatMessages(params) {
        return this.callApi('unpinAllChatMessages', params);
    };

    leaveChat(params) {
        return this.callApi('leaveChat', params);
    };

    getChat(params) {
        return this.callApi('getChat', params);
    };

    getChatAdministrators(params) {
        return this.callApi('getChatAdministrators', params);
    };

    getChatMemberCount(params) {
        return this.callApi('getChatMemberCount', params);
    };

    getChatMember(params) {
        return this.callApi('getChatMember', params);
    };

    setChatStickerSet(params) {
        return this.callApi('setChatStickerSet', params);
    };

    deleteChatStickerSet(params) {
        return this.callApi('deleteChatStickerSet', params);
    };

    getForumTopicIconStickers(params) {
        return this.callApi('getForumTopicIconStickers', params);
    };

    createForumTopic(params) {
        return this.callApi('createForumTopic', params);
    };

    editForumTopic(params) {
        return this.callApi('editForumTopic', params);
    };

    closeForumTopic(params) {
        return this.callApi('closeForumTopic', params);
    };

    reopenForumTopic(params) {
        return this.callApi('reopenForumTopic', params);
    };

    deleteForumTopic(params) {
        return this.callApi('deleteForumTopic', params);
    };

    unpinAllForumTopicMessages(params) {
        return this.callApi('unpinAllForumTopicMessages', params);
    };

    editGeneralForumTopic(params) {
        return this.callApi('editGeneralForumTopic', params);
    };

    closeGeneralForumTopic(params) {
        return this.callApi('closeGeneralForumTopic', params);
    };

    reopenGeneralForumTopic(params) {
        return this.callApi('reopenGeneralForumTopic', params);
    };

    hideGeneralForumTopic(params) {
        return this.callApi('hideGeneralForumTopic', params);
    };

    unhideGeneralForumTopic(params) {
        return this.callApi('unhideGeneralForumTopic', params);
    };

    unpinAllGeneralForumTopicMessages(params) {
        return this.callApi('unpinAllGeneralForumTopicMessages', params);
    };

    answerCallbackQuery(params) {
        return this.callApi('answerCallbackQuery', params);
    };

    getUserChatBoosts(params) {
        return this.callApi('getUserChatBoosts', params);
    };

    getBusinessConnection(params) {
        return this.callApi('getBusinessConnection', params);
    };

    setMyCommands(params) {
        return this.callApi('setMyCommands', params);
    };

    deleteMyCommands(params) {
        return this.callApi('deleteMyCommands', params);
    };

    getMyCommands(params) {
        return this.callApi('getMyCommands', params);
    };

    setMyName(params) {
        return this.callApi('setMyName', params);
    };

    getMyName(params) {
        return this.callApi('getMyName', params);
    };

    setMyDescription(params) {
        return this.callApi('setMyDescription', params);
    };

    getMyDescription(params) {
        return this.callApi('getMyDescription', params);
    };

    setMyShortDescription(params) {
        return this.callApi('setMyShortDescription', params);
    };

    getMyShortDescription(params) {
        return this.callApi('getMyShortDescription', params);
    };

    setChatMenuButton(params) {
        return this.callApi('setChatMenuButton', params);
    };

    getChatMenuButton(params) {
        return this.callApi('getChatMenuButton', params);
    };

    setMyDefaultAdministratorRights(params) {
        return this.callApi('setMyDefaultAdministratorRights', params);
    };

    getMyDefaultAdministratorRights(params) {
        return this.callApi('getMyDefaultAdministratorRights', params);
    };

    editMessageText(params) {
        return this.callApi('editMessageText', params);
    };

    editMessageCaption(params) {
        return this.callApi('editMessageCaption', params);
    };

    editMessageMedia(params) {
        return this.callApi('editMessageMedia', params);
    };

    editMessageLiveLocation(params) {
        return this.callApi('editMessageLiveLocation', params);
    };

    stopMessageLiveLocation(params) {
        return this.callApi('stopMessageLiveLocation', params);
    };

    editMessageReplyMarkup(params) {
        return this.callApi('editMessageReplyMarkup', params);
    };

    stopPoll(params) {
        return this.callApi('stopPoll', params);
    };

    deleteMessage(params) {
        return this.callApi('deleteMessage', params);
    };

    deleteMessages(params) {
        return this.callApi('deleteMessages', params);
    };

    getAvailableGifts(params) {
        return this.callApi('getAvailableGifts', params);
    };

    sendGift(params) {
        return this.callApi('sendGift', params);
    };

    giftPremiumSubscription(params) {
        return this.callApi('giftPremiumSubscription', params);
    };

    verifyUser(params) {
        return this.callApi('verifyUser', params);
    };

    verifyChat(params) {
        return this.callApi('verifyChat', params);
    };

    removeUserVerification(params) {
        return this.callApi('removeUserVerification', params);
    };

    removeChatVerification(params) {
        return this.callApi('removeChatVerification', params);
    };

    readBusinessMessage(params) {
        return this.callApi('readBusinessMessage', params);
    };

    deleteBusinessMessages(params) {
        return this.callApi('deleteBusinessMessages', params);
    };

    setBusinessAccountName(params) {
        return this.callApi('setBusinessAccountName', params);
    };

    setBusinessAccountUsername(params) {
        return this.callApi('setBusinessAccountUsername', params);
    };

    setBusinessAccountBio(params) {
        return this.callApi('setBusinessAccountBio', params);
    };

    setBusinessAccountProfilePhoto(params) {
        return this.callApi('setBusinessAccountProfilePhoto', params);
    };

    removeBusinessAccountProfilePhoto(params) {
        return this.callApi('removeBusinessAccountProfilePhoto', params);
    };

    setBusinessAccountGiftSettings(params) {
        return this.callApi('setBusinessAccountGiftSettings', params);
    };

    getBusinessAccountStarBalance(params) {
        return this.callApi('getBusinessAccountStarBalance', params);
    };

    transferBusinessAccountStars(params) {
        return this.callApi('transferBusinessAccountStars', params);
    };

    getBusinessAccountGifts(params) {
        return this.callApi('getBusinessAccountGifts', params);
    };

    convertGiftToStars(params) {
        return this.callApi('convertGiftToStars', params);
    };

    upgradeGift(params) {
        return this.callApi('upgradeGift', params);
    };

    transferGift(params) {
        return this.callApi('transferGift', params);
    };

    postStory(params) {
        return this.callApi('postStory', params);
    };

    editStory(params) {
        return this.callApi('editStory', params);
    };

    deleteStory(params) {
        return this.callApi('deleteStory', params);
    };

    sendSticker(params) {
        return this.callApi('sendSticker', params);
    };

    getStickerSet(params) {
        return this.callApi('getStickerSet', params);
    };

    getCustomEmojiStickers(params) {
        return this.callApi('getCustomEmojiStickers', params);
    };

    uploadStickerFile(params) {
        return this.callApi('uploadStickerFile', params);
    };

    createNewStickerSet(params) {
        return this.callApi('createNewStickerSet', params);
    };

    addStickerToSet(params) {
        return this.callApi('addStickerToSet', params);
    };

    setStickerPositionInSet(params) {
        return this.callApi('setStickerPositionInSet', params);
    };

    deleteStickerFromSet(params) {
        return this.callApi('deleteStickerFromSet', params);
    };

    replaceStickerInSet(params) {
        return this.callApi('replaceStickerInSet', params);
    };

    setStickerEmojiList(params) {
        return this.callApi('setStickerEmojiList', params);
    };

    setStickerKeywords(params) {
        return this.callApi('setStickerKeywords', params);
    };

    setStickerMaskPosition(params) {
        return this.callApi('setStickerMaskPosition', params);
    };

    setStickerSetTitle(params) {
        return this.callApi('setStickerSetTitle', params);
    };

    setStickerSetThumbnail(params) {
        return this.callApi('setStickerSetThumbnail', params);
    };

    setCustomEmojiStickerSetThumbnail(params) {
        return this.callApi('setCustomEmojiStickerSetThumbnail', params);
    };

    deleteStickerSet(params) {
        return this.callApi('deleteStickerSet', params);
    };

    answerInlineQuery(params) {
        return this.callApi('answerInlineQuery', params);
    };

    answerWebAppQuery(params) {
        return this.callApi('answerWebAppQuery', params);
    };

    savePreparedInlineMessage(params) {
        return this.callApi('savePreparedInlineMessage', params);
    };

    sendInvoice(params) {
        return this.callApi('sendInvoice', params);
    };

    createInvoiceLink(params) {
        return this.callApi('createInvoiceLink', params);
    };

    answerShippingQuery(params) {
        return this.callApi('answerShippingQuery', params);
    };

    answerPreCheckoutQuery(params) {
        return this.callApi('answerPreCheckoutQuery', params);
    };

    getStarTransactions(params) {
        return this.callApi('getStarTransactions', params);
    };

    refundStarPayment(params) {
        return this.callApi('refundStarPayment', params);
    };
    editUserStarSubscription(params) {
        return this.callApi('editUserStarSubscription', params);
    }
}

module.exports = TelegramBot;