import { Button } from '../../components/Button'
import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { FiArrowLeft, FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { LiaClock } from 'react-icons/lia'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { api } from '../../services/api'


export function Details() {
    const [data, setData] = useState(null)
    const params = useParams();

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movies/${params.id}`)
            setData(response.data)
            console.log(response.data)
        }
        fetchMovies()
    }, [])


    return (
        <Container>
            <Header />
            {
                data &&
                <main>
                    <Content>
                        <ButtonText title="Voltar" icon={FiArrowLeft} />
                        <h1>{data.title}</h1>
                        <div>
                            <img src="https://github.com/lucasandradegs.png" alt="user imgage" />
                            <span>Por Lucas Andrade </span>
                            <LiaClock />
                            <span>23/05/22 às 08:00</span>
                        </div>
                        {
                            data &&
                            <Section>
                                {
                                    data.tags.map(tag => (
                                        <Tag
                                            key={String(tag.id)}
                                            title={tag.name}
                                            colored
                                        />
                                    ))
                                }
                            </Section>
                        }
                        <p>
                            {data.description}
                        </p>
                    </Content>
                </main>
            }
        </Container>
    )
}