export const selectedChatReducer = (selectedChat = null, action) => {
    switch (action.type) {
        case 'CHAT_SELECT':
            return action.payload;
        default:
            return selectedChat;
    }
};
