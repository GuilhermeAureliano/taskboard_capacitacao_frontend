import * as C from './styles';

import Input from '../../components/commons/Input';

const LoginPage = () => {
    return (
        <C.Container>
            <C.LoginSection>
                <C.Title>Login</C.Title>
                <C.Greetings>Seja bem vindo de volta!</C.Greetings>

                <Input label='Email' name='Email' placeholder='nome@dominio.com'/>
                <Input label='Senha' name='Senha' placeholder='********'/>
            </C.LoginSection>
        </C.Container>
    );
}

export default LoginPage;