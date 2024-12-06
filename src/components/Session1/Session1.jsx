import { Box } from '@mui/material';
import TouchScreen from '../../../public/assets/icones/monpay/touchscreen.png';
import ChipWiFi from '../../../public/assets/icones/monpay/chip_wifi.png';
import AproximacaoChip from '../../../public/assets/icones/monpay/aproximacao_chip.png'
import ComprovanteImpresso from '../../../public/assets/icones/monpay/comprovante.png';
import TecladoVirtual from '../../../public/assets/icones/monpay/teclado_virtual.png';
import PixViaQrCode from '../../../public/assets/icones/monpay/pix_via_qrcode.png';
import BgMonpay2 from '../../../public/assets/imagens/bg-monpay2.png';
import Monpay from '../../../public/assets/imagens/monpay2.png';

const Session1 = () => {

    const cards2 = [
        {
            icon: TouchScreen,
            title: 'Touchscreen',
        },
        {
            icon: ChipWiFi,
            title: 'Chip & WiFi',
        },
        {
            icon: AproximacaoChip,
            title: 'Aproximação ou Chip',
        },
        {
            icon: ComprovanteImpresso,
            title: 'Comprovante Impresso',
        },
        {
            icon: TecladoVirtual,
            title: 'Teclado Virtual',
        },
        {
            icon: PixViaQrCode,
            title: 'Pix via QR Code',
        },
    ]

    return (
        <section style={{paddingTop: '180px', width: '90%', maxWidth: '1600px', margin: '0 auto'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '1000px', gap: '60px',  margin: '0 auto 80px auto'}}>
                <h1 className='title-desktop text-center'>Porque escolher a <span>Máquina Monpay?</span></h1>
                <p className='subtitle-desktop text-center'>Tudo o que sua empresa precisa para simplificar finanças e ganhar agilidade em um único lugar.</p>
            </Box>
            <Box sx={{display: 'flex', gap: '60px', margin: '0 auto' }}>
                <Box sx={{width: '1000px', backgroundImage: `url(${BgMonpay2})`, backgroundRepeat: 'no-repeat'}}>
                    <img src={Monpay} alt="" />
                </Box>
                <Box sx={{display: 'flex', gap: '30px', flexWrap: 'wrap'}}>
                {cards2.map((card, index) => (
                    <Box key={index} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px', width: '400px', height: '350px', backgroundColor: '#101820', borderRadius: '20px'}}>
                        <img src={card.icon} alt={card.title} />
                        <h3 className='text-desktop text-white text-center'>{card.title}</h3>
                    </Box>
                ))}
            </Box>
            </Box>
        </section>
    );
    }

export default Session1;