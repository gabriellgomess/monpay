import { useRef } from 'react';
import './Header.css';
import { Box } from '@mui/material';
import MonPay from '../../../public/assets/imagens/monpay.png';
import { motion, useInView } from 'framer-motion';

const Header = () => {
    // Referência para o elemento
    const ref = useRef(null);

    // Verifica se o elemento está visível na viewport
    const isInView = useInView(ref, { threshold: 0.5 }); // Aciona quando 50% do elemento está visível

    return (
        <header className="bg-color-dark" style={{ paddingTop: '120px', height: '800px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    ref={ref}
                    style={{
                        width: '600px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '60px',
                    }}
                    initial={{ opacity: 0, y: 80 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5 }}
                >
                    <h1 className="title-desktop text-white">
                        A máquina de cartão ideal para o seu negócio.
                    </h1>
                    <p className="subtitle-desktop text-white">
                        Suas vendas com a taxa mais vantajosa do mercado e sem aluguel.
                    </p>
                    <Box className="btn-yellow">Peça já a sua</Box>
                </motion.div>
                
                <motion.div
                    ref={ref}
                    style={{
                        width: '600px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '60px',
                    }}
                    initial={{ opacity: 0, y: -80 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5 }}
                >
                    <img width="800px" src={MonPay} alt="MonPay" />
                </motion.div>
                
            </Box>
        </header>
    );
};

export default Header;
