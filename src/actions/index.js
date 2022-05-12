import {chats} from '../data/chats';
import {messages} from '../data/messages';

export const selectChannel = channel => {
    return {
        type: 'CHANNEL_SELECT',
        payload: channel
    };
};

export const selectChat = chat => {
    return {
        type: 'CHAT_SELECT',
        payload: chat
    };
};

export const selectChatNavItem = chatNavItem => {
    return {
        type: 'CHAT_NAV_ITEM_SELECT',
        payload: chatNavItem
    };
};

export const sendMessage = message => async dispatch => {
    const response = await new Promise(resolve => {
        setTimeout(() => {
            const messageGroup = messages
                .find(msg => msg.userName === message.userName);
            messageGroup.messages = [
                message.message,
                ...messageGroup.messages
            ];
            const messagesGroups = messages
                .filter(msgGroup => msgGroup.userName !== message.userName);

            resolve([
                ...messagesGroups,
                messageGroup
            ]);
        }, 0);
    });

    dispatch({
        type: 'MESSAGE_POST',
        payload: response
    });
};

export const fetchChats = () => async dispatch => {
    const response = await new Promise(resolve => {
        setTimeout(() => {
            resolve([...chats]);
        }, 0);
    });

    dispatch({
        type: 'FETCH_CHATS',
        payload: response
    });
};

export const fetchMessages = () => async dispatch => {
    const response = await new Promise(resolve => {
        setTimeout(() => {
            resolve([...messages]);
        }, 0);
    });

    dispatch({
        type: 'FETCH_MESSAGES',
        payload: response
    });
};
