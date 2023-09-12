import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input"
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText"
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>
                <Link to="/">
                <ButtonText title="Voltar para o login" icon={FiArrowLeft}/>
                </Link>
                
            </Form>

            <Background />
        </Container>
    )
}