import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'History',
        path: '/History',
        icon: <AiIcons.AiOutlineClockCircle />,
        className: 'nav-text'
    },
    {
        title: 'Report a Bug',
        path: '/Error',
        icon: <AiIcons.AiOutlineBug />,
        className: 'nav-text'
    },
]