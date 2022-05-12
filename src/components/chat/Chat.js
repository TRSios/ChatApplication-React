import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import MessageSender from '../message-sender/MessageSender';
import {fetchMessages, sendMessage} from '../../actions';
import avatarMan from './../../assets/images/avatar-man.png';
import avatarWoman from './../../assets/images/avatar-woman.png';
import './Chat.scss';

const Chat = props => {
    const { chat, messages } = props;
    const messageGroup = messages
        .find(msg => msg.userName === chat.user.name);
    const messagesContainer = useRef();

    useEffect(() => {
        if (chat) {
            props.fetchMessages();
        }
    }, [chat]);

    const sendMessage = value => {
        props.sendMessage({
            userName: chat.user.name,
            message: {
                author: 'Name Surname',
                message: value,
                dateTime: new Date().toLocaleString('en-US', { hour: '2-digit', minute: 'numeric', hour12: true })
            }
        });
    };

    const isExternalMessageAuthor = message => {
        return message.author === chat.user.name;
    };

    const renderAuthor = (message, isExternalAuthorAvatar) => {
        const isExternalAuthor = isExternalMessageAuthor(message);
        const avatar = message.author !== chat.user.name
            || chat.user.sex === 'male'
            ? avatarMan
            : avatarWoman;

        if (
            (isExternalAuthorAvatar && isExternalAuthor)
            || (!isExternalAuthorAvatar && !isExternalAuthor)
        ) {
            return (
                <div
                    className='author'>
                    <img
                        src={avatar}/>
                </div>
            );
        } else {
            return null;
        }
    };

    const renderMessages = () => {
        return messageGroup.messages.map(message => {
            return (
                <div
                    key={Math.random()}
                    className={`cue ${isExternalMessageAuthor(message) ? '' : 'self-author'}`}>
                    {renderAuthor(message, true)}

                    <div
                        className='message'>
                        <div
                            className='message-text'>
                            {message.message}
                        </div>

                        <div
                            className='message-datetime'>
                            {message.dateTime}
                        </div>
                    </div>

                    {renderAuthor(message, false)}
                </div>
            );
        });
    };

    if (
        !chat
        || !messageGroup
    ) {
        return null;
    }

    return (
        <div
            className='chat-messages'>
            <div
                className='messages-container'
                ref={messagesContainer}>
                {renderMessages()}
            </div>

            <MessageSender
                chat={chat}
                sendMessage={sendMessage}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        chat: state.selectedChat,
        messages: state.messages
    };
};

export default connect(
    mapStateToProps,
    {
        sendMessage,
        fetchMessages
    }
)(Chat);
