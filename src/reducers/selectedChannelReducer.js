export const selectedChannelReducer = (selectedChannel = null, action) => {
    switch (action.type) {
        case 'CHANNEL_SELECT':
            return action.payload;
        default:
            return selectedChannel;
    }
};
