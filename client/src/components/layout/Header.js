import React from 'react';

function Header() {
    return(
        // <header style={headerStyle}>
        <header className="header">
            <h1 style={titleStyle}>
                EduForum
            </h1>
        </header>
    );
}

const headerStyle = {
    // backgroundColor: '#f5ba13',
    // backgroundColor: '#5C415D',
    backgroundColor: '#F25D27',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)'
}

const titleStyle = {
    color: '#fff',
    // color: '#BDC696',
    fontFamily: '"McLaren", cursive',
    fontWeight: '200',
    paddingLeft: '30px'
}

export default Header;