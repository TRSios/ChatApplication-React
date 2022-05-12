import {combineReducers} from 'redux';
import {chatsReducer} from './chatsReducer';
import {messagesReducer} from './messagesReducer';
import {selectedChannelReducer} from './selectedChannelReducer';
import {selectedChatReducer} from './selectedChatReducer';
import {selectedChatNavItemReducer} from './selectedChatNavItemReducer';

export default combineReducers({
    selectedChannel: selectedChannelReducer,
    selectedChat: selectedChatReducer,
    selectedChatNavItem: selectedChatNavItemReducer,
    chats: chatsReducer,
    messages: messagesReducer
});
