import { Container, Content, NewMovie } from './styles';
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'
import { Button } from '../../components/Button';
import { Section } from '../../components/Section'
import { Movie } from '../../components/Movie';
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movies?title=${search}`)
            setMovies(response.data)
        }
        fetchMovies();
    }, [search])

    return (
        <Container>
            <Header>
                <input
                    type="text"
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>
            <NewMovie>
                <h2>Meus filmes</h2>
                <Link to="/new">
                    <Button title="Adicionar filme" icon={FiPlus} />
                </Link>
            </NewMovie>
            <Content>
                <Section>
                    {
                        movies.map(movie => (
                            <Movie
                                key={String(movie.id)}
                                data={movie}
                                onClick={() => handleDetails(movie.id)}
                            />
                        ))
                    }
                    
                </Section>
            </Content>
        </Container>
    )
}