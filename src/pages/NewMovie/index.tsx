import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section"
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"


export function NewMovie() {
    return (
        <Container>
            <Header />
                <main>
                    <Form>
                        <header>
                            <Link to="/" >
                            <ButtonText title="Voltar" icon={FiArrowLeft}/>
                            </Link>
                            
                            <h1>Novo filme</h1>
                        </header>
                            <div>
                                <Input placeholder="Título" />
                                <Input placeholder="Sua nota (de 0 a 5)" />
                            </div>   
                        <Textarea placeholder="Observações"/>
                        <Section title="Marcadores">
                            <div className="tags">
                                <MovieItem value="Família" />
                                <MovieItem isNew placeholder="Nova tag"/>
                            </div>
                        </Section>
                        <div className="buttons">
                            <Button title="Excluir filme" colored/>
                            <Button title="Salvar alterações" />
                        </div>                
                    </Form>
                </main>
        </Container>
    )
}