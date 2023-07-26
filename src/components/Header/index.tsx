import { Container, Logo, Foto } from "./styles";

import logoImg from '@assets/logo.png';
import fotoImg from '@assets/foto.png';

export function Header() {
    return (
        <Container>
            <Logo source={logoImg}/>
            <Foto source={fotoImg} />
        </Container>
    )
}