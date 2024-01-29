import { RiShutDownLine } from 'react-icons/ri';
// https://react-icons.github.io/react-icons/
import { Container, Profile, Logout } from './styles';

export function Header({ title, loading = false, ...rest }) {
    return (
        <Container>
            <Profile>
                <img
                    src="https://github.com/costadaniele.png"
                    alt="foto do usuário"
                />

                <div>
                    <span>Bem-vinda</span>
                    <strong>Daniele Costa</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}