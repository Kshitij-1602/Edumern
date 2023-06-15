import React from 'react'

function Footer() {
    return(
        // <div style={footerStyle}>
        <div className="footer">
            <p style={{padding: '10px'}}>About us | Contact us</p>
        </div>
    );
}

const footerStyle = {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    background: '#393E41',
    color: '#DCD6F7'
}

export default Footer;