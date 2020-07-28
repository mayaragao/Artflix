import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_amarela.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return(
        <header>
            <nav className='Menu'>
                <Link to="/"> 
                    <img className="Logo" src={Logo} alt="Artflix Logo" />
                </Link>

                <Button as={Link} className="ButtonLink" to="/cadastro/video">
                    Novo vídeo
                </Button>
            </nav>
        </header>

    );
}

export default Menu; 