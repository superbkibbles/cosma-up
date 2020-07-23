import React, { Component } from 'react';

import Head from "./Head";

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <Head />
            </header>
        )
    }
}

export default Header;