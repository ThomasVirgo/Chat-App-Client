import React from 'react';

const MessageCard = ({message, isRight }) => {

    const rightStyle = {
        padding: "10px",
        margin: "auto",
        marginBottom: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        background: "rgba(0, 0, 180, 0.65)",
        borderRadius: "5px",
        width: "fitContent"
    };

    const leftStyle = {
        padding: "10px",
        margin: "auto",
        marginBottom: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        background: "grey",
        borderRadius: "5px",
        width: "fitContent"
    };

    const containerStyleLeft = {
        display: "flex",
        justifyContent: "flex-start",
    }
    
    const containerStyleRight = {
        display: "flex",
        justifyContent: "flex-end",
    }

    const style = isRight ? rightStyle : leftStyle
    const containerStyle = isRight ? containerStyleRight : containerStyleLeft

    return (
        <div style={containerStyle}>
            <div style={{display: "inline-block"}}>
                <div style={style}>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}

export default MessageCard;
