import React from 'react'

function MyMessage({ message }) {
    if (message.attachments && message.attachments.lenhgt > 0)
        return (
            <img
                src={message.attachment[0].file}  // the file is location system for the file
                alt="message-attachment"
                className="message-image"
                style={{ float: "right" }}

            />
        )
    return (
        <div className="message" style={{float: "right", marginRight: "18px", color: "white", backgroundColor: "#3B2A50"}} >

        </div>
    )
}

export default MyMessage
