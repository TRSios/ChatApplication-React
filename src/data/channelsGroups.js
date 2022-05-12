import {faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';

export const channelsGroups = [
    {
        title: 'Teams',
        icon: faUserPlus,
        channels: [
            {
                name: 'designers',
                unreadMessages: 7
            },
            {
                name: 'programmers',
                unreadMessages: 10
            },
            {
                name: 'marketers',
                unreadMessages: 15
            },
            {
                name: 'copyrighters',
                unreadMessages: 8
            },
            {
                name: 'managers',
                unreadMessages: 5
            }
        ]
    },
    {
        title: 'Group channels',
        icon: faPlus,
        channels: [
            {
                name: 'app-idea',
                unreadMessages: 0
            },
            {
                name: 'general',
                unreadMessages: 0
            },
            {
                name: 'our clients',
                unreadMessages: 0
            }
        ]
    }
];
