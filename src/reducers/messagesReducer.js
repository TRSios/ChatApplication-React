export const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MESSAGES':
        case 'MESSAGE_POST':
            return action.payload;
        default:
            return state;
    }
}
