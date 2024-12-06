
import Logo from '/assets/imagens/logo_monbank_yellow.png';
import { Box, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const isDesktop = useMediaQuery('(min-width: 600px)');

    // Pegar o pathname
    const location = useLocation();
    const path = location.pathname;

    // Função para verificar se o link deve ser "active" para os itens do dropdown
    const isActive = (route) => path.startsWith(route);

    return (
        <Box
            sx={{
                backgroundColor: '#101820',               
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'space-between',
                padding: '25px 0 0 0',
                height: '83px',           
                position: 'fixed',
                width: '100vw',
                top: 0,
                zIndex: 999,
            }}
        >   
            <Link to="/">
                <Box sx={{marginLeft: '50px'}}>
                    <img width={220} src={Logo} alt="Logo MonBank" />
                </Box>                
            </Link>
            <Box sx={{marginRight: '50px'}} className="links">
                <Link className={`${isDesktop ? 'text-desktop' : 'text-mobile'} menu-item-500 ${isActive('/sobre') ? 'menu-item-500-active' : ''}`} to="/sobre">
                    Sobre
                </Link>
                <Link className={`${isDesktop ? 'text-desktop' : 'text-mobile'} menu-item-500 ${isActive('/monpay') ? 'menu-item-500-active' : ''}`} to="/monpay">
                    MonPay
                </Link>                
                <Link className={`${isDesktop ? 'text-desktop' : 'text-mobile'} menu-item-500 ${isActive('/fale-conosco') ? 'menu-item-500-active' : ''}`} to="/fale-conosco">
                    Fale Conosco
                </Link>
                <Box className={`${isDesktop ? 'text-desktop' : 'text-mobile'} btn-abre-conta`}>
                    Peça já a sua
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;
