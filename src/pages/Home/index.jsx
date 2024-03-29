import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Node" isActive /></li>
                <li><ButtonText title="React.js" /></li>
                <li><ButtonText title="Node" /></li>
            </Menu>

            <Search>
                <Input
                    placeholder="Pesquisar pelo título" icon={FiSearch}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'react' },
                        ]
                    }}
                    />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>

    )
}