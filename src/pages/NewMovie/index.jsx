import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section"
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { api } from "../../services/api";



export function NewMovie() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState([])
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate();


    async function handleRemove() {
        const confirm = window.confirm("Deseja excluir o filme?")

        if (confirm) {
            navigate(-1)
        }
    }

    async function handleNewMovie() {
        if (!title) {
            return alert("Você precisa informar o nome do filme!")
        }

        if (!rating) {
            return alert("Você precisa informar a nota do filme!")
        }

        if (rating < 0 || rating > 5) {
            return alert("A nota do filme deve estar entre 0 e 5")
        }

        if (!description) {
            return alert("Você precisa informar a descrição do filme!")
        }

        if (newTag) {
            return alert("Você preencheu porém não adicionou a última tag!")
        }


        await api.post("/movies", {
            title,
            description,
            rating,
            tags,
        })

        alert("Filme criado com sucesso!")
        navigate("/")
    }

    function handleAddTag() {
        if (newTag === "") {
            alert("Não é possível adicionar uma tag vazia")
            return
        }

        setTags(prevState => [...prevState, newTag])

        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <Link to="/" >
                            <ButtonText title="Voltar" icon={FiArrowLeft} />
                        </Link>

                        <h1>Novo filme</h1>
                    </header>
                    <div>
                        <Input
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <Textarea
                        placeholder="Descrição do filme"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <MovieItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <MovieItem
                                isNew
                                placeholder="Nova tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <div className="buttons">
                        <Button title="Excluir filme" colored onClick={handleRemove} />
                        <Button title="Salvar alterações" onClick={handleNewMovie} />
                    </div>
                </Form>
            </main>
        </Container>
    )
}