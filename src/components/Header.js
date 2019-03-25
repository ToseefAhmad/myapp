import React from 'react';

const list = {items:
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
            }

function Div() {
    return(
        <div className="Header">
            {list.items}
        </div>
    );
}


function Header() {
    return (
        <Div />
    );
}

export default Header;