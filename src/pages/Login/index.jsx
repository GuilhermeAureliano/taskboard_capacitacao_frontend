import Link from 'next/link';
import Image from 'next/image';

import * as C from './styles';

import Input from '../../components/commons/Input';
import Button from '../../components/commons/Button';
import AbstractSquare from '../../assets/abstract-squares.svg';
import PersonWithSmartphone from '../../assets/person-with-smartphone.svg';

const LoginPage = () => {
    return (
        <C.Container>
            <C.LoginSection>
                <C.Title>Login</C.Title>
                <C.Greetings>Seja bem vindo de volta!</C.Greetings>

                <Input label='Email' name='Email' placeholder='nome@dominio.com'/>
                <Input label='Senha' name='Senha' placeholder='********'/>
                
            <Button>Login</Button>

            <C.Center>
                <span>Não tem uma conta? </span>
                <Link href='#' > Registre-se</Link>
            </C.Center>
            </C.LoginSection>

            <C.DecorativeSection>
                <Image src={PersonWithSmartphone} alt="Pessao com Smarthphone" />
            </C.DecorativeSection>

        </C.Container>
    );
}

export default LoginPage;