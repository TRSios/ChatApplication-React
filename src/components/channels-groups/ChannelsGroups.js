import React from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {selectChannel} from '../../actions';
import {channelsGroups} from '../../data/channelsGroups';
import './ChannelsGroups.scss';

const ChannelsGroups = props => {
    const renderChannels = channels => {
        const isActiveChannel = channel => {
            return props.selectedChannel
                && channel.name === props.selectedChannel.name
                ? 'active-channel'
                : '';
        };

        return channels.map(channel => {
            return (
                <div
                    key={channel.name}
                    className={`channel ${isActiveChannel(channel)}`}
                    onClick={() => props.selectChannel(channel)}>
                    <span
                        className='name'>
                        #{channel.name}
                    </span>

                    <span>
                        {channel.unreadMessages === 0 ? '' : channel.unreadMessages}
                    </span>
                </div>
            );
        });
    };

    const renderChannelsGroups = () => {
        return channelsGroups.map(channelsGroup => {
            return (
                <div
                    key={channelsGroup.title}
                    className='channels-group'>
                    <div
                        className='title'>
                        <span>
                            {channelsGroup.title}
                        </span>

                        <span
                            className='icon'>
                            <FontAwesomeIcon
                                icon={channelsGroup.icon}/>
                        </span>
                    </div>

                    <div
                        className='channels'>
                        {renderChannels(channelsGroup.channels)}
                    </div>
                </div>
            );
        });
    };

    return (
        <div
            className='channels-groups'>
            {renderChannelsGroups()}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selectedChannel: state.selectedChannel
    };
};

export default connect(
    mapStateToProps,
    {
        selectChannel
    }
)(ChannelsGroups);
