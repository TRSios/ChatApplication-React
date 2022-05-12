import React from 'react';
import {connect} from 'react-redux';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {selectChat} from '../../actions';
import avatarMan from './../../assets/images/avatar-man.png';
import avatarWoman from './../../assets/images/avatar-woman.png';
import './Chats.scss'

const Chats = props => {
    const isActiveChat = chat => {
        return props.chat && chat.user.name === props.chat.user.name
            ? 'active-chat'
            : '';
    };

    const renderChats = () => {
        return props.chats.map(chat => {
            return (
                <div
                    key={chat.user.name}
                    className={`chat ${isActiveChat(chat)}`}
                    onClick={() => props.selectChat(chat)}>
                    <div
                        className='user-pic'>
                        <img
                            src={chat.user.sex === 'male' ? avatarMan : avatarWoman}/>

                        <div
                            className={`user-status ${chat.user.status}`}/>
                    </div>

                    <div
                        className='chat-content'>
                        <div>
                            {chat.user.name}
                        </div>

                        <div
                        className='last-message'>
                            {chat.lastMessage}
                        </div>
                    </div>

                    <div
                        className='chat-actions'>
                        <FontAwesomeIcon
                            icon={faEllipsis}/>

                        <div
                            className='last-message-datetime'>
                            {chat.lastMessageDateTime}
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            {renderChats()}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        chat: state.selectedChat,
        chatNavItem: state.selectedChatNavItem,
        chats: state.chats
            .filter(chat => chat.channel === ownProps.channel.name)
            .filter(chat => ownProps.chatNavItem.type === 'ALL' || chat.type === ownProps.chatNavItem.type)
    };
};

export default connect(
    mapStateToProps,
    {
        selectChat
    }
)(Chats);
