import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import notificationStyles from './NotificationsStyle';

type Notification = {
    id: number;
    title: string;
    timestamp: string;
    content: string;
};

const initialNotificationsData: Notification[] = [
    { id: 1, title: 'New message from John', timestamp: '1 min ago', content: 'Hey, how are you? Are you available for the match against Manchester' },
    { id: 2, title: 'You have a new member in your team', timestamp: '5 mins ago', content: 'Madhav has joined the squad and he is ready to rumble.' },
    { id: 3, title: 'You need to improve before upcoming matches', timestamp: '10 mins ago', content: 'You have down performed and you are benched.' },
    { id: 4, title: 'Reminder: Meeting at 3 PM', timestamp: '15 mins ago', content: 'Don\'t forget about the meeting at 3 PM.' },
    { id: 5, title: 'Wohoooo heres your stats for the month', timestamp: '20 mins ago', content: 'Check your stats for the month and keep it up!!!!!!!!.' },

];

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>(initialNotificationsData);
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

    const handleNotificationClick = (notification: Notification) => {
        setSelectedNotification(notification);
    };

    const handleDeleteNotification = (id: number) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
        if (selectedNotification?.id === id) {
            setSelectedNotification(null);
        }
    };

    return (
        <div style={notificationStyles.container}>
            <header style={notificationStyles.header}>
                <img src="/logo2.svg" alt="Logo" style={notificationStyles.logoImg} />
                <h1 style={notificationStyles.headerText}>Notifications</h1>
                <div style={notificationStyles.headerUnderline}></div>
            </header>
            <div style={notificationStyles.content}>
                <img src="not.jpg" alt="Not" style={notificationStyles.sideImage} />
                <div style={notificationStyles.list}>
                    {notifications.map((notification, index) => (
                        <div 
                            key={notification.id} 
                            style={{ 
                                ...notificationStyles.listItem, 
                                ...(selectedNotification?.id === notification.id ? notificationStyles.listItemSelected : {}) 
                            }}
                            onClick={() => handleNotificationClick(notification)}
                        >
                            <span style={notificationStyles.listItemIndex}>{index + 1}.</span>
                            <div style={notificationStyles.notificationContent}>
                                <div style={notificationStyles.notificationTitle}>{notification.title}</div>
                                <div>{notification.timestamp}</div>
                                <div>{notification.content}</div>
                            </div>
                            <button 
                                style={notificationStyles.deleteButton}
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    handleDeleteNotification(notification.id);
                                }}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {selectedNotification && (
                <div style={notificationStyles.details}>
                    <h2>{selectedNotification.title}</h2>
                    <p>{selectedNotification.content}</p>
                </div>
            )}
            <footer style={notificationStyles.footer}>
                <p>Player Tracking</p>
            </footer>
        </div>
    );
};

export default Notifications;

//Image Reference:
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fsoccer-player-white-background&psig=AOvVaw0ZkkqBOa03mlih0cxSKSlJ&ust=1716136524322000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqGAoTCLCPnfnQl4YDFQAAAAAdAAAAABC2AQ