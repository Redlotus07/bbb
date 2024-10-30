import React, { useState } from 'react';
import './Chatbot.css'; // Import your CSS for styling

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInput('');
            // Simulate chatbot response
            setTimeout(() => {
                const botResponse = { text: `You said: ${input}`, sender: 'bot' };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000);
        }
    };

    return (
        <div className="chatbot-container">
            <h3>Chatbot</h3>
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;