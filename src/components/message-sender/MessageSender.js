import React, {useRef} from 'react';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './MessageSender.scss';

const MessageSender = props => {
    const messageSenderInput = useRef();

    const onSubmit = event => {
        event.preventDefault();
        props.sendMessage(messageSenderInput.current.value);

        messageSenderInput.current.value = '';
    };

    return (
        <div
            className='message-sender'>
            <FontAwesomeIcon
                className='attach-file-icon'
                icon={faPaperclip}/>

            <form
                onSubmit={onSubmit}>
                <input
                    placeholder='Type your message...'
                    ref={messageSenderInput}/>
            </form>

            <div
                className='submit-action'
                onClick={onSubmit}>
                Send
            </div>
        </div>
    );
};

export default MessageSender;
