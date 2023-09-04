import { Container, Profile, Left, Middle } from './styles'
import { Input } from '../Input'

export function Header() {
    return (
        <Container>
            <Left>
                <span>RocketMovies</span>
            </Left>
            <Middle>
                <Input placeholder="Pesquisar pelo título"/>
            </Middle>        
            <Profile>
            <div>
                <strong>Lucas Andrade</strong>
                <span>sair</span>
            </div>
                <img src="https://github.com/lucasandradegs.png" 
                alt="user image" 
                />
            </Profile>
        </Container>
    )
}