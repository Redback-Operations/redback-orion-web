import React, { useState } from 'react';
import helpStyles from './HelpStyle';

const Help: React.FC = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const [helpSubmitted, setHelpSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    const handleSubmitHelpRequest = () => {
        if (messages.length > 0) {
            fetch('http://localhost:3001/api/help', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setHelpSubmitted(true);
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error:', error);
                setErrorMessage('Failed to submit help request');
            });
        }
    };

    return (
        <div style={helpStyles.container}>
            <header style={helpStyles.header}>
                <img src="/logo2.svg" alt="Logo" style={helpStyles.logoImg} />
                <h1 style={helpStyles.headerText}>Help</h1>
                <div style={helpStyles.headerUnderline}></div>
            </header>
            <div style={helpStyles.content}>
                <img src="/help.jpg" alt="Help" style={helpStyles.sideImage} />
                <div style={helpStyles.chatSection}>
                    <div style={helpStyles.chatBox}>
                        {messages.map((msg, index) => (
                            <div key={index} style={helpStyles.chatMessage}>
                                {msg}
                            </div>
                        ))}
                    </div>
                    <div style={helpStyles.chatInputSection}>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={helpStyles.chatInput}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSendMessage} style={helpStyles.sendButton}>Send</button>
                    </div>
                    <button onClick={handleSubmitHelpRequest} style={helpStyles.submitButton}>
                        Submit Help Request
                    </button>
                    {helpSubmitted && <p style={helpStyles.message}>Your help request has been submitted. We will get back to you shortly.</p>}
                    {errorMessage && <p style={helpStyles.errorMessage}>{errorMessage}</p>}
                </div>
            </div>
            <footer style={helpStyles.footer}>
                <p>Player Tracking</p>
            </footer>
        </div>
    );
};

export default Help;


//Refernce Help Image
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fonline-help-icon-3d-illustration-from-feedback-collection-creative-online-help-3d-icon-web-design-templates-infographics-more_32952114.htm&psig=AOvVaw1tWzzkXaS2jAcxBUxszOGk&ust=1716205946491000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDRmMDTmYYDFQAAAAAdAAAAABAE