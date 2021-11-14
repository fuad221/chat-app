import React from 'react'
import { MyMessage, TheirMessage, MessageForm } from '../components'

function ChatFeed(props) {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {isMyMessage 
                           ? <MyMessage message={message} /> 
                           : <TheirMessage message={message} lastMessageKey={messages[lastMessageKey]}/>}
                    </div>
                    <div className="read-reciept" style={{marginRight: isMyMessage? "18px" : "0xp", marginLeft: isMyMessage ? "0px" : "70px"}}>

                    </div>
                </div>
            );
        });
    };

    return (
        <div>

        </div>
    )
}

export default ChatFeed