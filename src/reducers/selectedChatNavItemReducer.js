import {chatsNavItems} from '../data/chatsNavItems';

export const selectedChatNavItemReducer = (selectedChatNavItem = chatsNavItems[0], action) => {
    switch (action.type) {
        case 'CHAT_NAV_ITEM_SELECT':
            return action.payload;
        default:
            return selectedChatNavItem;
    }
};
