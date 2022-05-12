import React from 'react';
import ChannelsGroups from '../channels-groups/ChannelsGroups';
import Chat from '../chat/Chat';
import ChatsList from '../channels/Channels';
import UserInformation from '../user-information/UserInformation';
import './Messages.scss';

const Messages = () => {
    return (
        <div
            className='messages'>
            <ChannelsGroups/>

            <ChatsList/>

            <UserInformation/>

            <Chat/>
        </div>
    );
}

export default Messages;
