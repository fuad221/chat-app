import React from 'react'
import { MyMessage, TheirMessage, MessageForm } from '../components'

function ChatFeed(props) {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div>
            key={`read_${index}`}
            className = "read-receipt"
            style = {{
                float : isMyMessage,
                backgroundImage: person.person.avatar &&  `url($(person.person.avatar))`
            }}
        </div>
    ))

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
                            : <TheirMessage message={message} lastMessageKey={messages[lastMessageKey]} />}
                    </div>
                    <div className="read-reciepts" style={{ marginRight: isMyMessage ? "18px" : "0xp", marginLeft: isMyMessage ? "0px" : "70px" }}>
                            {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat ?.title}</div>
                <div className="chat-subtitle">

                </div>
                {renderMessages()}
                <div style={{height: "100px"}}></div>
                <div className="message-from-container"></div>
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed
