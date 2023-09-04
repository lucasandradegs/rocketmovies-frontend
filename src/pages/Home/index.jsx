import { Container, Content } from './styles';
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'
import { Button } from '../../components/Button';
import { Section } from '../../components/Section'
import { Movie } from '../../components/Movie';

export function Home() {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <h2>Meus filmes</h2>
                    <Button title="Adicionar filme" icon={FiPlus} />
                </Content>
                <Section>
                        <Movie data={{ 
                            title: 'Interestellar', 
                            tags: [
                                {id: '1', name: 'Ficção Científica'},
                                {id: '2', name: 'Drama'},
                                {id: '3', name: 'Família'}
                            ]
                            }}
                            />
                    </Section>
            </main>

        </Container>
    )
}