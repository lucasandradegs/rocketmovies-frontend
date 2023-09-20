import { Container, Profile, Left, Middle, Logout } from './styles'
import { useAuth } from "../../hooks/auth"
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({children}) {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <Left>
                <span>RocketMovies</span>
            </Left>
            {children}
            <Profile to="/profile">
                <strong>{user.name}</strong>
                <img
                    src={avatarUrl}
                    alt={user.name}
                />
            </Profile>
            <Logout onClick={signOut}>
                <span>sair</span>
            </Logout>
        </Container>
    )
}