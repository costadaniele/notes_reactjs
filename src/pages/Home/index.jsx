import  { FiPlus} from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';


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

            </Search>

            <Content>

            </Content>

            <NewNote>
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>

    )
}