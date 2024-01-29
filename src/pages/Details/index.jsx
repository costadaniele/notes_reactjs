import { Container, Links, Content } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText title="excluir nota" />

                    <h1>Introdução ao React</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae ipsam repellat dignissimos asperiores,
                        accusamus architecto veritatis aliquid facere minima
                        ullam autem ex suscipit obcaecati eligendi distinctio
                        reiciendis dolor harum laudantium?</p>
                    <Section title="Links úteis">
                        <Links>
                            <li><a href='#'>1</a></li>
                            <li><a href='#'>1</a></li>
                            <li><a href='#'>1</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="Css" />
                        <Tag title="React.js" />
                    </Section>
                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>

    )
}