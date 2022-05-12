import AllProjects from '../components/AllProjects';
import Messages from '../components/messages/Messages';
import MyProjects from '../components/MyProjects';
import Search from '../components/Search';
import Statistics from '../components/Statistics';
import Teams from '../components/Teams';

export const navItems = [
    {
        href: 'all-projects',
        title: 'All projects',
        component: <AllProjects/>
    },
    {
        href: 'my-projects',
        title: 'My projects',
        component: <MyProjects/>
    },
    {
        href: 'teams',
        title: 'Teams',
        component: <Teams/>
    },
    {
        href: 'messages',
        title: 'Messages',
        component: <Messages/>
    },
    {
        href: 'statistics',
        title: 'Statistics',
        component: <Statistics/>
    },
    {
        href: 'search',
        title: 'Search',
        component: <Search/>
    }
];
