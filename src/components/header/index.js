import React from 'react';
import './styles.scss';
import logo from './../../assets/images/logo192.png'

const Header = (props) => {
    return (
        <header>
            <div className='wrap'>
                <div className='logo'>
                    <img src={logo} alt='Logo' />
                </div>
            </div>
        </header>
    )
}

export default Header