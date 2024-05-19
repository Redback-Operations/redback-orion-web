import React, { useState } from 'react';
import { settingsStyles, darkModeStyles } from './SettingsStyle';

const Settings: React.FC = () => {
    const [settings, setSettings] = useState({
        username: '',
        email: '',
        password: '',
        profilePicture: '',
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        profilePrivacy: false,
        blockedUsers: [],
        dataSharing: true,
        darkMode: false,
        colorScheme: 'default',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSettings({
                ...settings,
                profilePicture: URL.createObjectURL(file),
            });
        }
    };

    const handleDeactivateAccount = () => {
        // Implement logic to deactivate account
        console.log('Account deactivated');
    };

    const handleDeleteAccount = () => {
        // Implement logic to delete account
        console.log('Account deleted');
    };

    const handleSaveSettings = () => {
        // Implement logic to save settings
        console.log('Settings saved:', settings);
        // Show confirmation message
        window.alert('Your settings have been saved.');
    };

    const toggleDarkMode = () => {
        setSettings({
            ...settings,
            darkMode: !settings.darkMode,
        });
    };

    return (
        <div style={{ ...settingsStyles.container, backgroundColor: settings.darkMode ? '#333' : '#fff', color: settings.darkMode ? '#fff' : '#333' }}>
            <header style={{ ...settingsStyles.header, color: settings.darkMode ? '#fff' : '#333' }}>
                <img src="/logo2.svg" alt="Logo" style={settingsStyles.logoImg} />
                <h1 style={{ ...settingsStyles.headerText, ...(settings.darkMode && darkModeStyles.headerText) }}>Settings</h1>
                <div style={settingsStyles.headerUnderline}></div>
            </header>
            <div style={settingsStyles.content}>
                <div style={settingsStyles.formContainer}>
                    <h2 style={{ ...settingsStyles.headerText, ...(settings.darkMode && darkModeStyles.heading) }}>User Settings</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleSaveSettings(); }} style={settingsStyles.form}>
                        <div style={settingsStyles.section}>
                            <h3 style={{ ...settingsStyles.label, ...(settings.darkMode && darkModeStyles.subheading) }}>Profile Settings</h3>
                            <label style={settingsStyles.label}>
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    value={settings.username}
                                    onChange={handleChange}
                                    style={settingsStyles.input}
                                />
                            </label>
                            <label style={settingsStyles.label}>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={settings.email}
                                    onChange={handleChange}
                                    style={settingsStyles.input}
                                />
                            </label>
                            <label style={settingsStyles.label}>
                                Password:
                                <input
                                    type="password"
                                    name="password"
                                    value={settings.password}
                                    onChange={handleChange}
                                    style={settingsStyles.input}
                                />
                            </label>
                            <label style={settingsStyles.label}>
                                Profile Picture:
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={settingsStyles.input}
                                />
                            </label>
                        </div>
                        <div style={settingsStyles.section}>
                            <h3 style={{ ...settingsStyles.label, ...(settings.darkMode && darkModeStyles.subheading) }}>Notification Settings</h3>
                            <label style={settingsStyles.label}>
                                <input
                                    type="checkbox"
                                    name="emailNotifications"
                                    checked={settings.emailNotifications}
                                    onChange={handleChange}
                                    style={settingsStyles.checkbox}
                                />
                                Email Notifications
                            </label>
                            <label style={settingsStyles.label}>
                                <input
                                    type="checkbox"
                                    name="smsNotifications"
                                    checked={settings.smsNotifications}
                                    onChange={handleChange}
                                    style={settingsStyles.checkbox}
                                />
                                SMS Notifications
                            </label>
                            <label style={settingsStyles.label}>
                                <input
                                    type="checkbox"
                                    name="pushNotifications"
                                    checked={settings.pushNotifications}
                                    onChange={handleChange}
                                    style={settingsStyles.checkbox}
                                />
                                Push Notifications
                            </label>
                        </div>
                        <div style={settingsStyles.section}>
                            <h3 style={{ ...settingsStyles.label, ...(settings.darkMode && darkModeStyles.subheading) }}>Privacy Settings</h3>
                            <label style={settingsStyles.label}>
                                <input
                                    type="checkbox"
                                    name="profilePrivacy"
                                    checked={settings.profilePrivacy}
                                    onChange={handleChange}
                                    style={settingsStyles.checkbox}
                                />
                                Make Profile Private
                            </label>
                            <label style={settingsStyles.label}>
                                <input
                                    type="checkbox"
                                    name="dataSharing"
                                    checked={settings.dataSharing}
                                    onChange={handleChange}
                                    style={settingsStyles.checkbox}
                                />
                                Enable Data Sharing
                            </label>
                        </div>
                        <div style={settingsStyles.section}>
                            <h3 style={{ ...settingsStyles.label, ...(settings.darkMode && darkModeStyles.subheading) }}>Theme Settings</h3>
                            <label style={settingsStyles.label}>
                                <input
                                    type="checkbox"
                                    name="darkMode"
                                    checked={settings.darkMode}
                                    onChange={toggleDarkMode}
                                    style={settingsStyles.checkbox}
                                />
                                Enable Dark Mode
                            </label>
                        </div>
                        <button type="submit" style={settingsStyles.submitButton}>Save Settings</button>
                    </form>
                </div>
            </div>
            <footer style={{ ...settingsStyles.footer, color: settings.darkMode ? '#fff' : '#888' }}>
                <p>Player Tracking</p>
            </footer>
        </div>
    );
};

export default Settings;
