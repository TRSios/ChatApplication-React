import React from 'react';
import {connect} from 'react-redux';
import avatarMan from './../../assets/images/avatar-man.png';
import avatarWoman from './../../assets/images/avatar-woman.png';
import './UserInformation.scss';

const UserInformation = props => {
    const { chat } = props;

    if (!chat) {
        return null;
    }

    return (
        <div
            className='user-information'>
            <div
                className='user-title'>
                <img
                    src={chat.user.sex === 'male' ? avatarMan : avatarWoman}/>

                <div
                    className='summary'>
                    <div
                        className='user-label'>
                        {chat.user.name}
                    </div>

                    <div
                        className='user-value'>
                        {`${chat.user.address.city}, ${chat.user.address.country}`}
                    </div>
                </div>
            </div>

            <div
                className='user-content'>
                <div
                    className='user-content-block'>
                    <div
                        className='user-label'>
                        Nickname
                    </div>

                    <div
                        className='user-value'>
                        {chat.user.nickname}
                    </div>

                    <div
                        className='user-label'>
                        Email
                    </div>

                    <div
                        className='user-value'>
                        {chat.user.email}
                    </div>

                    <div
                        className='user-label'>
                        Phone number
                    </div>

                    <div
                        className='user-value'>
                        {chat.user.phone}
                    </div>
                </div>

                <div
                    className='user-content-block'>
                    <div
                        className='user-label'>
                        Date of birth
                    </div>

                    <div
                        className='user-value'>
                        {chat.user.dateOfBirth}
                    </div>

                    <div
                        className='user-label'>
                        Gender
                    </div>

                    <div
                        className='user-value'>
                        {chat.user.sex}
                    </div>

                    <div
                        className='user-label'>
                        Languages
                    </div>

                    <div
                        className='user-value'>
                        {chat.user.languages}
                    </div>

                    <div
                        className='profile-action'>
                        Show full profile
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        chat: state.selectedChat
    };
};

export default connect(
    mapStateToProps
)(UserInformation);
