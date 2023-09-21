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
import { useParams, useNavigate } from "react-router-dom"
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Rating } from '../../components/Rating'



export function Details() {
    const { user } = useAuth();
    const [data, setData] = useState(null)
    const params = useParams();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movies/${params.id}`)
            setData(response.data)
            console.log(response.data)
        }
        fetchMovies()
    }, [])

    function handleBack() {
        navigate(-1)
    }


    return (
        <Container>
            <Header />
            {
                data &&
                <main>
                    <Content>
                            <ButtonText
                                title="Voltar"
                                icon={FiArrowLeft}
                                onClick={handleBack}
                            />
                            <div className='top'>
                                <h1>{data.title}</h1>
                                <Rating rate={data.rating} details />
                            </div>
                            <div className='mid'>
                                <img
                                    src={avatarUrl}
                                    alt={user.name}
                                />
                                <span>Por {user.name}</span>
                                <LiaClock />
                                <span>{data.created_at}</span>
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