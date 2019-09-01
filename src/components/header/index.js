import React from 'react';
import './styles.scss';
import logo from './../../assets/images/logo192.png'

const Header = (props) => {
    return (
        <header data-test='headerComponent'>
            <div className='wrap'>
                <div className='logo'>
                    <img data-test='logoIMG' src={logo} alt='Logo' />
                </div>
            </div>
        </header>
    )
}

export default Header