import * as C from './styles';
import Link from 'next/link';
import Image from 'next/image';

import Input from '../../components/commons/Input';
import Button from '../../components/commons/Button';

import PersonWithForm from '../../assets/person-with-form.svg';


const SignUp = () => {
    return (
        <>
           <C.Container>
               <C.DecorativeSection>
                    <Image src={PersonWithForm} alt="Pessoa com form" />
               </C.DecorativeSection>
               <C.SignUpSection>
                   <C.Title>Registre-se</C.Title>
                   <C.Greetings>E gerencia as suas tarefas com eficiência!</C.Greetings>

                    <C.InputsName>
                        <Input label="Nome" name="Nome"/>
                        <Input label="Sobrenome" name="Sobrenome"/>
                    </C.InputsName>

                    <Input label="Email" name="Email" placeholder="nome@dominio.com"/>

                    <C.InputsPassword>
                        <Input label="Senha" name="Senha"/>
                        <Input label="Confirmar senha" name="Confirmar Senha"/>
                    </C.InputsPassword>

                    <Button>Registrar</Button>

                    <C.Center>
                        <span>Já tem uma conta?</span>
                        <Link href="/Login">Faça login</Link>
                    </C.Center>
               </C.SignUpSection>

           </C.Container>
        </>
    )
}

export default SignUp;
