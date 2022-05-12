import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Chats from '../chats/Chats';
import {fetchChats, selectChatNavItem} from '../../actions';
import {chatsNavItems} from '../../data/chatsNavItems';
import './Channels.scss';

const Channels = props => {
    const { channel } = props;

    useEffect(() => {
        if (props.channel) {
            props.fetchChats();
        }
    }, [channel]);

    const isActiveChatNavItem = chatNavItem => {
        return props.chatNavItem
            && chatNavItem.title === props.chatNavItem.title
            ? 'active-chat-nav-item'
            : '';
    };

    const renderChatsNavItems = () => {
        return chatsNavItems.map(chatNavItem => {
            return (
                <span
                    key={chatNavItem.title}
                    className={`${isActiveChatNavItem(chatNavItem)}`}
                    onClick={() => props.selectChatNavItem(chatNavItem)}>
                    {chatNavItem.title}
                </span>
            );
        });
    };

    if (!props.channel) {
        return null;
    }

    return (
        <div
            className='chats'>
            <div
                className='title'>
                <span>
                    List of {props.channel.name}
                </span>

                <span
                    className='icon'>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}/>
                </span>
            </div>

            <div
                className='chats-nav'>
                {renderChatsNavItems()}
            </div>

            <Chats
                channel={props.channel}
                chatNavItem={props.chatNavItem}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        channel: state.selectedChannel,
        chatNavItem: state.selectedChatNavItem
    };
};

export default connect(
    mapStateToProps,
    {
        selectChatNavItem,
        fetchChats
    }
)(Channels);
