import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"

export function Profile () {
    return (
        <Container>
            <header>
                <Link to="/">
                <ButtonText title="Voltar" icon={FiArrowLeft}/>
                </Link>
              
            </header>
        <Form>
            <Avatar>
                <img src="https://github.com/lucasandradegs.png" alt="user photo" />
                <label htmlFor="avatar">
                    <FiCamera />
                    <input 
                        id="avatar"
                        type="file"/>
                </label>
            </Avatar>
            <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
            />
            <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
            />
            <Input 
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
            />
            <Input 
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
            />
            <Button title="Salvar"/>
        </Form>
        </Container>
    )
}